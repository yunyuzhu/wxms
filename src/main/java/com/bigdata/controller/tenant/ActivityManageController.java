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

import com.bigdata.common.util.CommonTools;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.ActivityBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.service.tenant.IActivityManageService;
import com.wordnik.swagger.annotations.ApiParam;

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
	
	/**
	 * 获取活动列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/activityList", method = RequestMethod.GET)
	public Object getActivityList(@ApiParam(required = false, name = "title", value = "标题") @RequestParam(required = false, value = "title") String title,
							  @ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
		                      @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
		                      @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		         			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setTitle(title);
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取活动列表
		List<ActivityBean> list = activityManageServiceImpl.getActivityList(queryBean);
		
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
	
	/**
	 * 发布活动
	 * @param title
	 * @param content
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.GET)
	@ResponseBody
	public Object saveActivity(@ApiParam(required = false, name = "title", value = "标题") @RequestParam(value = "title", required = false) String title,
			@ApiParam(required = false, name = "content", value = "活动内容") @RequestParam(value = "content", required = false) String content,
			@ApiParam(required = false, name = "activityAbstract", value = "活动摘要") @RequestParam(value = "activityAbstract", required = false) String activityAbstract,
			HttpServletRequest request, HttpServletResponse response) {
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		ActivityBean activityBean = new ActivityBean();
		activityBean.setTitle(title);
		activityBean.setContent(content);
		activityBean.setActivityAbstract(activityAbstract);
		activityBean.setUserId(user.getId().toString());
		
		//发布活动
		activityManageServiceImpl.saveActivity(activityBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "发布活动成功");
    	return map;
	}
	
	/**
	 * 修改活动
	 * @param id
	 * @param title
	 * @param content
	 * @return
	 */
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	@ResponseBody
	public Object updateActivity(@ApiParam(required = false, name = "id", value = "活动id") @RequestParam(value = "id", required = false) String id,
			@ApiParam(required = false, name = "title", value = "标题") @RequestParam(value = "title", required = false) String title,
			@ApiParam(required = false, name = "content", value = "活动内容") @RequestParam(value = "content", required = false) String content,
			@ApiParam(required = false, name = "activityAbstract", value = "活动摘要") @RequestParam(value = "activityAbstract", required = false) String activityAbstract,
			HttpServletRequest request, HttpServletResponse response) {
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		ActivityBean activityBean = new ActivityBean();
		activityBean.setId(id);
		activityBean.setTitle(title);
		activityBean.setContent(content);
		activityBean.setActivityAbstract(activityAbstract);
		activityBean.setUserId(user.getId().toString());
		
		//修改活动
		activityManageServiceImpl.updateActivity(activityBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "修改活动成功");
    	return map;
	}
	
	/**
	 * 删除活动
	 * @return
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	@ResponseBody
	public Object deleteActivity(@ApiParam(required = false, name = "ids", value = "活动id列表") @RequestParam(value = "ids", required = false) String ids) {
		
		//删除活动
		activityManageServiceImpl.deleteActivity(ids);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "删除活动成功");
    	return map;
	}
	
	/**
	 * 根据活动ID获取活动内容
	 * @return
	 */
	@RequestMapping(value = "/query", method = RequestMethod.GET)
	@ResponseBody
	public Object getActivityInfoById(@ApiParam(required = false, name = "id", value = "活动id") @RequestParam(value = "id", required = false) String id) {
		
		//根据活动ID获取活动内容
		ActivityBean activityBean = activityManageServiceImpl.getActivityInfoById(id);
    	return activityBean;
	}
	
}
