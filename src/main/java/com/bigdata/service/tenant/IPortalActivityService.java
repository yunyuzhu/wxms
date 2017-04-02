/**
 * 
 */
package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.ActivityBean;

/**
 * @author zzc
 *
 */
public interface IPortalActivityService {

	/**
	 * 获取门户活动列表
	 * @return
	 */
	List<ActivityBean> getActivityList();

}
