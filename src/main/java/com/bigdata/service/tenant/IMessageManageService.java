package com.bigdata.service.tenant;

import java.util.List;

import com.bigdata.model.tenant.MessageBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;

/**   
* @Title: IMessageManageService.java
* @Description: 消息管理接口
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface IMessageManageService {

	/**
	 * 获取历史短信列表
	 * @param queryBean
	 * @return
	 */
	List<MessageBean> getMessageHistoryList(QueryBean queryBean);

	/**
	 * 获取待发送信息用户列表
	 * @param userType
	 * @return
	 */
	List<WxUser> getMessageUserList(String userType);

	/**
	 * 保存短信信息及明细
	 * @param messageBean
	 * @param ids
	 * @param userTypes
	 */
	void saveMessageInfo(MessageBean messageBean, String ids, String userTypes);

}
