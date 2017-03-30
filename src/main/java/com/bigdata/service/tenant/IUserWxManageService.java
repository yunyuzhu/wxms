package com.bigdata.service.tenant;

import com.bigdata.common.util.HttpResult;

/**   
* @Title: IUserWxManageService.java
* @Description: 用户管理接口 
* @author zzc   
* @date 2017年3月30日 下午2:14:26   
*/
public interface IUserWxManageService {

	public Object getUserPage(String userName, Integer pageStart, Integer pageSize);

	public HttpResult saveUser(String userName, String password, String name, String sex, String age, String phone, String remark);

	public HttpResult updateUser(String userId, String name, String sex, String age, String phone, String remark);

	public Object delUserAndRole(String userIds);

	public Object getUserAndRole(Integer userId);
	
}
