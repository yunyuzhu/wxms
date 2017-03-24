package com.bigdata.service.manage.impl;

import org.springframework.stereotype.Service;

import com.bigdata.common.util.HttpResult;
import com.bigdata.dao.manage.ManageRoleMapper;
import com.bigdata.service.manage.IManageRoleService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

/**
 * 用户Service实现类
 *
 * @author wangfan
 * @since 2016年11月1日 上午11:54:24
 */
@Service
public class ManageRoleServiceImpl implements IManageRoleService {

	@Resource
	private ManageRoleMapper manageRoleMapper;

	@Override
	public Map<String, Object> getAllRoles() {
		List<Map<String, Object>> list = manageRoleMapper.getAllRoles();
		Map<String, Object> map = new HashMap<>();
		map.put("roles", list);
		return map;
	}

	@Override
	public HttpResult getRoleInfo(Integer roleId) {
		List<Map<String, Object>> list=manageRoleMapper.getMeneRefRoleByRoleId(roleId);
		return HttpResult.build(true, "0000", "查询成功！", list);
	}

	@Override
	public Object updateRoleMenu(Integer roleId,String[] roleMenu) {
		//删除原先角色与菜单的一对多关系记录
		manageRoleMapper.deleteRoleMenuByRoleId(roleId);
		
		//插入新的角色与菜单关联记录
		if(roleMenu.length>0){
			for(String str:roleMenu){
				int resId=Integer.parseInt(str);
				manageRoleMapper.insertRoleMenu(roleId,resId);
			}
		}
		
		return HttpResult.build(true, "0000", "角色权限更新成功！");
	}

	@Override
	public Object getRolePage(Integer pageStart, Integer pageSize) {
		Map<String, Object> resMap=new HashMap<>();
		
		//角色记录总条数
		int total = manageRoleMapper.getRoleCount();
		resMap.put("total", total);
		if(total>0){
			//分页查询角色list
			List<Map<String, Object>> list=manageRoleMapper.getRolePage(pageStart, pageSize);
			if(list!=null){
				for(int i=0;i<list.size();i++){
					list.get(i).put("orderId", i+1);
				}
			}
			resMap.put("rows", list);
		}else{
			resMap.put("rows", null);
		}
		
		return HttpResult.build(true, "0000", "查询成功",resMap);
	}

}
