package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.model.tenant.QueryBean;

/**   
* @Title: ActivityManageMapper.java
* @Description: 活动管理数据模型类 
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface ActivityManageMapper {

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
	void deleteActivity(@Param(value = "ids") String ids);

}
