package com.bigdata.dao.tenant;

import com.bigdata.model.system.User;

/**   
* @Title: TenantManageMapper.java
* @Description: 商户管理数据模型类
* @author zzc   
* @date 2017年3月29日 下午4:28:49   
*/
public interface TenantManageMapper {

	/**
	 * 获取指定商户信息
	 * @param id
	 * @return
	 */
	User getTenantInfo(Integer id);

	/**
	 * 获取商户当前兑换规则
	 * @param id
	 * @return
	 */
	String getTenantRule(Integer id);

}
