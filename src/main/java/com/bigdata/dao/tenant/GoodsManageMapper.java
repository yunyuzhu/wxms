package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.model.tenant.QueryBean;

/**   
* @Title: GoodsManageDao.java
* @Description: 商品管理 
* @author zzc   
* @date 2017年4月11日 上午10:36:37   
*/
public interface GoodsManageMapper {

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
	void deleteGoods(@Param(value = "ids") String ids);

	/**
	 * 根据ID获取商品内容
	 * @param id
	 * @return
	 */
	GoodsBean getGoodsInfoById(@Param(value = "id") String id);

	/**
	 * 获取待确认兑换商品信息列表
	 * @param queryBean
	 * @return
	 */
	List<GoldUserBean> getConfirmList(QueryBean queryBean);

	/**
	 * 确认兑换商品
	 * @param id
	 */
	void updateChangeGoods(@Param(value = "id") String id);

}
