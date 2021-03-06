/**
 * 
 */
package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.WxUser;

/**
 * @author zzc
 *
 */
public interface IPortalAccountService {

	/**
	 * 获取我的账户信息
	 * @param id
	 * @return
	 */
	WxUser getMyAccountInfo(String id);

	/**
	 * 获取我的账户金币余额
	 * @param id
	 * @return
	 */
	String getMyAccountGold(String id);

	/**
	 * 获取我的账户金币流水
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getMyAccountGoldStream(String id);

	/**
	 * 扫描消费金额
	 * @param id
	 * @param shopId
	 * @param consumeMoney
	 */
	void saveGoldDetail(String id, String shopId, String consumeMoney);

	/**
	 * 用户注册
	 * @param user
	 */
	void saveUser(WxUser user);

	/**
	 * 修改用户信息
	 * @param user
	 */
	void updateUser(WxUser user);

	/**
	 * 获取我的账户消费流水
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getMyAccountConsumeStream(String id);

	/**
	 * 获取我的账户金币兑换申请流水
	 * @param string
	 * @return
	 */
	List<GoldUserBean> getMyAccountChangeStream(String id);

	/**
	 * 修改用户头像
	 * @param id
	 * @param photoUrl
	 */
	void updateUserPhoto(String id, String photoUrl);

	/**
	 * 验证该手机号是否已注册
	 * @param phone
	 * @return
	 */
	String getIdByPhone(String phone);

	/**
	 * 保存验证码信息
	 * @param id
	 * @param randomCode
	 */
	void saveVerifyCode(String id, StringBuffer randomCode);

	/**
	 * 修改密码
	 * @param user
	 */
	void modifyPassword(WxUser user);

	/**
	 * 获取验证信息
	 * @param id
	 * @return
	 */
	WxUser getVerifyInfo(String id);

}
