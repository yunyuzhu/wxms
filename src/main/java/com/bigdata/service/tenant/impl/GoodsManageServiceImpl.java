package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.GoodsManageMapper;
import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.service.tenant.IGoodsManageService;

/**   
* @Title: GoodsManageServiceImpl.java
* @Description: 商品管理接口实现类 
* @author zzc   
* @date 2017年4月11日 上午10:37:44   
*/
@Service
public class GoodsManageServiceImpl implements IGoodsManageService {
	
	@Resource
	private GoodsManageMapper goodsManageMapper;

	/**
	 * 获取商品管理列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<GoodsBean> getGoodsList(QueryBean queryBean) {
		//获取商品管理列表
		List<GoodsBean> list = goodsManageMapper.getGoodsList(queryBean);
		return list;
	}

	/**
	 * 新增商品
	 * @param goodsBean
	 */
	@Override
	public void saveGoods(GoodsBean goodsBean) {
		//新增商品
		goodsManageMapper.saveGoods(goodsBean);	
	}

	/**
	 * 修改商品
	 * @param goodsBean
	 */
	@Override
	public void updateGoods(GoodsBean goodsBean) {
		//修改商品
		goodsManageMapper.updateGoods(goodsBean);	
	}

	/**
	 * 删除商品
	 * @param ids
	 */
	@Override
	public void deleteGoods(String ids) {
		//删除商品
		goodsManageMapper.deleteGoods(ids);	
	}

	/**
	 * 根据ID获取商品内容
	 * @param id
	 * @return
	 */
	@Override
	public GoodsBean getGoodsInfoById(String id) {
		//根据ID获取商品内容
		GoodsBean goodsBean = goodsManageMapper.getGoodsInfoById(id);
		return goodsBean;
	}

}
