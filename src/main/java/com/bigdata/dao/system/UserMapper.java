package com.bigdata.dao.system;

import java.util.List;

import com.bigdata.common.base.BaseDao;
import com.bigdata.model.system.User;

public interface UserMapper extends BaseDao<User, Long> {

	public List<User> findUserByName(String userName);
	
}
