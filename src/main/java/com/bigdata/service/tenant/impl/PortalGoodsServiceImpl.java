package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.PortalGoodsMapper;
import com.bigdata.model.tenant.GoodsBean;
import com.bigdata.service.tenant.IPortalGoodsService;

/**   
* @Title: PortalGoodsServiceImpl.java
* @Description: 门户商品兑换接口实现 
* @author zzc   
* @date 2017年4月11日 下午4:14:33   
*/
@Service
public class PortalGoodsServiceImpl implements IPortalGoodsService {
	
	@Resource
	private PortalGoodsMapper portalGoodsMapper;

	/**
	 * 获取兑换商品列表
	 * @return
	 */
	@Override
	public List<GoodsBean> getGoodsChangeList() {
		//获取兑换商品列表
		List<GoodsBean> list = portalGoodsMapper.getGoodsChangeList();
		return list;
	}

	/**
	 * 提交兑换商品申请
	 * @param userId
	 * @param ids
	 * @param prices
	 */
	@Override
	public void updateChangeGoods(String userId, String ids, String prices) {
		//提交兑换商品申请
		int count = 0;
		String[] arrId = ids.split(",");
		String[] arrPrice = prices.split(",");
		for(int i=0;i<arrId.length;i++){
			portalGoodsMapper.updateChangeGoods(userId, arrId[i], arrPrice[i]);
			count += Integer.parseInt(arrPrice[i]);
		}
		
		//更新用户金币余额
		portalGoodsMapper.updateUserGold(userId, count);
	}

}
