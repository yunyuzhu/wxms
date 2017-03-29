package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.TenantManageMapper;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldUserBean;
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
	public String getTenantRule(Integer id) {
		// 获取商户当前兑换规则
		String rule = tenantManageMapper.getTenantRule(id);
		return rule;
	}

	/**
	 * 获取待确认消费信息列表
	 * @param id
	 * @return
	 */
	@Override
	public List<GoldUserBean> getConfirmList(Integer id) {
		//获取待确认消费信息列表
		List<GoldUserBean> list = tenantManageMapper.getConfirmList(id);
		return list;
	}

	/**
	 * 获取消费流水列表
	 * @param id
	 * @return
	 */
	@Override
	public List<GoldUserBean> getConsumerList(Integer id) {
		//获取待确认消费信息列表
		List<GoldUserBean> list = tenantManageMapper.getConsumerList(id);
		return list;
	}

	/**
	 * 确认消费
	 * @param id
	 */
	@Override
	public void updateConsumer(String id) {
		//确认消费
		tenantManageMapper.updateConsumer(id);
	}

}
