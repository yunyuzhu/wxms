package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.GoodsBean;

/**   
* @Title: IPortalGoodsService.java
* @Description: 门户商品兑换接口 
* @author zzc   
* @date 2017年4月11日 下午4:14:03   
*/
public interface IPortalGoodsService {

	/**
	 * 获取兑换商品列表
	 * @return
	 */
	List<GoodsBean> getGoodsChangeList();

	/**
	 * 提交兑换商品申请
	 * @param userId
	 * @param ids
	 * @param prices
	 */
	void updateChangeGoods(String userId, String ids, String prices);

}
