package com.bigdata.common.base;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.bigdata.service.system.IMenuService;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.bigdata.common.util.CommonTools;
import com.bigdata.common.util.FormMap;
import com.bigdata.model.system.Menu;
import com.bigdata.model.system.User;
import com.bigdata.plugin.PageView;
/**
 * 
 * @author lixiao
 * 2015年12月2日
 * 说明：控制器公共方法
 */
public class BaseController {
	
	@Resource(name="menuService")
	private IMenuService menuService;
	
	public PageView pageView = null;
	public PageView getPageView(String pageNow,String pageSize) {
		if (CommonTools.isEmpty(pageNow)) {
			pageView = new PageView(1);
		} else {
			pageView = new PageView(Integer.parseInt(pageNow));
		}
		if (CommonTools.isEmpty(pageSize)) {
			pageSize = "10";
		} 
		pageView.setPageSize(Integer.parseInt(pageSize));
		return pageView;
	}
	
	public <T> T toFormMap(T t,String pageNow,String pageSize){
		@SuppressWarnings("unchecked")
		FormMap<String, Object> formMap = (FormMap<String, Object>) t;
		formMap.put("paging", getPageView(pageNow, pageSize));
		return t;
	}
	
	public List<Menu> findByRes(){
		// 资源ID
		String id = getPara("id");
		// 获取request
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();  
		// 通过工具类获取当前登录的bean
		User user = (User)CommonTools.findUserSession(request);
		// user id
		int userId = user.getId();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("parentId", id);
		map.put("userId", userId);
		List<Menu> rse = menuService.findRes(map);
		for (Menu menu : rse) {
			Object o =menu.getDescription();
			if(o!=null&&!CommonTools.isEmpty(o.toString())){
				menu.setDescription(CommonTools.stringtohtml(o.toString()));
			}
		}
		return rse;
	}
	
	/**
	 * 获取页面传递的某一个参数值,
	 */
	public String getPara(String key){
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();  
		return request.getParameter(key);
	}
	
	/**
	 * 获取页面传递的某一个数组值,
	 */
	public String[] getParaValues(String key){
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();  
		return request.getParameterValues(key);
	}
	
	/**
	 * 获取传递的所有参数,
	 * 反射实例化对象，再设置属性值
	 * 通过泛型回传对象.
	 */
	public <T> T getFormMap(Class<T> clazz){
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();  
		Enumeration<String> en = request.getParameterNames();
		T t = null;
		try {
			t = clazz.newInstance();
			@SuppressWarnings("unchecked")
			FormMap<String, Object> map = (FormMap<String, Object>) t;
			while (en.hasMoreElements()) {
				String nms = en.nextElement().toString();
				if(nms.endsWith("[]")){
					String[] as = request.getParameterValues(nms);
					if(as!=null&&as.length!=0&&as.toString()!="[]"){
						String mname = t.getClass().getSimpleName().toUpperCase();
						if(nms.toUpperCase().startsWith(mname)){
							nms=nms.substring(nms.toUpperCase().indexOf(mname)+1);
							map.put( nms,as);
						}
					}
				}else{
					String as = request.getParameter(nms);
					if(!CommonTools.isEmpty(as)){
						String mname = t.getClass().getSimpleName().toUpperCase();
						if(nms.toUpperCase().startsWith(mname)){
							nms=nms.substring(mname.length()+1);
							map.put( nms, as);
						}
						
					}
				}
			}
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return  t;
	}
}