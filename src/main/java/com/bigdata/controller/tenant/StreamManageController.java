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

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IStreamManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: StreamManageController.java
* @Description: 流水管理
* @author zzc   
* @date 2017年3月31日 下午3:43:24   
*/
@Controller
@RequestMapping(value="/stream")
public class StreamManageController {
	
	@Resource
	private IStreamManageService streamManageServiceImpl;

	/**
	 * 获取金币流水列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/gold", method = RequestMethod.GET)
	public Object getGoldStreamList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
			  @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
			  @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取金币流水列表
		List<GoldUserBean> list = streamManageServiceImpl.getGoldStreamList(queryBean);
		
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
	@RequestMapping(value="/consume", method = RequestMethod.GET)
	public Object getConsumeStreamList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
			  @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
			  @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取消费流水列表
		List<GoldUserBean> list = streamManageServiceImpl.getConsumeStreamList(queryBean);
		
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
	 * 获取用户金币余额列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/balance", method = RequestMethod.GET)
	public Object getUserBalanceList(@ApiParam(required = false, name = "name", value = "用户姓名") @RequestParam(required = false, value = "name") String name,
			  @ApiParam(required = false, name = "phone", value = "电话") @RequestParam(required = false, value = "phone") String phone,
			  @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setName(name);
		queryBean.setPhone(phone);
		
		//获取用户金币余额列表
		List<WxUser> list = streamManageServiceImpl.getUserBalanceList(queryBean);
		
		//分页
		ArrayList<WxUser> listPage = new ArrayList<WxUser>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				WxUser gub = list.get(i);
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
	 * 兑换金币
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/change", method = RequestMethod.GET)
	public Object updateUserChangeGold(@ApiParam(required = false, name = "id", value = "用户id") @RequestParam(required = false, value = "id") String id,
			  @ApiParam(required = false, name = "gold", value = "兑换金币数量") @RequestParam(required = false, value = "gold") String gold,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		WxUser wxUser = new WxUser();
		wxUser.setId(id);
		wxUser.setGold(gold);
		
		//兑换金币
		streamManageServiceImpl.updateUserChangeGold(wxUser);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "兑换金币成功");
    	return map;
	}
	
}
