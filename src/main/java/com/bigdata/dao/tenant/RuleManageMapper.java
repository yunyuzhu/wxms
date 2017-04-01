package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;

/**   
* @Title: RuleManageMapper.java
* @Description: 规则管理数据模型类 
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface RuleManageMapper {

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
	void deleteRule(@Param(value = "ids") String ids);

	/**
	 * 行业应用规则
	 * @param ruleId
	 * @param ids
	 */
	void updateUserRuleTrade(@Param(value = "ruleId") String ruleId, @Param(value = "ids") String ids);

	/**
	 * 批量应用规则、单独应用规则
	 * @param ruleId
	 * @param ids
	 */
	void updateUserRule(@Param(value = "ruleId") String ruleId, @Param(value = "ids") String ids);

}
