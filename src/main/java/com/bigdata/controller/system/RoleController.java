package com.bigdata.controller.system;

import com.bigdata.annotation.SystemLog;
import com.bigdata.common.base.BaseController;
import com.bigdata.common.util.CommonTools;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.RoleFormMap;
import com.bigdata.plugin.PageView;
import com.bigdata.service.system.IRoleService;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
* 
* @Title: RoleController.java
* @Description: 角色控制 
* @author zzc   
* @date 2016年9月21日 下午4:41:25
 */
@Controller
@RequestMapping("/role/")
public class RoleController extends BaseController {
	@Resource(name = "roleService")
	private IRoleService roleService;

	@RequestMapping("list")
	public String listUI(Model model) throws Exception {
		model.addAttribute("res", findByRes());
		return "/role/role_list";
	}

	@ResponseBody
	@RequestMapping("findByPage")
	public PageView findByPage(String pageNow, String pageSize) throws Exception {
		RoleFormMap roleFormMap = getFormMap(RoleFormMap.class);
		roleFormMap=toFormMap(roleFormMap, pageNow, pageSize);
		List<Role> roleList = roleService.findByPage(roleFormMap);
		pageView.setRecords(roleList);
        pageView.setRowCount(roleList.size());
		return pageView;
	}

	@RequestMapping("addUI")
	public String addUI(Model model) throws Exception {
		return "/role/role_add";
	}

	@ResponseBody
	@RequestMapping("addEntity")
//	@Transactionalnalional(readOnly=false)//需要事务操作必须加入此注解
	@Transactional(readOnly=false)//需要事务操作必须加入此注解
	@SystemLog(module="系统管理",methods="组管理-新增组")//凡需要处理业务逻辑的.都需要记录操作日志
	public String addEntity() throws Exception {
		RoleFormMap roleFormMap = getFormMap(RoleFormMap.class);
		roleService.addEntity(roleFormMap);
		return "success";
	}

	@ResponseBody
	@RequestMapping("deleteEntity")
	@Transactional(readOnly=false)//需要事务操作必须加入此注解
	@SystemLog(module="系统管理",methods="组管理-删除组")//凡需要处理业务逻辑的.都需要记录操作日志
	public String deleteEntity() throws Exception {
		String[] ids = getParaValues("ids");
		for (String id : ids) {
			roleService.deleteByAttribute("id", id, RoleFormMap.class);
		}
		return "success";
	}

	@RequestMapping("editUI")
	public String editUI(Model model) throws Exception {
		String id = getPara("id");
		if(CommonTools.isNotEmpty(id)){
			model.addAttribute("role", roleService.findbyFrist("id", id, RoleFormMap.class));
		}
		return "/system/role/role_edit";
	}

	@ResponseBody
	@RequestMapping("editEntity")
	@Transactional(readOnly=false)//需要事务操作必须加入此注解
	@SystemLog(module="系统管理",methods="组管理-修改组")//凡需要处理业务逻辑的.都需要记录操作日志
	public String editEntity() throws Exception {
		RoleFormMap roleFormMap = getFormMap(RoleFormMap.class);
		roleService.editEntity(roleFormMap);
		return "success";
	}

}