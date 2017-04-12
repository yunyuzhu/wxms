package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.GoodsBean;

/**   
* @Title: PortalGoodsMapper.java
* @Description: PortalGoodsMapper 
* @author zzc   
* @date 2017年4月11日 下午4:13:23   
*/
public interface PortalGoodsMapper {

	/**
	 * 获取兑换商品列表
	 * @return
	 */
	List<GoodsBean> getGoodsChangeList();

	/**
	 * 提交兑换商品申请
	 * @param userId
	 * @param goodsId
	 * @param price
	 */
	void updateChangeGoods(@Param(value = "userId") String userId, @Param(value = "goodsId") String goodsId, @Param(value = "price") String price);

	/**
	 * 更新用户金币余额
	 * @param userId
	 * @param count
	 */
	void updateUserGold(@Param(value = "userId") String userId, @Param(value = "count") Integer count);

}
