package com.bigdata.model.tenant;

/**   
* @Title: MessageDetailBean.java
* @Description: 短信模型
* @author zzc   
* @date 2017年3月29日 下午5:28:11   
*/
public class MessageDetailBean {
	
	/**
	 * 短信Id
	 */
	private String messageId;
	
	/**
	 * 用户类型
	 */
	private String userType;
	
	/**
	 * 用户Id
	 */
	private String userId;

	public String getMessageId() {
		return messageId;
	}

	public void setMessageId(String messageId) {
		this.messageId = messageId;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
