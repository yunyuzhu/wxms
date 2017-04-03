package com.bigdata.model.tenant;

/**   
* @Title: ActivityBean.java
* @Description: 活动模型
* @author zzc   
* @date 2017年4月1日 下午3:25:12   
*/
public class ActivityBean {
	
	/**
	 * 序号
	 */
	private Integer orderId;
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 标题
	 */
	private String title;
	
	/**
	 * 活动内容
	 */
	private String content;
	
	/**
	 * 阅读数
	 */
	private String count;
	
	/**
	 * 发布人
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
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
