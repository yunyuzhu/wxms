package com.bigdata.controller.tenant;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bigdata.service.tenant.IActivityManageService;

/**   
* @Title: ActivityManageController.java
* @Description: 活动管理
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/activity")
public class ActivityManageController {
	
	@Resource
	private IActivityManageService activityManageServiceImpl;

}
