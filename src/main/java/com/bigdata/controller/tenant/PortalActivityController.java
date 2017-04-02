package com.bigdata.controller.tenant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.service.tenant.IPortalActivityService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: PortalActivityController.java
* @Description: 门户活动管理
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/portalActivity")
public class PortalActivityController {
	
	@Resource
	private IPortalActivityService portalActivityServiceImpl;
	
	/**
	 * 获取门户活动列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/activityList", method = RequestMethod.GET)
	public Object getPortalActivityList(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		         			  			@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取门户活动列表
		List<ActivityBean> list = portalActivityServiceImpl.getActivityList();
		
		//分页
		ArrayList<ActivityBean> listPage = new ArrayList<ActivityBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				ActivityBean gub = list.get(i);
				gub.setOrderId(i+1);
				listPage.add(gub);
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("total", list.size());
    	map.put("rows", listPage);
    	return map;
	}

}
