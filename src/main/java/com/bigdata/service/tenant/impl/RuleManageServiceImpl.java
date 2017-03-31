package com.bigdata.service.tenant.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bigdata.dao.tenant.RuleManageMapper;
import com.bigdata.service.tenant.IRuleManageService;

/**   
* @Title: ShopManageServiceImpl.java
* @Description: 规则管理接口实现类 
* @author zzc   
* @date 2017年3月30日 上午10:54:47   
*/
@Service
public class RuleManageServiceImpl implements IRuleManageService {

	@Resource
	private RuleManageMapper ruleManageMapper;
	
}
