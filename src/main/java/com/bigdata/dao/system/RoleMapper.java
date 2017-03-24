package com.bigdata.dao.system;

import com.bigdata.common.base.BaseDao;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.RoleFormMap;

import java.util.List;

public interface RoleMapper extends BaseDao<Role, Long> {
	
	List<Role> seletUserRole(String userId);

	List<Role> findByPage(RoleFormMap roleFormMap);

	void editEntity(RoleFormMap roleFormMap);

	Object findbyFrist(String id, String id1, Class<RoleFormMap> roleFormMapClass);

	void addEntity(RoleFormMap roleFormMap);

	void deleteByAttribute(String id, String id1, Class<RoleFormMap> roleFormMapClass);
}
