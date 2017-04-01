package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.ActivityManageMapper;
import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.service.tenant.IActivityManageService;

/**   
* @Title: ActivityManageServiceImpl.java
* @Description: 活动管理接口实现类 
* @author zzc   
* @date 2017年3月30日 上午10:54:47   
*/
@Service
public class ActivityManageServiceImpl implements IActivityManageService {
	
	@Resource
	private ActivityManageMapper activityManageMapper;

	/**
	 * 获取活动列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<ActivityBean> getActivityList(QueryBean queryBean) {
		//获取活动列表
		List<ActivityBean> list = activityManageMapper.getActivityList(queryBean);
		return list;
	}

	/**
	 * 发布活动
	 * @param activityBean
	 */
	@Override
	public void saveActivity(ActivityBean activityBean) {
		//发布活动
		activityManageMapper.saveActivity(activityBean);
	}

	/**
	 * 修改活动
	 * @param activityBean
	 */
	@Override
	public void updateActivity(ActivityBean activityBean) {
		//修改活动
		activityManageMapper.updateActivity(activityBean);
	}

	/**
	 * 删除活动
	 * @param ids
	 */
	@Override
	public void deleteActivity(String ids) {
		//删除活动
		activityManageMapper.deleteActivity(ids);
	}

}
