package com.bigdata.model.tenant;

/**   
* @Title: RuleBean.java
* @Description: 规则模型 
* @author zzc   
* @date 2017年4月1日 上午10:07:37   
*/
public class RuleBean {
	
	/**
	 * 序号
	 */
	private Integer orderId;
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 规则名称
	 */
	private String ruleName;
	
	/**
	 * 规则内容
	 */
	private String rate;
	
	/**
	 * 已被使用标识
	 */
	private String flag;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 创建时间
	 */
	private String createTime;

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRuleName() {
		return ruleName;
	}

	public void setRuleName(String ruleName) {
		this.ruleName = ruleName;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

}
