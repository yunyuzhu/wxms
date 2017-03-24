package com.bigdata.dao.manage;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface ManageRoleMapper {

	List<Map<String, Object>> getAllRoles();

	void deleteRoleMenuByRoleId(@Param(value = "roleId") Integer roleId);

	void insertRoleMenu(@Param(value = "roleId") Integer roleId,@Param(value = "resId") int resId);

	List<Map<String, Object>> getRolePage(@Param(value = "pageStart") Integer pageStart,@Param(value = "pageSize") Integer pageSize);

	int getRoleCount();

	List<Map<String, Object>> getMeneRefRoleByRoleId(@Param(value = "roleId") Integer roleId);

}
