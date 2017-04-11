package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.model.tenant.QueryBean;

/**   
* @Title: IGoodsManageService.java
* @Description: 商品管理接口 
* @author zzc   
* @date 2017年4月11日 上午10:37:08   
*/
public interface IGoodsManageService {

	/**
	 * 获取商品管理列表
	 * @param queryBean
	 * @return
	 */
	List<GoodsBean> getGoodsList(QueryBean queryBean);

	/**
	 * 新增商品
	 * @param goodsBean
	 */
	void saveGoods(GoodsBean goodsBean);

	/**
	 * 修改商品
	 * @param goodsBean
	 */
	void updateGoods(GoodsBean goodsBean);

	/**
	 * 删除商品
	 * @param ids
	 */
	void deleteGoods(String ids);

	/**
	 * 根据ID获取商品内容
	 * @param id
	 * @return
	 */
	GoodsBean getGoodsInfoById(String id);

}
