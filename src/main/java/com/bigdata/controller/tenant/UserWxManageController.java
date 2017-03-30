package com.bigdata.controller.tenant;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bigdata.common.util.HttpResult;
import com.bigdata.service.tenant.IUserWxManageService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: UserWxManageController.java
* @Description: 用户管理 
* @author zzc   
* @date 2017年3月30日 下午2:13:48   
*/
@Controller
@RequestMapping(value="/userWx")
public class UserWxManageController {
	
	@Resource
	private IUserWxManageService userWxManageServiceImpl;

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
			@ApiParam(required = false, name = "userName", value = "用户名查询参数") @RequestParam(value = "userName", required = false) String userName,
			@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			@ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize) {

		if(null != userName){
			userName = userName.replace("'", "\\'");
		}

		return userWxManageServiceImpl.getUserPage(userName, pageStart, pageSize);
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
			@ApiParam(required = false, name = "name", value = "姓名") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "sex", value = "性别") @RequestParam(value = "sex", required = false) String sex,
			@ApiParam(required = false, name = "age", value = "年龄") @RequestParam(value = "age", required = false) String age,
			@ApiParam(required = false, name = "phone", value = "电话") @RequestParam(value = "phone", required = false) String phone,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		try {
			return userWxManageServiceImpl.saveUser(userName, password, name, sex, age, phone, remark);
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
			@ApiParam(required = true, name = "userId", value = "用户id") @RequestParam(value = "userId", required = true) String userId,
			@ApiParam(required = false, name = "name", value = "姓名") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "sex", value = "性别") @RequestParam(value = "sex", required = false) String sex,
			@ApiParam(required = false, name = "age", value = "年龄") @RequestParam(value = "age", required = false) String age,
			@ApiParam(required = false, name = "phone", value = "电话") @RequestParam(value = "phone", required = false) String phone,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		try {
			return userWxManageServiceImpl.updateUser(userId, name, sex, age, phone, remark);
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
			return userWxManageServiceImpl.getUserAndRole(userId);
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
			return userWxManageServiceImpl.delUserAndRole(userIds);
		} catch (Exception e) {
			return HttpResult.build(false, "1000", "删除失败！");
		}
	}

}
