package com.bigdata.service.tenant.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import com.bigdata.common.util.HttpResult;
import com.bigdata.dao.tenant.ShopManageMapper;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.TradeBean;
import com.bigdata.service.tenant.IShopManageService;

/**   
* @Title: ShopManageServiceImpl.java
* @Description: 商户信息接口实现类 
* @author zzc   
* @date 2017年3月30日 上午10:54:47   
*/
@Service
public class ShopManageServiceImpl implements IShopManageService {
	
	@Resource
	private ShopManageMapper shopManageMapper;

	/*
	 * 查询用户列表
	 * */
	@Override
	public Object getUserPage(String tenantName, String trade, Integer pageStart, Integer pageSize) {
		Map<String, Object> resMap=new HashMap<>();
		
		//符合查询条件的数据总条数
		int total = shopManageMapper.getUserCount(tenantName, trade);
		resMap.put("total", total);
		List<User> rows=null;
		if (total > 0) {
			rows = shopManageMapper.getUserPageList(tenantName,trade,pageStart,pageSize);
			if(!rows.isEmpty()){
				int i=1;
				for(User user: rows){
					user.setOrderId(i);
					i++;
				}
			}
		}
		resMap.put("rows", rows);

		return resMap;
	}

	/*
	 * 添加新用户
	 * 
	 * */
	@Override
	public HttpResult saveUserAndRole(String userName, String password, Integer roleId,
			String useFlag,String remark, String tenantName, String trade, String address, String telephone, String linkName, String linkPhone) {
		//用户密码明文加密
        //Preconditions.checkArgument(!Strings.isNullOrEmpty(userName),"username不能为空"); 
		//Preconditions.checkArgument(!Strings.isNullOrEmpty(password),"password不能为空"); 
        SecureRandomNumberGenerator secureRandomNumberGenerator=new SecureRandomNumberGenerator(); 
        String salt= secureRandomNumberGenerator.nextBytes().toHex(); 
        //组合username,两次迭代，对密码进行加密 
        String password_cipherText= new Md5Hash(password,userName+salt,2).toHex(); 
        
        //账号重名检查
        int count=shopManageMapper.getUserByUserName(userName);
        if(count>0){
        	return HttpResult.build(false, "1000", "用户名已存在");
        }
        
        //保存用户
        User user=new User(); 
        user.setUserName(userName); //用户名
        user.setPassword(password_cipherText); //加密后密码
        user.setCredentialsSalt(salt);//盐
		user.setUseFlag(useFlag);//冻结状态
		user.setRemark(remark);//备注
		user.setTenantName(tenantName);
		user.setTrade(trade);
		user.setAddress(address);
		user.setTelephone(telephone);
		user.setLinkName(linkName);
		user.setLinkPhone(linkPhone);
		user.setLocked("0");//是否锁定：默认不锁定"0"
		shopManageMapper.saveUser(user);//添加用户
		int userId=user.getId();
		
		//保存用户和角色id
		shopManageMapper.saveUserRole(userId,roleId);
		
		return HttpResult.build(true, "0000", "保存成功");
	}

	/*
	 * 编辑用户
	 * 
	 * */
	@Override
	public HttpResult updateUserAndRole(Integer userId, Integer roleId, String useFlag, String remark, 
			String tenantName, String trade, String address, String telephone, String linkName, String linkPhone) {
		//编辑用户
        User user=new User(); 
        user.setId(userId); //用户名
		user.setUseFlag(useFlag);//冻结状态
		user.setRemark(remark);//备注
		user.setTenantName(tenantName);
		user.setTrade(trade);
		user.setAddress(address);
		user.setTelephone(telephone);
		user.setLinkName(linkName);
		user.setLinkPhone(linkPhone);
		shopManageMapper.updateUser(user);
		
		//更新角色
		shopManageMapper.updateUserRole(userId,roleId);
		
		return HttpResult.build(true, "0000", "保存成功！");
	}

	@Override
	public Object delUserAndRole(String userIds) {
		//删除用户
		shopManageMapper.delUser(userIds);
		//删除用户角色
		shopManageMapper.delUserRole(userIds);
		return HttpResult.build(true, "0000", "用户删除成功！");
	}

	@Override
	public User getUserAndRole(Integer userId) {
		//用户信息
		User resMap=shopManageMapper.getUserById(userId);
		return resMap;
	}

	/**
	 * 获取行业列表
	 * @return
	 */
	@Override
	public List<TradeBean> getTradeList() {
		//获取行业列表
		List<TradeBean> list = shopManageMapper.getTradeList();
		return list;
	}

}
