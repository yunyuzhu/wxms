package com.bigdata.dao.manage;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.manage.ManageUser;
import com.bigdata.model.system.User;

public interface ManageUserMapper {

	int getUserCount(@Param(value = "userName") String userName, @Param(value = "roleId") Integer roleId);

	List<ManageUser> getUserPageList(@Param(value = "userName") String userName, @Param(value = "roleId") Integer roleId,
			@Param(value = "pageStart") Integer pageStart, @Param(value = "pageSize") Integer pageSize);

	void saveUser(User user);

	void saveUserRole(@Param(value = "userId") int userId,@Param(value = "roleId") Integer roleId);

	int getUserByUserName(@Param(value = "userName") String userName);

	void updateUser(User user);

	void updateUserRole(@Param(value = "userId") Integer userId,@Param(value = "roleId") Integer roleId);

	void delUser(@Param(value = "userIds") String userIds);

	void delUserRole(@Param(value = "userIds") String userIds);

	Map<String, Object> getUserById(@Param(value = "userId") Integer userId);

}
