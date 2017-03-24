/**   
 * @Title: CommonMethodUtil.java
 * @Description: 通用方法
 * @Copyright (C) 中电科软件信息服务有限公司
 * @author zzc   
 * @date 2015年12月3日 上午9:43:38 
 * @version 1.0  
 */
package com.bigdata.common.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**   
 * @Title: CommonMethodUtil
 * @Description: 通用方法
 * @author zzc   
 * @date 2015年12月3日 上午9:43:38   
 */
public class CommonMethodUtil {
	
	/**
	 * 解码接收的前台参数
	 * @param url 参数
	 * @return 解码后的参数
	 */
	public static String decodeURL(String url)
	{
		if (url != null && url.length() > 0)
		{
			try
			{
				url = new String(url.getBytes("ISO-8859-1"), "utf-8");
				return URLDecoder.decode(url,"utf-8");
			}
			catch (UnsupportedEncodingException ex)
			{
				return url;
			}
		}
		
		return url;
	}

}