package com.bigdata.controller.system;

import com.bigdata.common.base.BaseController;
import com.bigdata.common.util.CommonTools;
import com.bigdata.common.util.Const;
import com.bigdata.common.util.PageData;
import com.bigdata.common.util.TreeUtil;
import com.bigdata.model.system.Menu;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.User;
import com.bigdata.model.system.UserLogin;
import com.bigdata.service.system.ILoginService;
import com.bigdata.service.system.IMenuService;
import com.bigdata.service.system.IRoleService;
import com.bigdata.service.system.IUserService;

import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* 进行管理后台框架界面的类
* @Title: LoginController.java
* @Description: LoginController 
* @author zzc   
* @date 2016年9月21日 下午4:43:30
 */
@Controller
@RequestMapping("/")
public class LoginController extends BaseController {
	
	@Resource(name="loginService")
    private ILoginService loginService;
	
	@Resource(name="userService")
    private IUserService userService;
	
	@Resource(name="roleService")
    private IRoleService roleService;
	
	@Resource(name="menuService")
    private IMenuService menuService;
	
	/**
	 * 登录请求
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "login", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String login(HttpServletRequest request) {
		request.removeAttribute("error");
		return "/admin/login";
	}

/*********************** 用户 start *********************/
	/*** 微信用户登录 ***/
	@RequestMapping(value = "mlogin", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mlogin(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mlogin";
	}
	/*** 微信用户注册 ***/
	@RequestMapping(value = "mreg", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mreg(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mreg";
	}

	/*** 首页 ***/
	@RequestMapping(value = "mhome", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mhome(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mhome";
	}
	/*** 活动 ***/
	@RequestMapping(value = "mactivity", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mactivity(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mactivity";
	}
	/*** 消费扫描 ***/
	@RequestMapping(value = "mcost", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mcost(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mcost";
	}
	/*** 个人中心 ***/
	@RequestMapping(value = "mcenter", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mcenter(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mcenter";
	}

	/*** 活动详情 ***/
	@RequestMapping(value = "mactinfo", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mactinfo(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mactinfo";
	}

	/*** 商品兑换申请 ***/
	@RequestMapping(value = "mgoodapply", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mgoodapply(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mgoodapply";
	}

	/*** 关于 ***/
	@RequestMapping(value = "mabout", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String mabout(HttpServletRequest request) {
		request.removeAttribute("error");
		return "mobile/mabout";
	}

/*********************** 用户 end *********************/
	/**
	 * 登录提交
	 * @param username
	 * @param password
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "login", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody 
	//使用注解@ResponseBody可以将结果（一个包含字符串和JavaBean的Map），转换成JSON。
	public Object login(String username, String password, String code,  HttpServletRequest request) {
		String errInfo = "";
		Map<String,String> map = new HashMap<String,String>();
		try {
			if (!request.getMethod().equals("POST")) {
				request.setAttribute("error", "支持POST方法提交！");
			}
			
			// 想要得到 SecurityUtils.getSubject()　的对象．．访问地址必须跟ｓｈｉｒｏ的拦截地址内．不然后会报空指针
			Subject user = SecurityUtils.getSubject();
			// 用户输入的账号和密码,,存到UsernamePasswordToken对象中..然后由shiro内部认证对比,
			// 认证执行者交由ShiroDbRealm中doGetAuthenticationInfo处理
			// 当以上认证成功后会向下执行,认证失败会抛出异常

			UsernamePasswordToken token = new UsernamePasswordToken(username, password);
			
			Session session = user.getSession();
			String sessionCode = (String)session.getAttribute(Const.SESSION_SECURITY_CODE);//获取session中的验证码
			
			if(CommonTools.notEmpty(sessionCode) && sessionCode.equalsIgnoreCase(code)){
				
				try {
					user.login(token);
					
					UserLogin userLogin = new UserLogin();
					userLogin.setUserId(((User)request.getSession().getAttribute("userSession")).getId());
					userLogin.setUserName(username);
					userLogin.setLoginIp(session.getHost());
					loginService.addUserLogin(userLogin);
					errInfo = "success";
					
				} catch (LockedAccountException lae) {
					token.clear();
					errInfo = "locked";//用户被锁定
				} catch (ExcessiveAttemptsException e) {
					token.clear();
					errInfo = "userwarning";//登录失败次数过多,锁定10分钟!
				} catch (AuthenticationException e) {
					token.clear();
					errInfo = "usererror";//用户名或密码有误
				}
			}else{
				errInfo = "codeerror";//验证码输入有误
			}
		} catch (Exception e) {
			e.printStackTrace();
			errInfo = "unknown";
		}
		map.put("result", errInfo);
		return CommonTools.returnObject(new PageData(), map);
	}
	
	/**
	 * 首页
	 */
	@RequestMapping("index")
	public String index(Model model) throws Exception {
		//shiro管理的session
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		// 获取登录的bean
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
		User user = (User)CommonTools.findUserSession(request);

		List<Role> roles = roleService.seletUserRole(user.getId().toString());
		List<Menu> list = new ArrayList<Menu>();
		for (Role role : roles) {
			String roleId = String.valueOf(role.getId());
			if(StringUtils.isNotBlank(roleId)){
				List<Menu> menuList = menuService.findRoleResourcess(roleId);
				for (Menu menu : menuList) {
					list.add(menu);
				}
			}
		}
		TreeUtil treeUtil = new TreeUtil();
		List<Menu> ns = treeUtil.getChildObjects(list, 0);
		model.addAttribute("list", ns);
		session.setAttribute(Const.SESSION_menuList, ns);
		//登陆的信息回传页面
		model.addAttribute("userFormMap", user);
		return "/admin/index";
	}
	
	/**
	 * 获取某个用户的权限资源
	 * @param request
	 * @return
	 */
	@RequestMapping("findAuthority")
	@ResponseBody
	public List<String> findAuthority(HttpServletRequest request) {
		return null;
	}
	
	/**
	 * 注销
	 * @return
	 */
	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public String logout() {
		//使用权限管理工具进行用户的退出，注销登录
		SecurityUtils.getSubject().logout();
		
		//会销毁，在SessionListener监听session销毁，清理权限缓存
		return "redirect:login";
	}
	
}
