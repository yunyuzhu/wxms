/**
 * 
 */
package com.bigdata.model.tenant;

import java.io.Serializable;

/**
 * @author zzc
 *
 */
@SuppressWarnings("serial")
public class GoldUserBean implements Serializable {
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 消费金额
	 */
	private String consumeMoney;
	
	/**
	 * 电话
	 */
	private String phone;
	
	/**
	 * 姓名
	 */
	private String name;
	
	/**
	 * 消费时间
	 */
	private String consumeTime;
	
	/**
	 * 确认消费消费时间
	 */
	private String confirmTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getConsumeMoney() {
		return consumeMoney;
	}

	public void setConsumeMoney(String consumeMoney) {
		this.consumeMoney = consumeMoney;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getConsumeTime() {
		return consumeTime;
	}

	public void setConsumeTime(String consumeTime) {
		this.consumeTime = consumeTime;
	}

	public String getConfirmTime() {
		return confirmTime;
	}

	public void setConfirmTime(String confirmTime) {
		this.confirmTime = confirmTime;
	}

}
