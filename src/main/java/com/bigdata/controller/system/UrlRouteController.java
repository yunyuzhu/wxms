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
	 * 首页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "home", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String Home(HttpServletRequest request) { return "/home/home"; }

	/**
	 * 医院统计分析
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "hospAnalysis", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String HospAnalysis(HttpServletRequest request) { return "/analysis/hospAnalysis"; }

	/**
	 * DRGs分析
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "drgsAnalysis", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String DrgsAnalysis(HttpServletRequest request) { return "/analysis/drgsAnalysis"; }

	/**
	 * 趋势分析
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "trendAnalysis", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String TrendAnalysis(HttpServletRequest request) { return "/analysis/trendAnalysis"; }

	/**
	 * 医疗质量评价
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "medicalQuality", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String MedicalQuality(HttpServletRequest request) { return "/medicalQuality/medicalQuality"; }

	/**
	 * 专科能力评价
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "depaAbility", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String DepaAbility(HttpServletRequest request) { return "/depaAbility/depaAbility"; }

	/**
	 * 综合能力评价
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "compAbility", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String CompAbility(HttpServletRequest request) { return "/compAbility/compAbility"; }

	/**
	 * 业务规则管理
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "setpara", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String Setpara(HttpServletRequest request) {
		return "/rule/setpara";
	}
	
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
