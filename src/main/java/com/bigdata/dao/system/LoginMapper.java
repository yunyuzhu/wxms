package com.bigdata.dao.system;

import com.bigdata.common.base.BaseDao;
import com.bigdata.model.system.UserLogin;

public interface LoginMapper extends BaseDao<UserLogin, Long> {
	
	public void addUserLogin(UserLogin formMap);

}
