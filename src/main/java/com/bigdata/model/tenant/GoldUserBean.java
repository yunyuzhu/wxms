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
	 * 序号
	 */
	private Integer orderId;
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 消费金额
	 */
	private String consumeMoney;
	
	/**
	 * 金币
	 */
	private String goldNum;
	
	/**
	 * 金币消费类型
	 */
	private String goldType;
	
	/**
	 * 是否确认
	 */
	private String flag;
	
	/**
	 * 电话
	 */
	private String phone;
	
	/**
	 * 姓名
	 */
	private String name;
	
	/**
	 * 商户名称
	 */
	private String tenantName;
	
	/**
	 * 商户电话
	 */
	private String telephone;
	
	/**
	 * 行业
	 */
	private String trade;
	
	/**
	 * 消费时间
	 */
	private String consumeTime;
	
	/**
	 * 确认消费消费时间
	 */
	private String confirmTime;
	
	/**
	 * 商品名称
	 */
	private String goodsName;
	
	/**
	 * 商品金币价格
	 */
	private String price;

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

	public String getGoldType() {
		return goldType;
	}

	public void setGoldType(String goldType) {
		this.goldType = goldType;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
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

	public String getTenantName() {
		return tenantName;
	}

	public void setTenantName(String tenantName) {
		this.tenantName = tenantName;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getTrade() {
		return trade;
	}

	public void setTrade(String trade) {
		this.trade = trade;
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

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
}
