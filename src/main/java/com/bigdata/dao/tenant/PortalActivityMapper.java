/**
 * 
 */
package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.ActivityBean;

/**
 * @author zzc
 *
 */
public interface PortalActivityMapper {

	/**
	 * 获取门户活动列表
	 * @return
	 */
	List<ActivityBean> getActivityList();

	/**
	 * 更新活动阅读量
	 * @param id
	 */
	void updateActivityCount(@Param(value = "id") String id);

}
