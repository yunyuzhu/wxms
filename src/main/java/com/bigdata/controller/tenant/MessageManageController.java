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
import com.bigdata.model.tenant.MessageBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IMessageManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: MessageManageController.java
* @Description: 短信管理
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/message")
public class MessageManageController {
	
	@Resource
	private IMessageManageService messageManageServiceImpl;
	
	/**
	 * 获取待发送信息用户列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/userList", method = RequestMethod.GET)
	public Object getMessageUserList(@ApiParam(required = false, name = "userType", value = "用户类型(用户：1；商户：2)") @RequestParam(required = false, value = "userType") String userType,
		                      		 @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		                      		 @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取待发送信息用户列表
		List<WxUser> list = messageManageServiceImpl.getMessageUserList(userType);
		
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
	 * 发送短信
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/send", method = RequestMethod.GET)
	public Object sendMessage(@ApiParam(required = false, name = "message", value = "短信内容") @RequestParam(required = false, value = "message") String message,
							  @ApiParam(required = false, name = "ids", value = "用户id列表") @RequestParam(required = false, value = "ids") String ids,
							  @ApiParam(required = false, name = "phones", value = "电话号码列表") @RequestParam(value = "phones", required = false) String phones,
		                      @ApiParam(required = false, name = "userTypes", value = "用户类型列表") @RequestParam(value = "userTypes", required = false) String userTypes,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//发送短信代码
		
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		MessageBean messageBean = new MessageBean();
		messageBean.setUserId(user.getId().toString());
		messageBean.setMessage(message);
		
		//保存短信信息及明细
		messageManageServiceImpl.saveMessageInfo(messageBean, ids, userTypes);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "发送短信完成");
    	return map;
	}
	
	/**
	 * 获取历史短信列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/history", method = RequestMethod.GET)
	public Object getMessageHistoryList(@ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
		                      			@ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
		                      			@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		                      			@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取历史短信列表
		List<MessageBean> list = messageManageServiceImpl.getMessageHistoryList(queryBean);
		
		//分页
		ArrayList<MessageBean> listPage = new ArrayList<MessageBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				MessageBean gub = list.get(i);
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
