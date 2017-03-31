package com.bigdata.service.tenant.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.ActivityManageMapper;
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

}
