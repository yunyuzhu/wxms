/**
 * 
 */
package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.PortalAccountMapper;
import com.bigdata.dao.tenant.ShopManageMapper;
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IPortalAccountService;

/**
 * @author zzc
 *
 */
@Service
public class PortalAccountServiceImpl implements IPortalAccountService {
	
	@Resource
	private PortalAccountMapper portalAccountMapper;
	
	@Resource
	private ShopManageMapper shopManageMapper;

	/**
	 * 获取我的账户信息
	 * @param id
	 * @return
	 */
	@Override
	public WxUser getMyAccountInfo(String id) {
		//获取我的账户信息
		WxUser wxUser = portalAccountMapper.getMyAccountInfo(id);
		return wxUser;
	}

	/**
	 * 获取我的账户金币余额
	 * @param id
	 * @return
	 */
	@Override
	public String getMyAccountGold(String id) {
		//获取我的账户金币余额
		String gold = portalAccountMapper.getMyAccountGold(id);
		return gold;
	}

	/**
	 * 获取我的账户金币流水
	 * @param id
	 * @return
	 */
	@Override
	public List<GoldUserBean> getMyAccountGoldStream(String id) {
		//获取我的账户金币流水
		List<GoldUserBean> list = portalAccountMapper.getMyAccountGoldStream(id);
		return list;
	}

	/**
	 * 扫描消费金额
	 * @param id
	 * @param shopId
	 * @param consumeMoney
	 */
	@Override
	public void saveGoldDetail(String id, String shopId, String consumeMoney) {
		//扫描消费金额
		portalAccountMapper.saveGoldDetail(id, shopId, consumeMoney);
	}

	/**
	 * 用户注册
	 * @param user
	 */
	@Override
	public void saveUser(WxUser user) {
		//保存用户表
		portalAccountMapper.saveUser(user);
		
		//保存用户微信表
		portalAccountMapper.saveWxUser(user);
		
		//保存用户角色
		shopManageMapper.saveUserRole(Integer.parseInt(user.getId()), 3);
	}

	/**
	 * 修改用户信息
	 * @param user
	 */
	@Override
	public void updateUser(WxUser user) {
		//修改用户表
		portalAccountMapper.updateUser(user);
	}

}
