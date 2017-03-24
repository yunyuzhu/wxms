package com.bigdata.service.manage;

import java.util.Map;

import com.bigdata.common.util.HttpResult;

public interface IManageRoleService {

	public Map<String, Object> getAllRoles();

	public HttpResult getRoleInfo(Integer roleId);

	public Object updateRoleMenu(Integer roleId,String[] roleMenu);

	public Object getRolePage(Integer pageStart, Integer pageSize);
	
}
