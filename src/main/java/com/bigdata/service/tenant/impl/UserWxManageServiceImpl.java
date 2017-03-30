package com.bigdata.service.tenant.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import com.bigdata.common.util.HttpResult;
import com.bigdata.dao.tenant.UserWxManageMapper;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IUserWxManageService;

/**   
* @Title: UserWxManageServiceImpl.java
* @Description: 用户管理接口实现类 
* @author zzc   
* @date 2017年3月30日 下午2:15:01   
*/
@Service
public class UserWxManageServiceImpl implements IUserWxManageService {
	
	@Resource
	private UserWxManageMapper userWxManageMapper;

	/*
	 * 查询用户列表
	 * */
	@Override
	public Object getUserPage(String userName, Integer pageStart, Integer pageSize) {
		Map<String, Object> resMap=new HashMap<>();
		
		//符合查询条件的数据总条数
		int total = userWxManageMapper.getUserCount(userName);
		resMap.put("total", total);
		List<WxUser> rows=null;
		if (total > 0) {
			rows = userWxManageMapper.getUserPageList(userName,pageStart,pageSize);
			if(!rows.isEmpty()){
				int i=1;
				for(WxUser user: rows){
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
	public HttpResult saveUser(String userName, String password, String name, String sex, String age, String phone, String remark) {
		//用户密码明文加密
        String password_cipherText= new Md5Hash(password).toHex(); 
        
        //账号重名检查
        int count=userWxManageMapper.getUserByUserName(userName);
        if(count>0){
        	return HttpResult.build(false, "1000", "用户名已存在");
        }
        
        //保存用户
        WxUser user=new WxUser(); 
        user.setUserName(userName); //用户名
        user.setPassword(password_cipherText); //加密后密码
        user.setName(name);
		user.setSex(sex);
		user.setAge(age);
		user.setPhone(phone);
		user.setRemark(remark);
		userWxManageMapper.saveUser(user);//添加用户
		
		return HttpResult.build(true, "0000", "保存成功");
	}

	/*
	 * 编辑用户
	 * 
	 * */
	@Override
	public HttpResult updateUser(String userId, String name, String sex, String age, String phone, String remark) {
		//编辑用户
		WxUser user=new WxUser(); 
        user.setId(userId);
		user.setName(name);
		user.setSex(sex);
		user.setAge(age);
		user.setPhone(phone);
		user.setRemark(remark);
		userWxManageMapper.updateUser(user);
		
		return HttpResult.build(true, "0000", "保存成功！");
	}

	@Override
	public Object delUserAndRole(String userIds) {
		//删除用户
		userWxManageMapper.delUser(userIds);
		return HttpResult.build(true, "0000", "用户删除成功！");
	}

	@Override
	public Object getUserAndRole(Integer userId) {
		//用户信息
		Map<String, Object> resMap=userWxManageMapper.getUserById(userId);
		return resMap;
	}
	
}
