/**
 * 
 */
package com.bigdata.dao.tenant;

import java.util.List;

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

}
