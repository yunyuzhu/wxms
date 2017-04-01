package com.bigdata.dao.tenant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bigdata.model.tenant.MessageBean;
import com.bigdata.model.tenant.MessageDetailBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;

/**   
* @Title: MessageManageMapper.java
* @Description: 消息管理数据模型类 
* @author zzc   
* @date 2017年3月30日 上午10:54:09   
*/
public interface MessageManageMapper {

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
	List<WxUser> getMessageUserList(@Param(value = "userType") String userType);

	/**
	 * 保存短信信息
	 * @param messageBean
	 */
	void saveMessageInfo(MessageBean messageBean);

	/**
	 * 保存短信明细
	 * @param mdb
	 */
	void saveMessageDetailInfo(MessageDetailBean mdb);

}
