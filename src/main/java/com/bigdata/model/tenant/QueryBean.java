package com.bigdata.model.tenant;

/**   
* @Title: QueryBean.java
* @Description: 查询条件Bean 
* @author zzc   
* @date 2017年3月30日 上午9:31:01   
*/
public class QueryBean {
	
	/**
	 * id
	 */
	private String id;
	
	/**
	 * 开始时间
	 */
	private String startTime;
	
	/**
	 * 结束时间
	 */
	private String endTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

}
