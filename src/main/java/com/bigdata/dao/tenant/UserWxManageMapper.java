package com.bigdata.dao.tenant;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.WxUser;

/**   
* @Title: UserWxManageMapper.java
* @Description: 用户管理数据模型类
* @author zzc   
* @date 2017年3月30日 下午2:15:38   
*/
public interface UserWxManageMapper {
	
	int getUserCount(@Param(value = "userName") String userName);

	List<WxUser> getUserPageList(@Param(value = "userName") String userName,
			@Param(value = "pageStart") Integer pageStart, @Param(value = "pageSize") Integer pageSize);

	void saveUser(WxUser user);

	int getUserByUserName(@Param(value = "userName") String userName);

	void updateUser(WxUser user);

	void delUser(@Param(value = "userIds") String userIds);

	void delUserRole(@Param(value = "userIds") String userIds);

	Map<String, Object> getUserById(@Param(value = "userId") Integer userId);

	void delWxUser(@Param(value = "userIds") String userIds);

	void delWxUserRole(@Param(value = "userIds") String userIds);

}
