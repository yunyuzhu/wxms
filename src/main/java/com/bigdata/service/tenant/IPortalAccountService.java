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
	List<GoldUserBean> getMyAccountGoldStream(String string);

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

}
