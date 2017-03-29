package com.bigdata.controller.tenant;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.common.util.CommonTools;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldDetail;
import com.bigdata.service.tenant.ITenantManageService;

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
	@RequestMapping(value="/baseInfo", method = RequestMethod.POST)
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
	@RequestMapping(value="/rule", method = RequestMethod.POST)
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
	@RequestMapping(value="/ConfirmList", method = RequestMethod.POST)
	public Object getConfirmList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取待确认消费信息列表
		List<GoldDetail> list = tenantManageServiceImpl.getConfirmList(user.getId());
		
		return list;
	}

}
