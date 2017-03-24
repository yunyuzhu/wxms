package com.bigdata.shiro;

import com.bigdata.model.system.Menu;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.User;
import com.bigdata.service.system.IMenuService;
import com.bigdata.service.system.IRoleService;
import com.bigdata.service.system.IUserService;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;

/**
* 自定义Realm,进行数据源配置
* @Title: MyRealm.java
* @Description: 自定义Realm,进行数据源配置 
* @author zzc   
* @date 2016年10月28日 下午5:06:19
*/
public class MyRealm extends AuthorizingRealm {
	
	@Resource(name="userService")
    private IUserService userService;
	
	@Resource(name="roleService")
    private IRoleService roleService;
	
	@Resource(name="menuService")
    private IMenuService menuService;
	
	/**
	 * 只有需要验证权限时才会调用, 授权查询回调函数, 进行鉴权但缓存中无用户的授权信息时调用.在配有缓存的情况下，只加载一次.
	 * mod ekko 2015年10月27日
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
		String loginName = SecurityUtils.getSubject().getPrincipal().toString();
		if (loginName != null) {
			String userId = ((User)SecurityUtils.getSubject().getSession().getAttribute("userSession")).getId().toString();
			List<Menu> rs = new ArrayList<Menu>();
			// 权限信息对象info,用来存放查出的用户的所有的角色（role）及权限（permission）
			SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
			// 获取用户的角色集合
			List<Role> roles = roleService.seletUserRole(userId);
			HashSet hs = new LinkedHashSet();
			for (Role role : roles) {
				String roleId = String.valueOf(role.getId());
				if(StringUtils.isNotBlank(roleId)){
					hs.add(roleId);
					// 角色对应相应的权限
					rs = menuService.findRoleResourcess(roleId);
					for (Menu resources : rs) {
						info.addStringPermission(resources.getResKey().toString());
					}
				}
			}
			info.setRoles(hs);
			return info;
		}
		return null;
	}
	
	// 初始方法备份
	/*@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
		String loginName = SecurityUtils.getSubject().getPrincipal().toString();
		if (loginName != null) {
			String userId = SecurityUtils.getSubject().getSession().getAttribute("userSessionId").toString();
			List<ResFormMap> rs = resourcesMapper.findUserResourcess(userId);
			// 权限信息对象info,用来存放查出的用户的所有的角色（role）及权限（permission）
			SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
			// 用户的角色集合
			// info.addRole("default");
			// 用户的角色集合
			// info.setRoles(user.getRolesName());
			// 用户的角色对应的所有权限，如果只使用角色定义访问权限
			for (ResFormMap resources : rs) {
				info.addStringPermission(resources.get("resKey").toString());
			}

			return info;
		}
		return null;
	}*/
	
	/**
	 * 认证回调函数,登录时调用
	 * 首先根据传入的用户名获取User信息；然后如果user为空，那么抛出没找到帐号异常UnknownAccountException；
	 * 如果user找到但锁定了抛出锁定异常LockedAccountException；最后生成AuthenticationInfo信息，
	 * 交给间接父类AuthenticatingRealm使用CredentialsMatcher进行判断密码是否匹配，
	 * 如果不匹配将抛出密码错误异常IncorrectCredentialsException；
	 * 另外如果密码重试此处太多将抛出超出重试次数异常ExcessiveAttemptsException；
	 * 在组装SimpleAuthenticationInfo信息时， 需要传入：身份信息（用户名）、凭据（密文密码）、盐（username+salt），
	 * CredentialsMatcher使用盐加密传入的明文密码和此处的密文密码进行匹配。
	 */
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		String userName = (String) token.getPrincipal();

		List<User> userList = userService.findByName(userName);
		if (userList.size() != 0) {
			if ("2".equals(userList.get(0).getLocked())) {
				throw new LockedAccountException(); // 帐号锁定
			}
			// 从数据库查询出来的账号名和密码,与用户输入的账号和密码对比
			// 当用户执行登录时,在方法处理上要实现user.login(token);
			// 然后会自动进入这个类进行认证
			// 交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配，如果觉得人家的不好可以自定义实现
			SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(userName, // 用户名
					userList.get(0).getPassword(), // 密码
					ByteSource.Util.bytes(userName + "" + userList.get(0).getCredentialsSalt()),// salt=username+salt
					getName() // realm name
			);
			// 当验证都通过后，把用户信息放在session里
			Session session = SecurityUtils.getSubject().getSession();
			session.setAttribute("userSession", userList.get(0));
			return authenticationInfo;
		} else {
			throw new UnknownAccountException();// 没找到帐号
		}
	}
	
	/**
     * 更新用户授权信息缓存.
     */
	public void clearCachedAuthorizationInfo(PrincipalCollection principals) {
		super.clearCachedAuthorizationInfo(principals);
	}
	
	/**
     * 更新用户信息缓存.
     */
	public void clearCachedAuthenticationInfo(PrincipalCollection principals) {
		super.clearCachedAuthenticationInfo(principals);
	}
	
	/**
	 * 清除用户授权信息缓存.
	 */
	public void clearAllCachedAuthorizationInfo() {
		getAuthorizationCache().clear();
	}
	
	/**
	 * 清除用户信息缓存.
	 */
	public void clearAllCachedAuthenticationInfo() {
		getAuthenticationCache().clear();
	}
	
	/**
	 * 清空所有缓存
	 */
	public void clearCache(PrincipalCollection principals) {
		super.clearCache(principals);
	}
	
	/**
	 * 清空所有认证缓存
	 */
	public void clearAllCache() {
		clearAllCachedAuthenticationInfo();
		clearAllCachedAuthorizationInfo();
	}
	
}