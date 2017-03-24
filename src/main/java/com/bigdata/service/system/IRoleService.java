package com.bigdata.service.system;

import com.bigdata.common.base.BaseService;
import com.bigdata.model.system.Role;
import com.bigdata.model.system.RoleFormMap;

import java.util.List;

public interface IRoleService extends BaseService<Role, Long> {

    public List<Role> seletUserRole(String userId);

    List<Role> findByPage(RoleFormMap roleFormMap);

    void deleteByAttribute(String id, String id1, Class<RoleFormMap> roleFormMapClass);

    void addEntity(RoleFormMap roleFormMap);

    Object findbyFrist(String id, String id1, Class<RoleFormMap> roleFormMapClass);

    void editEntity(RoleFormMap roleFormMap);
}
