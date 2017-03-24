/**
 * @author cai
 * 功能：读取系统配置文件
 */
package com.bigdata.common.util;

import java.util.ResourceBundle;

public class ResourceManager {
	
	private static ResourceBundle rb;
	
	static{
		rb = ResourceBundle.getBundle("client");
	}
	
	public static String getNodeClient(){
		return rb.getString("node.client");
	}
	
	public static String getNodeData(){
		return rb.getString("node.data");
	}
	
	public static String getClusterName(){
		return rb.getString("cluster.name");
	}
	
	public static String getNodeName(){
		return rb.getString("node.name");
	}
	
	public static String getNodeIP(){
		return rb.getString("node.ip");
	}
	
	public static int getPoolSize(){
		return Integer.valueOf(rb.getString("poolSize"));
	}
	
	public static int getPoolMaxSize(){
		return Integer.valueOf(rb.getString("poolMaxSize"));
	}
	
	public static String getNodeIndex(){
		return rb.getString("node.index");
	}
	
	public static String getNodeIndex1(){
		return rb.getString("node.index1");
	}
	
	public static String getNodeIndex2(){
		return rb.getString("node.index2");
	}
	
	public static String getNodeIndex3(){
		return rb.getString("node.index3");
	}
	
	public static String getNodeIndex4(){
		return rb.getString("node.index4");
	}
	
	public static String getNodeIndex5(){
		return rb.getString("node.index5");
	}
	
	public static String getNodeIndex6(){
		return rb.getString("node.index6");
	}
	
	public static String getNodeIndexNotShow(){
		return rb.getString("node.indexNotShow");
	}
	
	public static String getNodeIndexDoctor(){
		return rb.getString("node.index_doctor");
	}
	
	public static String getNodeIndexArea(){
		return rb.getString("node.index_area");
	}
	
	public static String getNodeIndexMentor(){
		return rb.getString("node.index_mentor");
	}

	public static String getNodeIndexGongshi(){
		return rb.getString("node.gong_shi");
	}
	public static String getNodeIndexMentorMap(){
		return rb.getString("node.index_mentor_map");
	}
	
	public static int getNodePort(){
		return Integer.valueOf(rb.getString("node.port"));
	}
	
	public static String getNodeIP2(){
		return rb.getString("node.ip2");
	}
	public static int getNodePort2(){
		return Integer.valueOf(rb.getString("node.port2"));
	}
	
	public static String getNodeIP3(){
		return rb.getString("node.ip3");
	}
	public static int getNodePort3(){
		return Integer.valueOf(rb.getString("node.port3"));
	}

	/**
	 * 获取redis地址
	 * @return redis地址
	 */
	public static String getRedisIp(){
		return rb.getString("redis.ip");
	}
	
	/**
	 * 获取redis端口
	 * @return redis端口
	 */
	public static int getRedisPort(){
		return Integer.valueOf(rb.getString("redis.port"));
	}

	/**
	 * 获取redis库
	 * @return redis库
	 */
	public static int getRedisDataBase() {
		return Integer.valueOf(rb.getString("redis.database"));
	}

}
