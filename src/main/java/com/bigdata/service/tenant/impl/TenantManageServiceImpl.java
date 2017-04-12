package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.TenantManageMapper;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldDetail;
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;
import com.bigdata.service.tenant.ITenantManageService;

/**   
* @Title: TenantManageServiceImpl.java
* @Description: 商户管理接口实现类型 
* @author zzc   
* @date 2017年3月29日 上午10:43:00   
*/
@Service
public class TenantManageServiceImpl implements ITenantManageService {
	
	@Resource
	private TenantManageMapper tenantManageMapper;

	/**
	 * 获取指定商户信息
	 * @param id
	 * @return
	 */
	@Override
	public User getTenantInfo(Integer id) {
		//获取指定商户信息
		User user = tenantManageMapper.getTenantInfo(id);
		return user;
	}

	/**
	 * 获取商户当前兑换规则
	 * @param id
	 * @return
	 */
	@Override
	public RuleBean getTenantRule(Integer id) {
		// 获取商户当前兑换规则
		RuleBean ruleBean = tenantManageMapper.getTenantRule(id);
		return ruleBean;
	}

	/**
	 * 获取待确认消费信息列表
	 * @param id
	 * @return
	 */
	@Override
	public List<GoldUserBean> getConfirmList(QueryBean queryBean) {
		//获取待确认消费信息列表
		List<GoldUserBean> list = tenantManageMapper.getConfirmList(queryBean);
		return list;
	}

	/**
	 * 获取消费流水列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<GoldUserBean> getConsumerList(QueryBean queryBean) {
		//获取待确认消费信息列表
		List<GoldUserBean> list = tenantManageMapper.getConsumerList(queryBean);
		return list;
	}

	/**
	 * 确认消费
	 * @param id
	 */
	@Override
	public void updateConsumer(String id) {
		//获取该记录的消费信息和规则
		GoldDetail gd = tenantManageMapper.getGoldDetailInfo(id);
		
		String goldNum = String.valueOf(Math.floor(Double.parseDouble(gd.getConsumeMoney())  * gd.getRate()));
		
		//确认消费
		GoldDetail goldDetail = new GoldDetail();
		goldDetail.setId(id);
		goldDetail.setRule(gd.getRule());
		goldDetail.setGoldNum(goldNum);
		
		//更新金币流水表
		tenantManageMapper.updateConsumer(goldDetail);
		
		//获取微信用户id
		String wxUserId = tenantManageMapper.getWxUserId(id);
		
		//更新用户金币余额
		tenantManageMapper.updateWxUserGold(wxUserId, goldNum);
	}

}
