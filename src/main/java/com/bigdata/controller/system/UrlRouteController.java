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

}
