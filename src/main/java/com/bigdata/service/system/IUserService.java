package com.bigdata.service.system;

import com.bigdata.common.base.BaseService;
import com.bigdata.model.system.User;

import java.util.List;


public interface IUserService extends BaseService<User, Long> {

	public List<User> findByName(String userName);
	
}
