package com.bigdata.service.system.impl;

import org.springframework.stereotype.Service;

import com.bigdata.common.base.BaseDao;
import com.bigdata.common.base.BaseServiceImpl;
import com.bigdata.dao.system.UserMapper;
import com.bigdata.model.system.User;
import com.bigdata.service.system.IUserService;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户Service实现类
 *
 * @author StarZou
 * @since 2014年7月5日 上午11:54:24
 */
@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<User, Long> implements IUserService {

    @Resource(name = "userMapper")
    private UserMapper userMapper;

    @Override
    public List<User> findByName(String userName) {
        List<User> userList = userMapper.findUserByName(userName);

        return userList;
    }

    @Override
    public BaseDao<User, Long> getDao() {
        return userMapper;
    }

}
