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
	
	/**
	 * 分页查询起始条数
	 */
	private Integer pageStart;
	
	/**
	 * 分页查询每页显示条数
	 */
	private Integer pageSize;

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

	public Integer getPageStart() {
		return pageStart;
	}

	public void setPageStart(Integer pageStart) {
		this.pageStart = pageStart;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	
}
