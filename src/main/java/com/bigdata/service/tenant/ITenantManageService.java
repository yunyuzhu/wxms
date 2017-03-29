package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldUserBean;

/**   
* @Title: TenantManageService.java
* @Description: 商户管理 接口 
* @author zzc   
* @date 2017年3月29日 上午10:41:38   
*/
public interface ITenantManageService {

	/**
	 * 获取指定商户信息
	 * @param id
	 * @return
	 */
	User getTenantInfo(Integer id);

	/**
	 * 获取商户当前兑换规则
	 * @param id
	 * @return
	 */
	String getTenantRule(Integer id);

	/**
	 * 获取待确认消费信息列表
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getConfirmList(Integer id);

	/**
	 * 获取消费流水列表
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getConsumerList(Integer id);

	/**
	 * 确认消费
	 * @param id
	 */
	void updateConsumer(String id);

}
