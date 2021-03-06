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

	/**
	 * 获取我的账户消费流水
	 * @param id
	 * @return
	 */
	@Override
	public List<GoldUserBean> getMyAccountConsumeStream(String id) {
		//获取我的账户消费流水
		List<GoldUserBean> list = portalAccountMapper.getMyAccountConsumeStream(id);
		return list;
	}

	/**
	 * 获取我的账户金币兑换申请流水
	 * @param string
	 * @return
	 */
	@Override
	public List<GoldUserBean> getMyAccountChangeStream(String id) {
		//获取我的账户金币兑换申请流水
		List<GoldUserBean> list = portalAccountMapper.getMyAccountChangeStream(id);
		return list;
	}

	/**
	 * 修改用户头像
	 * @param string
	 * @param photoUrl
	 */
	@Override
	public void updateUserPhoto(String id, String photoUrl) {
		//修改用户头像
		portalAccountMapper.updateUserPhoto(id, photoUrl);
	}

	/**
	 * 验证该手机号是否已注册
	 * @param phone
	 * @return
	 */
	@Override
	public String getIdByPhone(String phone) {
		//修改用户头像
		return portalAccountMapper.getIdByPhone(phone);
	}

	/**
	 * 保存验证码信息
	 * @param id
	 * @param randomCode
	 */
	@Override
	public void saveVerifyCode(String id, StringBuffer randomCode) {
		//保存验证码信息
		portalAccountMapper.saveVerifyCode(id, randomCode.toString());
	}

	/**
	 * 修改密码
	 * @param user
	 */
	@Override
	public void modifyPassword(WxUser user) {
		//修改密码
		portalAccountMapper.modifyPassword(user);
	}

	/**
	 * 获取验证信息
	 * @param id
	 * @return
	 */
	@Override
	public WxUser getVerifyInfo(String id) {
		//获取验证信息
		WxUser wxUser = portalAccountMapper.getVerifyInfo(id);
		return wxUser;
	}

}
