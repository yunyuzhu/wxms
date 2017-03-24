package com.bigdata.common.util;

/**
 * 功能说明：医院等级对应编码
 *
 * @author taosir 2015年6月25日下午3:43:30
 *
 */
public interface HospitalGradeConstant {
	
	/**
	 * 三甲医院
	 */
	public String SJ_HOSPITAL = "0101";
	
	/**
	 * 三乙医院
	 */
	public String SY_HOSPITAL = "0102";
	
	/**
	 * 二甲医院
	 */
	public String EJ_HOSPITAL = "0201";
	
	/**
	 * 二乙医院
	 */
	public String EY_HOSPITAL = "0202";
	
	/**
	 * 二乙以下下浮10%
	 */
	public String EYX10_HOSPITAL = "0301";
	
	/**
	 * 二乙以下下浮20%
	 */
	public String EYX20_HOSPITAL = "0302";
	
	/**
	 * 药店
	 */
	public String DRUGSTORE = "0401";
	
}
