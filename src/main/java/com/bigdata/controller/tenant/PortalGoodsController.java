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
import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.service.tenant.IPortalGoodsService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: PortalGoodsController.java
* @Description: 门户商品兑换 
* @author zzc   
* @date 2017年4月11日 下午4:12:12   
*/
@Controller
@RequestMapping(value="/portalGoods")
public class PortalGoodsController {
	
	@Resource
	private IPortalGoodsService portalGoodsServiceImpl;
	
	/**
	 * 获取兑换商品列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/changeList", method = RequestMethod.GET)
	public Object getGoodsChangeList(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		         			   @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取兑换商品列表
		List<GoodsBean> list = portalGoodsServiceImpl.getGoodsChangeList();
		
		//分页
		ArrayList<GoodsBean> listPage = new ArrayList<GoodsBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoodsBean gub = list.get(i);
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
	 * 提交兑换商品申请
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/changeGoods", method = RequestMethod.GET)
	public Object updateChangeGoods(@ApiParam(required = false, name = "ids", value = "兑换商品Id列表") @RequestParam(value = "ids", required = false) String ids,
		         			   		@ApiParam(required = false, name = "prices", value = "兑换商品价格列表") @RequestParam(value = "prices", required = false) String prices,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//提交兑换商品申请
		portalGoodsServiceImpl.updateChangeGoods(user.getId().toString(), ids, prices);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "提交兑换商品申请成功");
    	return map;
	}

}
