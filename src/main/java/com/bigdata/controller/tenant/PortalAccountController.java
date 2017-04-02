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
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IPortalAccountService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: PortalAccountController.java
* @Description: 门户账户信息
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/portalAccount")
public class PortalAccountController {
	
	@Resource
	private IPortalAccountService portalAccountServiceImpl;

	/**
	 * 获取我的账户信息
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/myAccount", method = RequestMethod.GET)
	public Object getMyAccountInfo(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户信息
		WxUser wxUser = portalAccountServiceImpl.getMyAccountInfo(user.getId().toString());
    	return wxUser;
	}
	
	/**
	 * 获取我的账户金币余额
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/gold", method = RequestMethod.GET)
	public Object getMyAccountGold(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户金币余额
		String gold = portalAccountServiceImpl.getMyAccountGold(user.getId().toString());
    	return gold;
	}
	
	/**
	 * 获取我的账户金币流水
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/goldStream", method = RequestMethod.GET)
	public Object getMyAccountGoldStream(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户金币流水
		List<GoldUserBean> list = portalAccountServiceImpl.getMyAccountGoldStream(user.getId().toString());

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
	 * 扫描消费金额
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/saveGold", method = RequestMethod.GET)
	public Object saveGoldDetail(@ApiParam(required = false, name = "shopId", value = "商户Id") @RequestParam(value = "shopId", required = false) String shopId,
			  @ApiParam(required = false, name = "consumeMoney", value = "消费金额") @RequestParam(value = "consumeMoney", required = false) String consumeMoney,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//扫描消费金额
		portalAccountServiceImpl.saveGoldDetail(user.getId().toString(), shopId, consumeMoney);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "消费成功");
    	return map;
	}
	
}
