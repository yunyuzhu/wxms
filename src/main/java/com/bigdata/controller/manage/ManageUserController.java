package com.bigdata.controller.manage;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.common.util.HttpResult;
import com.bigdata.service.manage.IManageUserService;
import com.wordnik.swagger.annotations.ApiParam;

/**
 * 用户控制
 * 
 * @Title: ManageUserController.java
 * @Description: ManageUserController
 * @author wangfan
 * @date 2016年10月31日 下午4:42:47
 */
@Controller
@RequestMapping(value = "/manageUser")
public class ManageUserController {

	@Resource
	private IManageUserService manageUserService;

	/**
	 * 用户分页列表
	 * 
	 * @param userName
	 * @param roleId
	 * @param pageStart
	 * @param pageSize
	 * @return
	 */
	@RequestMapping(value = "/userPage", method = RequestMethod.POST)
	@ResponseBody
	public Object userPage(
			@ApiParam(required = false, name = "userName", value = "用户名查询参数") @RequestParam(value = "userName", required = false) String userName,
			@ApiParam(required = false, name = "roleId", value = "角色id") @RequestParam(value = "roleId", required = false) Integer roleId,
			@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize) {

		userName = userName.replace("'", "\\'");

		return manageUserService.getUserPage(userName, roleId, pageStart, pageSize);
	}

	/**
	 * 新增用户
	 * 
	 * @param userName
	 * @param accountName
	 * @param password
	 * @param roleId
	 * @param depaId
	 * @param useFlag
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	@ResponseBody
	public Object saveUser(
			@ApiParam(required = true, name = "userName", value = "用户名") @RequestParam(value = "userName", required = true) String userName,
			@ApiParam(required = true, name = "accountName", value = "用户昵称") @RequestParam(value = "accountName", required = true) String accountName,
			@ApiParam(required = true, name = "password", value = "密码明文") @RequestParam(value = "password", required = true) String password,
			@ApiParam(required = true, name = "roleId", value = "角色主键id") @RequestParam(value = "roleId", required = true) Integer roleId,
			@ApiParam(required = true, name = "depaId", value = "部门id") @RequestParam(value = "depaId", required = false) Integer depaId,
			@ApiParam(required = true, name = "useFlag", value = "启用状态") @RequestParam(value = "useFlag", required = true) String useFlag,
			@ApiParam(required = false, name = "remark", value = "部门id") @RequestParam(value = "remark", required = false) String remark) {
		try {
			if (StringUtils.isBlank(userName) || StringUtils.isBlank(accountName) || StringUtils.isBlank(password)
					|| roleId == null || StringUtils.isBlank(useFlag)) {
				return HttpResult.build(false, "1000", "非法参数，保存失败！");
			}

			return manageUserService.saveUserAndRole(userName, accountName, password, roleId, depaId, useFlag, remark);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "保存失败！");
		}

	}

	/**
	 * 编辑用户
	 * 
	 * @param userId
	 * @param userName
	 * @param accountName
	 * @param roleId
	 * @param depaId
	 * @param useFlag
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	@ResponseBody
	public Object updateUser(
			@ApiParam(required = true, name = "userId", value = "用户id") @RequestParam(value = "userId", required = true) Integer userId,
			@ApiParam(required = true, name = "accountName", value = "用户昵称") @RequestParam(value = "accountName", required = true) String accountName,
			@ApiParam(required = true, name = "roleId", value = "角色主键id") @RequestParam(value = "roleId", required = true) Integer roleId,
			@ApiParam(required = true, name = "depaId", value = "部门id") @RequestParam(value = "depaId", required = false) Integer depaId,
			@ApiParam(required = true, name = "useFlag", value = "启用状态") @RequestParam(value = "useFlag", required = true) String useFlag,
			@ApiParam(required = false, name = "remark", value = "部门id") @RequestParam(value = "remark", required = false) String remark) {
		try {
			if (StringUtils.isBlank(accountName) || roleId == null || userId == null
					|| StringUtils.isBlank(useFlag)) {
				return HttpResult.build(false, "1000", "非法参数，保存失败！");
			}

			return manageUserService.updateUserAndRole(userId,accountName, roleId, depaId, useFlag, remark);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "保存失败！");
		}
	}

	/**
	 * 查询用户
	 * 
	 * @param userId
	 * @return
	 */
	@RequestMapping(value = "/viewUser", method = RequestMethod.POST)
	@ResponseBody
	public Object viewUser(
			@ApiParam(required = true, name = "userId", value = "用户id") @RequestParam(value = "userId", required = true) Integer userId) {
		try {
			if (userId == null) {
				return HttpResult.build(false, "1000", "非法参数，查询失败！");
			}
			return manageUserService.getUserAndRole(userId);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "查询失败！");
		}
	}
	
	/**
	 * 删除用户
	 * 
	 * @param userId
	 * @return
	 */
	@RequestMapping(value = "/delUser", method = RequestMethod.POST)
	@ResponseBody
	public Object delUser(
			@ApiParam(required = true, name = "userIds", value = "用户id") @RequestParam(value = "userIds", required = true) String userIds) {
		try {
			if (userIds == null || "".equals(userIds)) {
				return HttpResult.build(false, "1000", "非法参数，删除失败！");
			}
			userIds="("+userIds+")";
			return manageUserService.delUserAndRole(userIds);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "删除失败！");
		}
	}

}
