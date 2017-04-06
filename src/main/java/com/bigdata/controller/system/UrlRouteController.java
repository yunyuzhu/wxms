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

/*********************** 平台后台 start *********************/
	/* 商户管理 */
	@RequestMapping(value = "bkShopManage", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkShopManage(HttpServletRequest request) {
		return "/back/bkShopManage";
	}

	/* 规则管理 */
	@RequestMapping(value = "bkRuleManage", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkRuleManage(HttpServletRequest request) {
		return "/back/bkRuleManage";
	}

	/* 应用规则 */
	@RequestMapping(value = "bkRuleApply", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkRuleApply(HttpServletRequest request) {
		return "/back/bkRuleApply";
	}

	/* 活动管理 */
	@RequestMapping(value = "bkActManage", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkActManage(HttpServletRequest request) {
		return "/back/bkActManage";
	}

	/* 用户管理 */
	@RequestMapping(value = "bkUserManage", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkUserManage(HttpServletRequest request) {
		return "/back/bkUserManage";
	}

	/* 金币流水 */
	@RequestMapping(value = "bkGoldStream", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkGoldStream(HttpServletRequest request) {
		return "/back/bkGoldStream";
	}

	/* 消费流水 */
	@RequestMapping(value = "bkCostStream", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkCostStream(HttpServletRequest request) { return "/back/bkCostStream"; }

	/* 用户余额 */
	@RequestMapping(value = "bkUserMoney", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkUserMoney(HttpServletRequest request) { return "/back/bkUserMoney"; }

	/* 发送短信 */
	@RequestMapping(value = "bkMsgSend", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkMsgSend(HttpServletRequest request) { return "/back/bkMsgSend"; }

	/* 历史短信 */
	@RequestMapping(value = "bkMsgHistory", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String BkMsgHistory(HttpServletRequest request) { return "/back/bkMsgHistory"; }

/*********************** 平台后台 end *********************/

/*********************** 用户 start *********************/
	/* 账户信息 */
	@RequestMapping(value = "maccount", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String Maccount(HttpServletRequest request) { return "/mobile/maccount"; }

	/* 账户信息 */
	@RequestMapping(value = "mmoney", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String Mmoney(HttpServletRequest request) { return "/mobile/mmoney"; }

	/* 账户信息 */
	@RequestMapping(value = "mstream", method = RequestMethod.GET, produces = "text/html; charset=utf-8")
	public String Mstream(HttpServletRequest request) { return "/mobile/mstream"; }

/*********************** 平台后台 end *********************/
}