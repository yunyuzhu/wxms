package com.bigdata.service.system.impl;

import org.springframework.stereotype.Service;

import com.bigdata.common.base.BaseDao;
import com.bigdata.common.base.BaseServiceImpl;
import com.bigdata.dao.system.MenuMapper;
import com.bigdata.model.system.Menu;
import com.bigdata.service.system.IMenuService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service("menuService")
public class MenuServiceImpl extends BaseServiceImpl<Menu, Long> implements IMenuService {
	
	@Resource(name="menuMapper")
	private MenuMapper menuMapper;

	@Override
	public List<Menu> findRoleResourcess(String roleId) {
		List<Menu> menuList = menuMapper.findRoleResourcess(roleId);
		
		return menuList;
	}

	@Override
	public List<Menu> findRes(Map<String, Object> map) {
		List<Menu> menuList = menuMapper.findRes(map);
		
		return menuList;
	}

	@Override
	public List<Menu> findMenuByWhere() {
		List<Menu> menuList = menuMapper.findMenuByWhere();
		
		return menuList;
	}

	@Override
	public BaseDao<Menu, Long> getDao() {
		return menuMapper;
	}


}
