package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;

/**   
* @Title: IStreamManageService.java
* @Description: 流水管理接口 
* @author zzc   
* @date 2017年3月31日 下午3:45:07   
*/
public interface IStreamManageService {

	/**
	 * 获取金币流水列表
	 * @param queryBean
	 * @return
	 */
	List<GoldUserBean> getGoldStreamList(QueryBean queryBean);

	/**
	 * 获取消费流水列表
	 * @param queryBean
	 * @return
	 */
	List<GoldUserBean> getConsumeStreamList(QueryBean queryBean);

	/**
	 * 获取用户金币余额列表
	 * @param queryBean
	 * @return
	 */
	List<WxUser> getUserBalanceList(QueryBean queryBean);

	/**
	 * 兑换金币
	 * @param wxUser
	 */
	void updateUserChangeGold(WxUser wxUser);

}
