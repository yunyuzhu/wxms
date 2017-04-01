package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;

/**   
* @Title: IRuleManageService.java
* @Description: 规则管理接口
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface IRuleManageService {

	/**
	 * 获取规则管理列表
	 * @param queryBean
	 * @return
	 */
	List<RuleBean> getRuleList(QueryBean queryBean);

	/**
	 * 新增规则
	 * @param ruleBean
	 */
	void saveRule(RuleBean ruleBean);

	/**
	 * 修改规则
	 * @param ruleBean
	 */
	void updateRule(RuleBean ruleBean);

	/**
	 * 删除规则
	 * @param ids
	 */
	void deleteRule(String ids);

	/**
	 * 应用规则
	 * @param ruleId
	 * @param tradeFlag
	 * @param ids
	 */
	void applyRule(String ruleId, String tradeFlag, String ids);

}
