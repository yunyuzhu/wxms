/**
 * 
 */
package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.WxUser;

/**
 * @author zzc
 *
 */
public interface PortalAccountMapper {

	/**
	 * 获取我的账户信息
	 * @param id
	 * @return
	 */
	WxUser getMyAccountInfo(@Param(value = "id") String id);

	/**
	 * 获取我的账户金币余额
	 * @param id
	 * @return
	 */
	String getMyAccountGold(@Param(value = "id") String id);

	/**
	 * 获取我的账户金币流水
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getMyAccountGoldStream(@Param(value = "id") String id);

	/**
	 * 扫描消费金额
	 * @param id
	 * @param shopId
	 * @param consumeMoney
	 */
	void saveGoldDetail(@Param(value = "id") String id, @Param(value = "shopId") String shopId, @Param(value = "consumeMoney") String consumeMoney);

	/**
	 * 保存用户表
	 * @param user
	 */
	void saveUser(WxUser user);

	/**
	 * 保存用户微信表
	 * @param user
	 */
	void saveWxUser(WxUser user);

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
	List<GoldUserBean> getMyAccountConsumeStream(@Param(value = "id") String id);

	/**
	 * 获取我的账户金币兑换申请流水
	 * @param id
	 * @return
	 */
	List<GoldUserBean> getMyAccountChangeStream(@Param(value = "id") String id);

	/**
	 * 修改用户头像
	 * @param id
	 * @param photoUrl
	 */
	void updateUserPhoto(@Param(value = "id") String id, @Param(value = "photoUrl") String photoUrl);

}
