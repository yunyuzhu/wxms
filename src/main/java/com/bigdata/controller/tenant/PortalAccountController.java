package com.bigdata.controller.tenant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.bigdata.common.util.CommonTools;
import com.bigdata.common.util.FileUpload;
import com.bigdata.dao.tenant.ShopManageMapper;
import com.bigdata.model.system.User;
import com.bigdata.model.tenant.GoldUserBean;
import com.bigdata.model.tenant.WxUser;
import com.bigdata.service.tenant.IPortalAccountService;
import com.wordnik.swagger.annotations.ApiParam;

/**   
* @Title: PortalAccountController.java
* @Description: 门户账户信息
* @author zzc   
* @date 2017年3月30日 上午10:53:08   
*/
@Controller
@RequestMapping(value="/portalAccount")
public class PortalAccountController {
	
	@Resource
	private IPortalAccountService portalAccountServiceImpl;
	
	@Resource
	private ShopManageMapper shopManageMapper;

	/**
	 * 获取我的账户信息
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/myAccount", method = RequestMethod.GET)
	public Object getMyAccountInfo(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户信息
		WxUser wxUser = portalAccountServiceImpl.getMyAccountInfo(user.getId().toString());
    	return wxUser;
	}
	
	/**
	 * 获取我的账户金币余额
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/gold", method = RequestMethod.GET)
	public Object getMyAccountGold(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户金币余额
		String gold = portalAccountServiceImpl.getMyAccountGold(user.getId().toString());
    	return gold;
	}
	
	/**
	 * 获取我的账户金币流水
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/goldStream", method = RequestMethod.GET)
	public Object getMyAccountGoldStream(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户金币流水
		List<GoldUserBean> list = portalAccountServiceImpl.getMyAccountGoldStream(user.getId().toString());

		//分页
		ArrayList<GoldUserBean> listPage = new ArrayList<GoldUserBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoldUserBean gub = list.get(i);
				gub.setOrderId(i+1);
				listPage.add(gub);
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("total", list.size());
    	map.put("rows", listPage);
    	return map;
	}
	
	/**
	 * 获取我的账户消费流水
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/consumeStream", method = RequestMethod.GET)
	public Object getMyAccountConsumeStream(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户消费流水
		List<GoldUserBean> list = portalAccountServiceImpl.getMyAccountConsumeStream(user.getId().toString());

		//分页
		ArrayList<GoldUserBean> listPage = new ArrayList<GoldUserBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoldUserBean gub = list.get(i);
				gub.setOrderId(i+1);
				listPage.add(gub);
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("total", list.size());
    	map.put("rows", listPage);
    	return map;
	}
	
	/**
	 * 获取我的账户金币兑换申请流水
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/changeStream", method = RequestMethod.GET)
	public Object getMyAccountChangeStream(@ApiParam(required = true, name = "pageStart", value = "分页查询起始条数") @RequestParam(value = "pageStart", required = true) Integer pageStart,
			  @ApiParam(required = true, name = "pageSize", value = "分页查询每页显示条数") @RequestParam(value = "pageSize", required = true) Integer pageSize,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//获取我的账户金币兑换申请流水
		List<GoldUserBean> list = portalAccountServiceImpl.getMyAccountChangeStream(user.getId().toString());

		//分页
		ArrayList<GoldUserBean> listPage = new ArrayList<GoldUserBean>();
		for(int i=pageStart;i<pageStart + pageSize;i++){
			if(i<list.size()){
				GoldUserBean gub = list.get(i);
				gub.setOrderId(i+1);
				listPage.add(gub);
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("total", list.size());
    	map.put("rows", listPage);
    	return map;
	}
	
	/**
	 * 扫描消费金额
	 * @data 2016年3月31日 下午2:52:47
	 * @param request
	 * @param response
	 * @throws Exception 
	 */
	@ResponseBody
	@RequestMapping(value="/saveGold", method = RequestMethod.GET)
	public Object saveGoldDetail(@ApiParam(required = false, name = "shopId", value = "商户Id") @RequestParam(value = "shopId", required = false) String shopId,
			  @ApiParam(required = false, name = "consumeMoney", value = "消费金额") @RequestParam(value = "consumeMoney", required = false) String consumeMoney,
			  HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//获取登录的用户信息
		User user = (User)CommonTools.findUserSession(request);
		
		//扫描消费金额
		portalAccountServiceImpl.saveGoldDetail(user.getId().toString(), shopId, consumeMoney);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "消费成功");
    	return map;
	}
	
	/**
	 * 用户注册
	 * @param userName
	 * @param password
	 * @param name
	 * @param sex
	 * @param age
	 * @param phone
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	@ResponseBody
	public Object saveUser(
			@ApiParam(required = true, name = "userName", value = "用户名") @RequestParam(value = "userName", required = true) String userName,
			@ApiParam(required = true, name = "password", value = "密码明文") @RequestParam(value = "password", required = true) String password,
			@ApiParam(required = false, name = "name", value = "姓名") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "sex", value = "性别") @RequestParam(value = "sex", required = false) String sex,
			@ApiParam(required = false, name = "age", value = "年龄") @RequestParam(value = "age", required = false) String age,
			@ApiParam(required = false, name = "phone", value = "电话") @RequestParam(value = "phone", required = false) String phone,
			@ApiParam(required = false, name = "email", value = "邮箱") @RequestParam(value = "email", required = false) String email,
			@ApiParam(required = false, name = "wx", value = "微信号") @RequestParam(value = "wx", required = false) String wx,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		//账号重名检查
        int count=shopManageMapper.getUserByUserName(userName);
        if(count>0){
        	map.put("msg", "用户名已存在");
        	return map;
        }
        
        SecureRandomNumberGenerator secureRandomNumberGenerator=new SecureRandomNumberGenerator(); 
        String salt= secureRandomNumberGenerator.nextBytes().toHex(); 
        //组合username,两次迭代，对密码进行加密 
        String password_cipherText= new Md5Hash(password,userName+salt,2).toHex();
        
		WxUser user=new WxUser(); 
        user.setUserName(userName); //用户名
        user.setPassword(password_cipherText); //加密后密码
        user.setCredentialsSalt(salt);
        user.setName(name);
		user.setSex(sex);
		user.setAge(age);
		user.setPhone(phone);
		user.setEmail(email);
		user.setWx(wx);
		user.setRemark(remark);
		
		//用户注册
		portalAccountServiceImpl.saveUser(user);
		
    	map.put("msg", "注册成功");
    	return map;
	}
	
	/**
	 * 修改用户信息
	 * @param name
	 * @param sex
	 * @param age
	 * @param phone
	 * @param remark
	 * @return
	 */
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	@ResponseBody
	public Object updateUser(
			@ApiParam(required = false, name = "name", value = "姓名") @RequestParam(value = "name", required = false) String name,
			@ApiParam(required = false, name = "sex", value = "性别") @RequestParam(value = "sex", required = false) String sex,
			@ApiParam(required = false, name = "age", value = "年龄") @RequestParam(value = "age", required = false) String age,
			@ApiParam(required = false, name = "phone", value = "电话") @RequestParam(value = "phone", required = false) String phone,
			@ApiParam(required = false, name = "email", value = "邮箱") @RequestParam(value = "email", required = false) String email,
			@ApiParam(required = false, name = "wx", value = "微信号") @RequestParam(value = "wx", required = false) String wx,
			@ApiParam(required = false, name = "remark", value = "备注") @RequestParam(value = "remark", required = false) String remark,
			HttpServletRequest request, HttpServletResponse response) {
		
		//获取登录的用户信息
		User userLogin = (User)CommonTools.findUserSession(request);
		
		WxUser user=new WxUser(); 
		user.setId(userLogin.getId().toString());
        user.setName(name);
		user.setSex(sex);
		user.setAge(age);
		user.setPhone(phone);
		user.setEmail(email);
		user.setWx(wx);
		user.setRemark(remark);
		
		//修改用户信息
		portalAccountServiceImpl.updateUser(user);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "修改成功");
    	return map;
	}
	
	/**
	 * 修改用户头像
	 * @param photoInfo
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/updatePhoto", method = RequestMethod.POST)
	@ResponseBody
	public Object updateUserPhoto(@ApiParam(required = false, name = "photoInfo", value = "头像信息") @RequestParam(value = "photoInfo", required = false) MultipartFile photoInfo,
			HttpServletRequest request, HttpServletResponse response) {
		
		//获取登录的用户信息
		User userLogin = (User)CommonTools.findUserSession(request);
		
		//图片路径
        String photoUrl = FileUpload.uploadFile(photoInfo, getImagePath());
		
		//修改用户头像
		portalAccountServiceImpl.updateUserPhoto(userLogin.getId().toString(), photoUrl);
		
		Map<String, Object> map = new HashMap<String, Object>();
    	map.put("msg", "修改头像成功");
    	return map;
	}
	
	/**
	 * 获取验证码
	 * @param phone 手机号
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/verifyCode", method = RequestMethod.GET)
	@ResponseBody
	public Object saveVerifyCode(@ApiParam(required = false, name = "phone", value = "手机号") @RequestParam(value = "phone", required = false) String phone,
			HttpServletRequest request, HttpServletResponse response) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		//验证该手机号是否已注册
		String id = portalAccountServiceImpl.getIdByPhone(phone);
		if(id == null){
			map.put("msg", "该手机号尚未注册，请确认是否输入正确");
	    	return map;
		}
		
		StringBuffer randomCode=new StringBuffer();
        Random random=new Random();
        //随机产生4位数字的验证码。
        for (int i=0;i<4;i++)
        {
            //得到随机产生的验证码数字。
            String strRand=String.valueOf(random.nextInt(10));
            
            //将产生的四个随机数组合在一起。
            randomCode.append(strRand);
        }
        
        //发送验证码到手机
        
        //保存验证码信息
        portalAccountServiceImpl.saveVerifyCode(id, randomCode);
		
    	map.put("msg", "获取验证码成功");
    	map.put("success", "true");
    	return map;
	}
	
	/**
	 * 修改密码
	 * @param phone
	 * @param verifyCode
	 * @param password
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/modifyPassword", method = RequestMethod.GET)
	@ResponseBody
	public Object modifyPassword(@ApiParam(required = false, name = "phone", value = "手机号") @RequestParam(value = "phone", required = false) String phone,
								 @ApiParam(required = false, name = "verifyCode", value = "验证码") @RequestParam(value = "verifyCode", required = false) String verifyCode,
								 @ApiParam(required = false, name = "password", value = "新密码") @RequestParam(value = "password", required = false) String password,
			HttpServletRequest request, HttpServletResponse response) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		//获取用户id
		String id = portalAccountServiceImpl.getIdByPhone(phone);
		if(id == null){
			map.put("msg", "该手机号尚未注册，请确认是否输入正确");
	    	return map;
		}
		
		//获取验证信息
		WxUser wxUser = portalAccountServiceImpl.getVerifyInfo(id);
		
		//验证验证码是否正确
		if(!wxUser.getVerifyCode().equals(verifyCode)){
			map.put("msg", "您输入的验证码不正确，请重新输入");
	    	return map;
		}
		
		//验证验证码是否超时
		if(Integer.parseInt(wxUser.getVerifyTime()) > 900000){
			map.put("msg", "您的验证码已超时，请重新获取");
	    	return map;
		}
        
        //修改密码
		SecureRandomNumberGenerator secureRandomNumberGenerator=new SecureRandomNumberGenerator(); 
        String salt= secureRandomNumberGenerator.nextBytes().toHex(); 
        //组合username,两次迭代，对密码进行加密 
        String password_cipherText= new Md5Hash(password,phone+salt,2).toHex();
        
		WxUser user=new WxUser(); 
		user.setId(id);
        user.setPassword(password_cipherText); //加密后密码
        user.setCredentialsSalt(salt);
        portalAccountServiceImpl.modifyPassword(user);
		
    	map.put("msg", "修改密码成功");
    	map.put("success", "true");
    	return map;
	}
	
	/**
	 * 生成图片名称
	 * @return
	 */
    private String getImagePath() {
        String path = UUID.randomUUID().toString();
        return path;
    }
	
}
