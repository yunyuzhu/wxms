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
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.service.tenant.ITenantManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: TenantManageController.java
* @Description: 商户管理 
* @author zzc   
* @date 2017年3月29日 上午10:38:55   
*/
@Controller
@RequestMapping(value="/tenant")
public class TenantManageController {
	
	@Resource
	private ITenantManageService tenantManageServiceImpl;
	
	/**
	 * 获取商户基本信息
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/baseInfo", method = RequestMethod.GET)
	public Object getTenantInfo(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取指定商户信息
		User userInfo = tenantManageServiceImpl.getTenantInfo(user.getId());
		
		return userInfo;
	}
	
	/**
	 * 获取商户当前兑换规则
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/rule", method = RequestMethod.GET)
	public Object getTenantRule(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取商户当前兑换规则
		String rule = tenantManageServiceImpl.getTenantRule(user.getId());
		
		return rule;
	}
	
	/**
	 * 获取待确认消费信息列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/ConfirmList", method = RequestMethod.GET)
	public Object getConfirmList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
			                     @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
			                     @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			         			 @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		QueryBean queryBean = new QueryBean();
		queryBean.setId(user.getId().toString());
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取待确认消费信息列表
		List<GoldUserBean> list = tenantManageServiceImpl.getConfirmList(queryBean);
		
		//分页
		ArrayList<GoldUserBean> listPage = new ArrayList<GoldUserBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoldUserBean gub = list.get(i);
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
	 * 获取消费流水列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/consumerList", method = RequestMethod.GET)
	public Object getConsumerList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
            					  @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
            					  @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
 			         			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
            HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		QueryBean queryBean = new QueryBean();
		queryBean.setId(user.getId().toString());
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取消费流水列表
		List<GoldUserBean> list = tenantManageServiceImpl.getConsumerList(queryBean);
    	
    	//分页
		ArrayList<GoldUserBean> listPage = new ArrayList<GoldUserBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoldUserBean gub = list.get(i);
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
	 * 确认消费
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/update", method = RequestMethod.GET)
	public Object updateConsumer(@ApiParam(required = false, name = "id", value = "主键") @RequestParam(required = false, value = "id") String id,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//确认消费
		tenantManageServiceImpl.updateConsumer(id);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "确认消费成功");
    	return map;
	}

}
