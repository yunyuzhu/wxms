package com.bigdata.controller.tenant;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.common.util.HttpResult;
import com.bigdata.service.tenant.IShopManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: ShopManageController.java
* @Description: 商户信息
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/shop")
public class ShopManageController {
	
	@Resource
	private IShopManageService shopManageServiceImpl;

	/**
	 * 用户分页列表
	 * 
	 * @param userName
	 * @param roleId
	 * @param pageStart
	 * @param pageSize
	 * @return
	 */
	@RequestMapping(value = "/userPage", method = RequestMethod.GET)
	@ResponseBody
	public Object userPage(
			@ApiParam(required = false, name = "tenantName", value = "用户名查询参数") @RequestParam(value = "tenantName", required = false) String tenantName,
			@ApiParam(required = false, name = "trade", value = "行业") @RequestParam(value = "trade", required = false) String trade,
			@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize) {

		if(null != tenantName){
			tenantName = tenantName.replace("'", "\\'");
		}

		return shopManageServiceImpl.getUserPage(tenantName, trade, pageStart, pageSize);
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
	@RequestMapping(value = "/saveUser", method = RequestMethod.GET)
	@ResponseBody
	public Object saveUser(
			@ApiParam(required = true, name = "userName", value = "用户名") @RequestParam(value = "userName", required = true) String userName,
			@ApiParam(required = true, name = "password", value = "密码明文") @RequestParam(value = "password", required = true) String password,
			@ApiParam(required = true, name = "useFlag", value = "启用状态") @RequestParam(value = "useFlag", required = true) String useFlag,
			@ApiParam(required = false, name = "tenantName", value = "商户名称") @RequestParam(value = "tenantName", required = false) String tenantName,
			@ApiParam(required = false, name = "trade", value = "行业") @RequestParam(value = "trade", required = false) String trade,
			@ApiParam(required = false, name = "address", value = "地址") @RequestParam(value = "address", required = false) String address,
			@ApiParam(required = false, name = "telephone", value = "商户电话") @RequestParam(value = "telephone", required = false) String telephone,
			@ApiParam(required = false, name = "linkName", value = "联系人姓名") @RequestParam(value = "linkName", required = false) String linkName,
			@ApiParam(required = false, name = "linkPhone", value = "联系人电话") @RequestParam(value = "linkPhone", required = false) String linkPhone,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		//商户角色固定
		Integer roleId = 2;
		
		try {
			return shopManageServiceImpl.saveUserAndRole(userName, password, roleId, useFlag, remark, tenantName, trade, address, telephone, linkName, linkPhone);
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
	@RequestMapping(value = "/updateUser", method = RequestMethod.GET)
	@ResponseBody
	public Object updateUser(
			@ApiParam(required = true, name = "userId", value = "用户id") @RequestParam(value = "userId", required = true) Integer userId,
			@ApiParam(required = true, name = "useFlag", value = "启用状态") @RequestParam(value = "useFlag", required = true) String useFlag,
			@ApiParam(required = false, name = "tenantName", value = "商户名称") @RequestParam(value = "tenantName", required = false) String tenantName,
			@ApiParam(required = false, name = "trade", value = "行业") @RequestParam(value = "trade", required = false) String trade,
			@ApiParam(required = false, name = "address", value = "地址") @RequestParam(value = "address", required = false) String address,
			@ApiParam(required = false, name = "telephone", value = "商户电话") @RequestParam(value = "telephone", required = false) String telephone,
			@ApiParam(required = false, name = "linkName", value = "联系人姓名") @RequestParam(value = "linkName", required = false) String linkName,
			@ApiParam(required = false, name = "linkPhone", value = "联系人电话") @RequestParam(value = "linkPhone", required = false) String linkPhone,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		//商户角色固定
		Integer roleId = 2;
		
		try {
			return shopManageServiceImpl.updateUserAndRole(userId, roleId, useFlag, remark, tenantName, trade, address, telephone, linkName, linkPhone);
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
	@RequestMapping(value = "/viewUser", method = RequestMethod.GET)
	@ResponseBody
	public Object viewUser(
			@ApiParam(required = true, name = "userId", value = "用户id") @RequestParam(value = "userId", required = true) Integer userId) {
		try {
			if (userId == null) {
				return HttpResult.build(false, "1000", "非法参数，查询失败！");
			}
			return shopManageServiceImpl.getUserAndRole(userId);
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
	@RequestMapping(value = "/delUser", method = RequestMethod.GET)
	@ResponseBody
	public Object delUser(
			@ApiParam(required = true, name = "userIds", value = "用户id") @RequestParam(value = "userIds", required = true) String userIds) {
		try {
			if (userIds == null || "".equals(userIds)) {
				return HttpResult.build(false, "1000", "非法参数，删除失败！");
			}
			userIds="("+userIds+")";
			return shopManageServiceImpl.delUserAndRole(userIds);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "删除失败！");
		}
	}

}
