package com.bigdata.common.util;

import org.apache.log4j.Logger;

public class LogUtils {

	public static Logger getLogger(){
		StackTraceElement stack[] = Thread.currentThread().getStackTrace();
		System.err.println("+++++++++++++++++++++++");
		for(StackTraceElement s:stack){
			System.err.println(s);
		}
		System.err.println("+++++++++++++++++++++++");
		return Logger.getLogger(stack[3].toString());
	}
	
	public static void erro(Object message){
		getLogger().error(message);
	}
	
	public static void info(Object message){
		getLogger().info(message);
	}
	
	public static void main(String[] args) {
		info("ss");
	}
	
}
