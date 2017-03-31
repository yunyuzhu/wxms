package com.bigdata.service.tenant.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.MessageManageMapper;
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
	
}
