package com.bigdata.common.util;

/**
 * 功能说明：定义一些零散的常量
 *
 * @author taosir 2015年6月25日下午5:19:28
 *
 */
public interface ItemConstant {
	
	/**
	 * 指标数量（医院）
	 */
	public int HOSPITAL_INDEX_NUM = 8;
	
	/**
	 * 前台参数，日期格式错误
	 */
	public String DATE_FORMAT_ERROR = "{\"title\" : [],\"legend\" : [],\"axis\" : [],\"series\" : []}";
	
	/**
	 * 当前条件查询无数据
	 */
	public String NO_DATA = "{\"title\" : [],\"legend\" : [],\"axis\" : [],\"series\" : []}";
	
	/**
	 * 给饼图用的
	 */
	public String NO_DATA_PIE = "{\"title\" : [],\"legend\" : [],\"axis\" : [],\"series\" : []}";
	
	/**
	 * 连接超时
	 */
	public String CONN_TIMEOUT = "";
	
	/**
	 * 没有选择数据
	 */
	public String NOT_SELECT = "";

}
