package com.bigdata.shiro.session;

import org.apache.shiro.session.Session;

import java.io.Serializable;
import java.util.Collection;

/**
* shiro session manager interface
* @Title: ShiroSessionRepository.java
* @Description: shiro session manager interface 
* @author zzc   
* @date 2016年10月28日 下午5:08:07
*/
public interface ShiroSessionRepository {

    void saveSession(Session session);

    void deleteSession(Serializable sessionId);

    Session getSession(Serializable sessionId);

    Collection<Session> getAllSessions();
}
