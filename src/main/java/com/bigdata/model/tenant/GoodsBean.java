package com.bigdata.model.tenant;

/**   
* @Title: GoodsBean.java
* @Description: GoodsBean 
* @author zzc   
* @date 2017年4月11日 上午10:39:32   
*/
public class GoodsBean {
	
	/**
	 * 序号
	 */
	private Integer orderId;
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 名称
	 */
	private String name;
	
	/**
	 * 图片地址
	 */
	private String imageUrl;
	
	/**
	 * 金币价格
	 */
	private String price;
	
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
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
