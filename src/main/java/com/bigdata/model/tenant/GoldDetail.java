package com.bigdata.model.tenant;

import java.sql.Timestamp;

/**   
* @Title: GoldDetail.java
* @Description:  GoldDetail
* @author zzc   
* @date 2017年3月29日 下午5:28:11   
*/
public class GoldDetail {
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 微信用户ID
	 */
	private String wxId;
	
	/**
	 * 商户ID
	 */
	private String userId;
	
	/**
	 * 消费金额
	 */
	private String consumeMoney;
	
	/**
	 * 金币数量
	 */
	private String goldNum;
	
	/**
	 * 应用规则
	 */
	private String rule;
	
	/**
	 * 消费标识
	 */
	private String flag;
	
	/**
	 * 消费时间
	 */
	private Timestamp consumeTime;
	
	/**
	 * 确认时间
	 */
	private Timestamp confirmTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getWxId() {
		return wxId;
	}

	public void setWxId(String wxId) {
		this.wxId = wxId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getConsumeMoney() {
		return consumeMoney;
	}

	public void setConsumeMoney(String consumeMoney) {
		this.consumeMoney = consumeMoney;
	}

	public String getGoldNum() {
		return goldNum;
	}

	public void setGoldNum(String goldNum) {
		this.goldNum = goldNum;
	}

	public String getRule() {
		return rule;
	}

	public void setRule(String rule) {
		this.rule = rule;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Timestamp getConsumeTime() {
		return consumeTime;
	}

	public void setConsumeTime(Timestamp consumeTime) {
		this.consumeTime = consumeTime;
	}

	public Timestamp getConfirmTime() {
		return confirmTime;
	}

	public void setConfirmTime(Timestamp confirmTime) {
		this.confirmTime = confirmTime;
	}
	
}
