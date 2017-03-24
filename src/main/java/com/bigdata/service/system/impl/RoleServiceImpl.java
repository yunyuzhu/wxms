package com.bigdata.service.system.impl;

import org.springframework.stereotype.Service;

import com.bigdata.common.base.BaseDao;
import com.bigdata.common.base.BaseServiceImpl;
import com.bigdata.dao.system.RoleMapper;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.RoleFormMap;
import com.bigdata.service.system.IRoleService;

import javax.annotation.Resource;
import java.util.List;

@Service("roleService")
public class RoleServiceImpl extends BaseServiceImpl<Role, Long> implements IRoleService {

	@Resource(name="roleMapper")
	private RoleMapper roleMapper;

	@Override
	public void deleteByAttribute(String id, String id1, Class<RoleFormMap> roleFormMapClass) {
		roleMapper.deleteByAttribute(id, id1, roleFormMapClass);
	}

	@Override
	public void addEntity(RoleFormMap roleFormMap) {
		roleMapper.addEntity(roleFormMap);
	}

	@Override
	public Object findbyFrist(String id, String id1, Class<RoleFormMap> roleFormMapClass) {
		return roleMapper.findbyFrist(id, id1, roleFormMapClass);
	}

	@Override
	public void editEntity(RoleFormMap roleFormMap) {
		roleMapper.editEntity(roleFormMap);
	}

	@Override
	public List<Role> findByPage(RoleFormMap roleFormMap) {
		List<Role> roleList = roleMapper.findByPage(roleFormMap);
		return roleList;
	}

	@Override
	public List<Role> seletUserRole(String userId) {
		List<Role> roleList = roleMapper.seletUserRole(userId);
		
		return roleList;
	}

	@Override
	public BaseDao<Role, Long> getDao() {
		return roleMapper;
	}

}
