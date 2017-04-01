package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.RuleManageMapper;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;
import com.bigdata.service.tenant.IRuleManageService;

/**   
* @Title: ShopManageServiceImpl.java
* @Description: 规则管理接口实现类 
* @author zzc   
* @date 2017年3月30日 上午10:54:47   
*/
@Service
public class RuleManageServiceImpl implements IRuleManageService {

	@Resource
	private RuleManageMapper ruleManageMapper;

	/**
	 * 获取规则管理列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<RuleBean> getRuleList(QueryBean queryBean) {
		//获取规则管理列表
		List<RuleBean> list = ruleManageMapper.getRuleList(queryBean);
		return list;
	}

	/**
	 * 新增规则
	 * @param ruleBean
	 */
	@Override
	public void saveRule(RuleBean ruleBean) {
		//新增规则
		ruleManageMapper.saveRule(ruleBean);
	}

	/**
	 * 修改规则
	 * @param ruleBean
	 */
	@Override
	public void updateRule(RuleBean ruleBean) {
		//新增规则
		ruleManageMapper.updateRule(ruleBean);
	}

	/**
	 * 删除规则
	 * @param ids
	 */
	@Override
	public void deleteRule(String ids) {
		//删除规则
		ruleManageMapper.deleteRule(ids);
	}

	/**
	 * 应用规则
	 * @param ruleId
	 * @param tradeFlag
	 * @param ids
	 */
	@Override
	public void applyRule(String ruleId, String tradeFlag, String ids) {
		
		if(tradeFlag.equals("1")){//行业应用规则
			ruleManageMapper.updateUserRuleTrade(ruleId, ids);
		}
		else{//批量应用规则、单独应用规则
			ruleManageMapper.updateUserRule(ruleId, ids);
		}
		
	}
	
}
