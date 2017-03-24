package com.bigdata.service.system.impl;

import org.springframework.stereotype.Service;

import com.bigdata.common.base.BaseDao;
import com.bigdata.common.base.BaseServiceImpl;
import com.bigdata.dao.system.LoginMapper;
import com.bigdata.model.system.UserLogin;
import com.bigdata.service.system.ILoginService;

import javax.annotation.Resource;

@Service("loginService")
public class LoginServiceImpl extends BaseServiceImpl<UserLogin, Long> implements ILoginService {
	
	@Resource(name = "loginMapper")
	private LoginMapper loginMapper;

	@Override
	public void addUserLogin(UserLogin formMap) throws Exception {
		loginMapper.addUserLogin(formMap);
	}

	@Override
	public BaseDao<UserLogin, Long> getDao() {
		return loginMapper;
	}

}
