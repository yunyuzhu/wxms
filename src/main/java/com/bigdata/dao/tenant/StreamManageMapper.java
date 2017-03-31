package com.bigdata.dao.tenant;

import java.util.List;

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;

/**   
* @Title: StreamManageMapper.java
* @Description: 流水管理数据模型类 
* @author zzc   
* @date 2017年3月31日 下午3:44:18   
*/
public interface StreamManageMapper {

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
	 * 修改用户金币余额
	 * @param wxUser
	 */
	void updateUserChangeGold(WxUser wxUser);

	/**
	 * 增加金币流水信息
	 * @param wxUser
	 */
	void updateGoldDetail(WxUser wxUser);

}
