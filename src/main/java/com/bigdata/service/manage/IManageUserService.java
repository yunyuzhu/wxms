package com.bigdata.service.manage;

import com.bigdata.common.util.HttpResult;

public interface IManageUserService {

	public Object getUserPage(String userName, Integer roleId, Integer pageStart, Integer pageSize);

	public HttpResult saveUserAndRole(String userName, String accountName, String password, Integer roleId,
			Integer depaId, String useFlag, String remark);

	public HttpResult updateUserAndRole(Integer userId, String accountName, Integer roleId, Integer depaId,
			String useFlag, String remark);

	public Object delUserAndRole(String userIds);

	public Object getUserAndRole(Integer userId);

}
