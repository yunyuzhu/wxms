package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.StreamManageMapper;
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IStreamManageService;

/**   
* @Title: StreamManageServiceImpl.java
* @Description: 流水管理接口实现类 
* @author zzc   
* @date 2017年3月31日 下午3:45:36   
*/
@Service
public class StreamManageServiceImpl implements IStreamManageService {
	
	@Resource
	private StreamManageMapper streamManageMapper;

	/**
	 * 获取金币流水列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<GoldUserBean> getGoldStreamList(QueryBean queryBean) {
		//获取金币流水列表
		List<GoldUserBean> list = streamManageMapper.getGoldStreamList(queryBean);
		return list;
	}

	/**
	 * 获取消费流水列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<GoldUserBean> getConsumeStreamList(QueryBean queryBean) {
		//获取金币流水列表
		List<GoldUserBean> list = streamManageMapper.getConsumeStreamList(queryBean);
		return list;
	}

	/**
	 * 获取用户金币余额列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<WxUser> getUserBalanceList(QueryBean queryBean) {
		//获取金币流水列表
		List<WxUser> list = streamManageMapper.getUserBalanceList(queryBean);
		return list;
	}

	/**
	 * 兑换金币
	 * @param wxUser
	 */
	@Override
	public void updateUserChangeGold(WxUser wxUser) {
		//修改用户金币余额
		streamManageMapper.updateUserChangeGold(wxUser);
		
		//增加金币流水信息
		streamManageMapper.updateGoldDetail(wxUser);
	}

}
