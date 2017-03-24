package com.bigdata.service.system;

import com.bigdata.common.base.BaseService;
import com.bigdata.model.system.Menu;

import java.util.List;
import java.util.Map;

public interface IMenuService extends BaseService<Menu, Long> {

	public List<Menu> findRoleResourcess(String roleId);

	public List<Menu> findRes(Map<String, Object> map);

	List<Menu> findMenuByWhere();

}
