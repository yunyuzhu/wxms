package com.bigdata.dao.tenant;

import java.util.List;

import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldUserBean;

/**   
* @Title: TenantManageMapper.java
* @Description: 商户管理数据模型类
* @author zzc   
* @date 2017年3月29日 下午4:28:49   
*/
public interface TenantManageMapper {

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

}
