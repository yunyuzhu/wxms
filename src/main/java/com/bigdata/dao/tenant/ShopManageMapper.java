package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.system.User;
import com.bigdata.model.tenant.TradeBean;

/**   
* @Title: ShopManageMapper.java
* @Description: 商户信息数据模型类 
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface ShopManageMapper {
	
	int getUserCount(@Param(value = "tenantName") String tenantName, @Param(value = "trade") String trade);

	List<User> getUserPageList(@Param(value = "tenantName") String tenantName, @Param(value = "trade") String trade,
			@Param(value = "pageStart") Integer pageStart, @Param(value = "pageSize") Integer pageSize);

	void saveUser(User user);

	void saveUserRole(@Param(value = "userId") int userId,@Param(value = "roleId") Integer roleId);

	int getUserByUserName(@Param(value = "userName") String userName);

	void updateUser(User user);

	void updateUserRole(@Param(value = "userId") Integer userId,@Param(value = "roleId") Integer roleId);

	void delUser(@Param(value = "userIds") String userIds);

	void delUserRole(@Param(value = "userIds") String userIds);

	User getUserById(@Param(value = "userId") Integer userId);

	/**
	 * 获取行业列表
	 * @return
	 */
	List<TradeBean> getTradeList();

}
