package com.bigdata.controller.manage;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.common.util.HttpResult;
import com.bigdata.service.manage.IManageRoleService;
import com.wordnik.swagger.annotations.ApiParam;

/**
 * 角色管理
 * 
 * @Title: ManageRoleController.java
 * @Description: ManageRoleController
 * @author wangfan
 * @date 2016年10月31日 下午4:42:47
 */
@Controller
@RequestMapping(value = "/manageRole")
public class ManageRoleController {

	@Resource
	private IManageRoleService manageRoleService;

	/**
	 * 所有角色
	 * 
	 * @return
	 */
	@RequestMapping(value = "/roleAll", method = RequestMethod.POST)
	@ResponseBody
	public Object roleAll() {
		return manageRoleService.getAllRoles();
	}

	/**
	 * 所有角色分页查询
	 * 
	 * @return
	 */
	@RequestMapping(value = "/rolePage", method = RequestMethod.POST)
	@ResponseBody
	public Object rolePage(
			@ApiParam(required = true, name = "pageStart", value = "分页起始记录数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			@ApiParam(required = true, name = "pageSize", value = "分页起始记录数") @RequestParam(value = "pageSize", required = true) Integer pageSize) {
		return manageRoleService.getRolePage(pageStart,pageSize);
	}

	/**
	 * 获取role及相关菜单权限
	 * 
	 * @return
	 */
	@RequestMapping(value = "/viewRole", method = RequestMethod.POST)
	@ResponseBody
	public Object viewRole(
			@ApiParam(required = true, name = "roleId", value = "角色id") @RequestParam(value = "roleId", required = true) Integer roleId) {
		return manageRoleService.getRoleInfo(roleId);
	}

	/**
	 * 更新角色权限
	 * 
	 * @return
	 */
	@RequestMapping(value = "/updateRole", method = RequestMethod.POST)
	@ResponseBody
	public Object updateRole(
			@ApiParam(required = true, name = "roleId", value = "角色id") @RequestParam(value = "roleId", required = true) Integer roleId,
			@ApiParam(required = true, name = "roleMenu", value = "角色关联菜单") @RequestParam(value = "roleMenu", required = true) String[] roleMenu) {

		try {
			if (roleId == null) {
				return HttpResult.build(false, "1000", "角色权限更新失败,非法参数！");
			}

			return manageRoleService.updateRoleMenu(roleId, roleMenu);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "角色权限更新失败！");
		}
	}

}
