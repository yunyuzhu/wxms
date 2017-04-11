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

import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.service.tenant.IGoodsManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: GoodsManageController.java
* @Description: 商品管理
* @author zzc   
* @date 2017年4月11日 上午10:34:28   
*/
@Controller
@RequestMapping(value="/goods")
public class GoodsManageController {
	
	@Resource
	private IGoodsManageService goodsManageServiceImpl;
	
	/**
	 * 获取商品管理列表
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/goodsList", method = RequestMethod.GET)
	public Object getGoodsList(@ApiParam(required = false, name = "name", value = "商品名称") @RequestParam(required = false, value = "name") String name,
							  @ApiParam(required = false, name = "startTime", value = "开始时间") @RequestParam(required = false, value = "startTime") String startTime,
		                      @ApiParam(required = false, name = "endTime", value = "结束时间") @RequestParam(required = false, value = "endTime") String endTime,
		                      @ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
		         			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		QueryBean queryBean = new QueryBean();
		queryBean.setName(name);
		queryBean.setStartTime(startTime);
		queryBean.setEndTime(endTime);
		
		//获取商品管理列表
		List<GoodsBean> list = goodsManageServiceImpl.getGoodsList(queryBean);
		
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
	 * 新增商品
	 * @param name
	 * @param price
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.GET)
	@ResponseBody
	public Object saveGoods(@ApiParam(required = false, name = "name", value = "商品名称") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "price", value = "金币价格") @RequestParam(value = "price", required = false) String price,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		GoodsBean goodsBean = new GoodsBean();
		goodsBean.setName(name);
		goodsBean.setPrice(price);
		goodsBean.setRemark(remark);
		
		//新增商品
		goodsManageServiceImpl.saveGoods(goodsBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "保存商品成功");
    	return map;
	}
	
	/**
	 * 修改商品
	 * @param id
	 * @param name
	 * @param price
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	@ResponseBody
	public Object updateGoods(@ApiParam(required = false, name = "id", value = "规则id") @RequestParam(value = "id", required = false) String id,
			@ApiParam(required = false, name = "name", value = "商品名称") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "price", value = "金币价格") @RequestParam(value = "price", required = false) String price,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		GoodsBean goodsBean = new GoodsBean();
		goodsBean.setId(id);
		goodsBean.setName(name);
		goodsBean.setPrice(price);
		goodsBean.setRemark(remark);
		
		//修改商品
		goodsManageServiceImpl.updateGoods(goodsBean);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "修改商品成功");
    	return map;
	}
	
	/**
	 * 删除商品
	 * @return
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	@ResponseBody
	public Object deleteGoods(@ApiParam(required = false, name = "ids", value = "商品id列表") @RequestParam(value = "ids", required = false) String ids) {
		
		//删除商品
		goodsManageServiceImpl.deleteGoods(ids);
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "删除商品成功");
    	return map;
	}
	
	/**
	 * 根据ID获取商品内容
	 * @return
	 */
	@RequestMapping(value = "/query", method = RequestMethod.GET)
	@ResponseBody
	public Object getGoodsInfoById(@ApiParam(required = false, name = "id", value = "商品id") @RequestParam(value = "id", required = false) String id) {
		
		//根据ID获取商品内容
		GoodsBean goodsBean = goodsManageServiceImpl.getGoodsInfoById(id);
    	return goodsBean;
	}

}
