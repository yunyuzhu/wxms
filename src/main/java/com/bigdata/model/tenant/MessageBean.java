package com.bigdata.model.tenant;

/**   
* @Title: MessageBean.java
* @Description: 短信模型
* @author zzc   
* @date 2017年3月29日 下午5:28:11   
*/
public class MessageBean {
	
	/**
	 * 序号
	 */
	private Integer orderId;
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 短信内容
	 */
	private String message;
	
	/**
	 * 发信人
	 */
	private String userId;
	
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

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

}
