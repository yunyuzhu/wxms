package com.bigdata.dao.system;

import com.bigdata.common.base.BaseDao;
import com.bigdata.model.system.Menu;

import java.util.List;
import java.util.Map;

public interface MenuMapper extends BaseDao<Menu, Long> {

	public List<Menu> findRoleResourcess(String roleId);

	public List<Menu> findRes(Map<String, Object> map);

	List<Menu> findMenuByWhere();
	
	
}
