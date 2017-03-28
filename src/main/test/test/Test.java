package test;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Test {

	public static void main(String[] args) {
		
		String httpUrl = "http://apis.baidu.com/021manyou_bao/manyoubao/manyousdk";
		String httpArg = "mobile=13408056179&msg=%E6%84%9F%E8%B0%A2%E4%BD%93%E9%AA%8C%EF%BC%8C%E6%82%A8%E5%BD%93%E5%89%8D%E7%9A%84%E9%AA%8C%E8%AF%81%E7%A0%81%EF%BC%9A1234";
		String jsonResult = request(httpUrl, httpArg);
		System.out.println(jsonResult);

	}
	
	/**
	 * @param urlAll
	 *            :请求接口
	 * @param httpArg
	 *            :参数
	 * @return 返回结果
	 */
	public static String request(String httpUrl, String httpArg) {
	    BufferedReader reader = null;
	    String result = null;
	    StringBuffer sbf = new StringBuffer();
	    httpUrl = httpUrl + "?" + httpArg;

	    try {
	        URL url = new URL(httpUrl);
	        HttpURLConnection connection = (HttpURLConnection) url
	                .openConnection();
	        connection.setRequestMethod("GET");
	        // 填入apikey到HTTP header
	        connection.setRequestProperty("apikey",  "e772ca3fed00b1b4e11e44adfe76b251");
	        connection.connect();
	        InputStream is = connection.getInputStream();
	        reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        String strRead = null;
	        while ((strRead = reader.readLine()) != null) {
	            sbf.append(strRead);
	            sbf.append("\r\n");
	        }
	        reader.close();
	        result = sbf.toString();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return result;
	}

}
