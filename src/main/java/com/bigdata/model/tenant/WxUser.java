package com.bigdata.model.tenant;

import java.io.Serializable;
import java.sql.Timestamp;

/**   
* @Title: TenantManageServiceImpl.java
* @Description: 微信用户信息
* @author zzc   
* @date 2017年3月29日 上午10:43:00   
*/
@SuppressWarnings("serial")
public class WxUser implements Serializable {
	
	/**
	 * 主键
	 */
	private String id;
	
	/**
	 * 账户
	 */
	private String accountWx;
	
	/**
	 * 姓名
	 */
	private String name;
	
	/**
	 * 性别
	 */
	private String sex;
	
	/**
	 * 年龄
	 */
	private String age;
	
	/**
	 * 电话
	 */
	private String phone;
	
	/**
	 * 金币余额
	 */
	private String gold;
	
	/**
	 * 启用标识
	 */
	private String useFlag;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 创建时间
	 */
	private Timestamp createTime;
	
	/**
	 * 修改时间
	 */
	private Timestamp updateTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAccountWx() {
		return accountWx;
	}

	public void setAccountWx(String accountWx) {
		this.accountWx = accountWx;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGold() {
		return gold;
	}

	public void setGold(String gold) {
		this.gold = gold;
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

	public Timestamp getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}

	public Timestamp getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}

}
