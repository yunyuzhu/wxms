package com.bigdata.common.util;

public class HttpResult {

	
	private boolean success;
	
	private String code;
	
	private String message;
	
	private Object data;

	public static HttpResult build(boolean success,String code, String message,Object data) {
		HttpResult result=new HttpResult();
		result.setSuccess(success);
		result.setCode(code);
		result.setMessage(message);
		result.setData(data);
		return result;
	}
	
	public static HttpResult build(boolean success,String code, String message) {
		HttpResult result=new HttpResult();
		result.setSuccess(success);
		result.setCode(code);
		result.setMessage(message);
		return result;
	}
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	
	
}
