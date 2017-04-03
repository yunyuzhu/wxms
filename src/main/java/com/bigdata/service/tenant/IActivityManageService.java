package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.model.tenant.QueryBean;

/**   
* @Title: IActivityManageService.java
* @Description: 活动管理接口
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface IActivityManageService {

	/**
	 * 获取活动列表
	 * @param queryBean
	 * @return
	 */
	List<ActivityBean> getActivityList(QueryBean queryBean);

	/**
	 * 发布活动
	 * @param activityBean
	 */
	void saveActivity(ActivityBean activityBean);

	/**
	 * 修改活动
	 * @param activityBean
	 */
	void updateActivity(ActivityBean activityBean);

	/**
	 * 删除活动
	 * @param ids
	 */
	void deleteActivity(String ids);

	/**
	 * 根据活动ID获取活动内容
	 * @param id
	 * @return
	 */
	ActivityBean getActivityInfoById(String id);

}
