package com.bigdata.service.tenant.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.MessageManageMapper;
import com.bigdata.model.tenant.MessageBean;
import com.bigdata.model.tenant.MessageDetailBean;
import com.bigdata.model.tenant.QueryBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IMessageManageService;

/**   
* @Title: ShopManageServiceImpl.java
* @Description: 消息管理接口实现类 
* @author zzc   
* @date 2017年3月30日 上午10:54:47   
*/
@Service
public class MessageManageServiceImpl implements IMessageManageService {

	@Resource
	private MessageManageMapper messageManageMapper;

	/**
	 * 获取历史短信列表
	 * @param queryBean
	 * @return
	 */
	@Override
	public List<MessageBean> getMessageHistoryList(QueryBean queryBean) {
		//获取历史短信列表
		List<MessageBean> list = messageManageMapper.getMessageHistoryList(queryBean);
		return list;
	}

	/**
	 * 获取待发送信息用户列表
	 * @param userType
	 * @return
	 */
	@Override
	public List<WxUser> getMessageUserList(String userType) {
		//获取待发送信息用户列表
		List<WxUser> list = messageManageMapper.getMessageUserList(userType);
		return list;
	}

	/**
	 * 保存短信信息及明细
	 * @param messageBean
	 * @param ids
	 * @param userTypes
	 */
	@Override
	public void saveMessageInfo(MessageBean messageBean, String ids,
			String userTypes) {
		//保存短信信息
		messageManageMapper.saveMessageInfo(messageBean);
		String messageId = messageBean.getId();//短信Id
		
		//保存短信明细
		String[] arrId = ids.split(",");
		String[] arrType = userTypes.split(",");
		for(int i=0;i<arrId.length;i++){
			MessageDetailBean mdb = new MessageDetailBean();
			mdb.setMessageId(messageId);
			mdb.setUserType(arrType[i]);
			mdb.setUserId(arrId[i]);
			messageManageMapper.saveMessageDetailInfo(mdb);
		}
	}
	
}
