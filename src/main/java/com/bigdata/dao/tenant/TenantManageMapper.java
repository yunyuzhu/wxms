package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldDetail;
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;

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
	RuleBean getTenantRule(Integer id);

	/**
	 * 获取待确认消费信息列表
	 * @param queryBean
	 * @return
	 */
	List<GoldUserBean> getConfirmList(QueryBean queryBean);

	/**
	 * 获取消费流水列表
	 * @param queryBean
	 * @return
	 */
	List<GoldUserBean> getConsumerList(QueryBean queryBean);

	/**
	 * 确认消费
	 * @param goldDetail
	 */
	void updateConsumer(GoldDetail goldDetail);

	/**
	 * 获取该记录的消费信息和规则
	 * @param id
	 * @return
	 */
	GoldDetail getGoldDetailInfo(String id);

	/**
	 * 获取微信用户id
	 * @param id
	 * @return
	 */
	String getWxUserId(String id);

	/**
	 * 更新用户金币余额
	 * @param wxUserId
	 * @param goldNum
	 */
	void updateWxUserGold(@Param(value = "wxUserId") String wxUserId, @Param(value = "goldNum") String goldNum);

}
