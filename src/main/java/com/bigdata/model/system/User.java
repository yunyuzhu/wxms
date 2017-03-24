package com.bigdata.model.system;

import java.util.Date;

public class User {
	
	/**
	 * 主键
	 */
	private Integer id;
	
	/**
	 * 登录账户
	 */
	private String userName;
	
	/**
	 * 账号名称
	 */
	private String accountName;
	
	/**
	 * 密码
	 */
	private String password;
	
	/**
	 * 验证盐
	 */
	private String credentialsSalt;
	
	/**
	 * 所属科室ID
	 */
	private Integer depaId;
	
	/**
	 * 所属角色ID
	 */
	private Integer roleId;
	
	/**
	 * 锁定标识
	 */
	private String locked;
	
	/**
	 * 使用标识
	 */
	private String useFlag;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 创建时间
	 */
	private Date createTime;
	
	/**
	 * 修改时间
	 */
	private Date updateTime;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCredentialsSalt() {
		return credentialsSalt;
	}

	public void setCredentialsSalt(String credentialsSalt) {
		this.credentialsSalt = credentialsSalt;
	}

	public Integer getDepaId() {
		return depaId;
	}

	public void setDepaId(Integer depaId) {
		this.depaId = depaId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getLocked() {
		return locked;
	}

	public void setLocked(String locked) {
		this.locked = locked;
	}

	public String getUseFlag() {
		return useFlag;
	}

	public void setUseFlag(String useFlag) {
		this.useFlag = useFlag;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	
}