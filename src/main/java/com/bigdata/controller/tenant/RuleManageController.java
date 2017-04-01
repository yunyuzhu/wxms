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

import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.RuleBean;
import com.bigdata.service.tenant.IRuleManageService;
import com.bigdata.service.tenant.IShopManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: RuleManageController.java
* @Description: 规则管理
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/rule")
public class RuleManageController {
	
	@Resource
	private IRuleManageService ruleManageServiceImpl;
	
	@Resource
	private IShopManageService shopManageServiceImpl;
	
	/**
	 * 获取规则管理列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/ruleList", method = RequestMethod.GET)
	public Object getRuleList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
		                      @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
		                      @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		         			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取规则管理列表
		List<RuleBean> list = ruleManageServiceImpl.getRuleList(queryBean);
		
		//分页
		ArrayList<RuleBean> listPage = new ArrayList<RuleBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				RuleBean gub = list.get(i);
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
	 * 新增规则
	 * @param ruleName
	 * @param rate
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.GET)
	@ResponseBody
	public Object saveRule(@ApiParam(required = false, name = "ruleName", value = "规则名称") @RequestParam(value = "ruleName", required = false) String ruleName,
			@ApiParam(required = false, name = "rate", value = "规则内容") @RequestParam(value = "rate", required = false) String rate,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		RuleBean ruleBean = new RuleBean();
		ruleBean.setRuleName(ruleName);
		ruleBean.setRate(rate);
		ruleBean.setRemark(remark);
		
		//新增规则
		ruleManageServiceImpl.saveRule(ruleBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "保存规则成功");
    	return map;
	}
	
	/**
	 * 修改规则
	 * @param ruleName
	 * @param rate
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	@ResponseBody
	public Object updateRule(@ApiParam(required = false, name = "id", value = "规则id") @RequestParam(value = "id", required = false) String id,
			@ApiParam(required = false, name = "ruleName", value = "规则名称") @RequestParam(value = "ruleName", required = false) String ruleName,
			@ApiParam(required = false, name = "rate", value = "规则内容") @RequestParam(value = "rate", required = false) String rate,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		RuleBean ruleBean = new RuleBean();
		ruleBean.setId(id);
		ruleBean.setRuleName(ruleName);
		ruleBean.setRate(rate);
		ruleBean.setRemark(remark);
		
		//修改规则
		ruleManageServiceImpl.updateRule(ruleBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "修改规则成功");
    	return map;
	}
	
	/**
	 * 删除规则
	 * @return
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	@ResponseBody
	public Object deleteRule(@ApiParam(required = false, name = "ids", value = "规则id列表") @RequestParam(value = "ids", required = false) String ids) {
		
		//删除规则
		ruleManageServiceImpl.deleteRule(ids);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "删除规则成功");
    	return map;
	}
	
	/**
	 * 获取待设置规则商户列表信息
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/shopList", method = RequestMethod.GET)
	public Object getShopList(@ApiParam(required = false, name = "tenantName", value = "商户名查询参数") @RequestParam(value = "tenantName", required = false) String tenantName,
		@ApiParam(required = false, name = "trade", value = "行业") @RequestParam(value = "trade", required = false) String trade,
		@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize) {

		if(null != tenantName){
			tenantName = tenantName.replace("'", "\\'");
		}
	
		return shopManageServiceImpl.getUserPage(tenantName, trade, pageStart, pageSize);
	}
	
	/**
	 * 应用规则
	 * @param ruleName
	 * @param rate
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/apply", method = RequestMethod.GET)
	@ResponseBody
	public Object applyRule(@ApiParam(required = false, name = "tradeFlag", value = "行业标识") @RequestParam(value = "tradeFlag", required = false) String tradeFlag,
			@ApiParam(required = false, name = "ids", value = "商户id列表或行业id") @RequestParam(value = "ids", required = false) String ids,
			@ApiParam(required = false, name = "ruleId", value = "所选择规则id") @RequestParam(value = "ruleId", required = false) String ruleId) {
		
		//应用规则
		ruleManageServiceImpl.applyRule(ruleId, tradeFlag, ids);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "保存成功");
    	return map;
	}

}
