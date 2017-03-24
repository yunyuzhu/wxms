package com.bigdata.model.system;

import java.util.ArrayList;
import java.util.List;


public class Menu {
	
	private Integer id;
	private String name;
	private Integer parentId;
	private String parentName;
	private String resKey;
	private String type;
	private String resUrl;
	private Integer level;
	private String icon;
	private Integer ishide;
	private String description;
	private List<Menu> children = new ArrayList<Menu>();
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public String getResKey() {
		return resKey;
	}
	public void setResKey(String resKey) {
		this.resKey = resKey;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getResUrl() {
		return resUrl;
	}
	public void setResUrl(String resUrl) {
		this.resUrl = resUrl;
	}
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public Integer getIshide() {
		return ishide;
	}
	public void setIshide(Integer ishide) {
		this.ishide = ishide;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Menu> getChildren() {
		return children;
	}
	public void setChildren(List<Menu> children) {
		this.children = children;
	}
	
	@Override
	public String toString() {
		return "Menu [id=" + id + ", name=" + name + ", parentId=" + parentId
				+ ", parentName=" + parentName + ", resKey=" + resKey
				+ ", type=" + type + ", resUrl=" + resUrl + ", level=" + level
				+ ", icon=" + icon + ", ishide=" + ishide + ", description="
				+ description + ", children=" + children + "]";
	}
	
	
	
}
