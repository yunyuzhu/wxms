package com.bigdata.controller.system;

import com.bigdata.model.system.User;
import com.bigdata.service.system.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
* 用户控制 
* @Title: UserController.java
* @Description: UserController 
* @author zzc   
* @date 2016年9月21日 下午4:42:47
 */
@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Resource
    private IUserService userService;

    /**
     * 用户登录
     * @param user
     * @param result
     * @param model
     * @param request
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(User user, BindingResult result, Model model, HttpServletRequest request) {
        
        return "redirect:/";
    }

    /**
     * 用户注销
     * @param session
     * @return
     */
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        session.removeAttribute("userInfo");
        //登出操作
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "login";
    }

}
