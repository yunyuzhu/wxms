package com.bigdata.service.manage.impl;

import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import com.bigdata.common.util.HttpResult;
import com.bigdata.dao.manage.ManageUserMapper;
import com.bigdata.model.manage.ManageUser;
import com.bigdata.model.system.User;
import com.bigdata.service.manage.IManageUserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

/**
 * 用户管理Service实现类
 *
 * @author wangfan
 * @since 2014年11月1日 上午11:54:24
 */
@Service
public class ManageUserServiceImpl implements IManageUserService {

	@Resource
	private ManageUserMapper manageUserMapper;

	/*
	 * 查询用户列表
	 * */
	@Override
	public Object getUserPage(String userName, Integer roleId, Integer pageStart, Integer pageSize) {
		Map<String, Object> resMap=new HashMap<>();
		
		//符合查询条件的数据总条数
		int total = manageUserMapper.getUserCount(userName, roleId);
		resMap.put("total", total);
		List<ManageUser> rows=null;
		if (total > 0) {
			rows = manageUserMapper.getUserPageList(userName,roleId,pageStart,pageSize);
			if(!rows.isEmpty()){
				int i=1;
				for(ManageUser user: rows){
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
	public HttpResult saveUserAndRole(String userName, String accountName, String password, Integer roleId, Integer depaId,
			String useFlag,String remark) {
		//用户密码明文加密
//		Preconditions.checkArgument(!Strings.isNullOrEmpty(userName),"username不能为空"); 
//        Preconditions.checkArgument(!Strings.isNullOrEmpty(password),"password不能为空"); 
        SecureRandomNumberGenerator secureRandomNumberGenerator=new SecureRandomNumberGenerator(); 
        String salt= secureRandomNumberGenerator.nextBytes().toHex(); 
        //组合username,两次迭代，对密码进行加密 
        String password_cipherText= new Md5Hash(password,userName+salt,2).toHex(); 
        
        //账号重名检查
        int count=manageUserMapper.getUserByUserName(userName);
        if(count>0){
        	return HttpResult.build(false, "1000", "用户名已存在");
        }
        
        //保存用户
        User user=new User(); 
        user.setUserName(userName); //用户名
        user.setAccountName(accountName);//昵称
        user.setPassword(password_cipherText); //加密后密码
        user.setCredentialsSalt(salt);//盐
		user.setUseFlag(useFlag);//冻结状态
		user.setDepaId(depaId);//部门科室Id
		user.setRemark(remark);//备注
		user.setLocked("0");//是否锁定：默认不锁定"0"
		manageUserMapper.saveUser(user);//添加用户
		int userId=user.getId();
		
		//保存用户和角色id
		manageUserMapper.saveUserRole(userId,roleId);
		
		return HttpResult.build(true, "0000", "保存成功");
	}

	/*
	 * 编辑用户
	 * 
	 * */
	@Override
	public HttpResult updateUserAndRole(Integer userId, String accountName, Integer roleId,
			Integer depaId, String useFlag, String remark) {
		// TODO Auto-generated method stub
		
		//编辑用户
        User user=new User(); 
        user.setId(userId); //用户名
        user.setAccountName(accountName);//昵称
		user.setUseFlag(useFlag);//冻结状态
		user.setDepaId(depaId);//部门科室Id
		user.setRemark(remark);//备注
		manageUserMapper.updateUser(user);
		
		//更新角色
		manageUserMapper.updateUserRole(userId,roleId);
		
		return HttpResult.build(true, "0000", "保存成功！");
	}

	@Override
	public Object delUserAndRole(String userIds) {
		//删除用户
		manageUserMapper.delUser(userIds);
		//删除用户角色
		manageUserMapper.delUserRole(userIds);
		return HttpResult.build(true, "0000", "用户删除成功！");
	}

	@Override
	public Object getUserAndRole(Integer userId) {
		//用户信息
		Map<String, Object> resMap=manageUserMapper.getUserById(userId);
		return resMap;
	}

}
