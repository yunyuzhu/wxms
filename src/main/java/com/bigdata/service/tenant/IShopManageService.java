package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.common.util.HttpResult;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.TradeBean;

/**   
* @Title: IShopManageService.java
* @Description: 商户信息接口 
* @author zzc   
* @date 2017年3月30日 上午10:54:26   
*/
public interface IShopManageService {
	
	public Object getUserPage(String tenantName, String trade, Integer pageStart, Integer pageSize);

	public HttpResult saveUserAndRole(String userName, String password, Integer roleId,
			String useFlag, String remark, String tenantName, String trade, String address, String telephone, String linkName, String linkPhone);

	public HttpResult updateUserAndRole(Integer userId, Integer roleId,
			String useFlag, String remark, String tenantName, String trade, String address, String telephone, String linkName, String linkPhone);

	public Object delUserAndRole(String userIds);

	public User getUserAndRole(Integer userId);

	/**
	 * 获取行业列表
	 * @return
	 */
	public List<TradeBean> getTradeList();

}
