package com.bigdata.controller.system;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**   
* @Title: UrlRouteController.java
* @Description: 路由地址控制类 
* @author zzc   
* @date 2016年9月22日 上午11:24:15   
*/
@Controller
public class UrlRouteController {
	
	/**
	 * 用户管理
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "userView", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String UserView(HttpServletRequest request) {
		return "/manage/userView";
	}
	
	/**
	 * 角色管理
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "roleView", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String RoleView(HttpServletRequest request) {
		return "/manage/roleView";
	}

/*********************** 商户 start *********************/
	/**
	 * 商户账户
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shopAccount", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String ShopAccount(HttpServletRequest request) {
		return "/shop/shopAccount";
	}

	/**
	 * 商户确认消费
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shCheckCost", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String ShCheckCost(HttpServletRequest request) { return "/shop/shCheckCost"; }
	/**
	 * 商户确认消费
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shCostRecord", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String ShCostRecord(HttpServletRequest request) {
		return "/shop/shCostRecord";
	}

	/**
	 * 商户金币兑换规则
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shConvertRule", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String ShConvertRule(HttpServletRequest request) { return "/shop/shConvertRule"; }

/*********************** 商户 end *********************/




}
