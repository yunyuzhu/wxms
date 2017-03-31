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
	
}
