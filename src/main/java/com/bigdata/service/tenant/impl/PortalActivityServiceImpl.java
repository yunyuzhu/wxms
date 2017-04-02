/**
 * 
 */
package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.PortalActivityMapper;
import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.service.tenant.IPortalActivityService;

/**
 * @author zzc
 *
 */
@Service
public class PortalActivityServiceImpl implements IPortalActivityService {
	
	@Resource
	private PortalActivityMapper portalActivityMapper;

	/**
	 * 获取门户活动列表
	 * @return
	 */
	@Override
	public List<ActivityBean> getActivityList() {
		//获取门户活动列表
		List<ActivityBean> list = portalActivityMapper.getActivityList();
		return list;
	}

}
