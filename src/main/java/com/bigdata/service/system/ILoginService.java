package com.bigdata.service.system;

import com.bigdata.common.base.BaseService;
import com.bigdata.model.system.UserLogin;


public interface ILoginService extends BaseService<UserLogin, Long> {
	
	public void addUserLogin(UserLogin formMap) throws Exception;

}
