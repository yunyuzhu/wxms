package com.bigdata.controller.tenant;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bigdata.common.util.Uploader;

/**   
* @Title: uploadZXImage.java
* @Description: uploadZXImage 
* @author zzc   
* @date 2017年4月6日 上午10:52:38   
*/
@Controller
public class uploadZXImage {
	
	@RequestMapping(value = "/uploadimage", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Map<String,Object> save(HttpServletRequest req){
        Map<String,Object> rs = new HashMap<String, Object>();
        MultipartHttpServletRequest mReq  =  null;
        MultipartFile file = null;
        InputStream is = null ;
        String fileName = "";
        // 原始文件名   UEDITOR创建页面元素时的alt和title属性
        String originalFileName = "";
        String filePath = "";
        try {
            mReq = (MultipartHttpServletRequest)req;
            // 从config.json中取得上传文件的ID
            file = mReq.getFile("upfile");
            // 取得文件的原始文件名称
            fileName = file.getOriginalFilename();
            originalFileName = fileName;
            /*你的处理图片的代码*/
            rs.put("state", "SUCCESS");// UEDITOR的规则:不为SUCCESS则显示state的内容
            //rs.put("url",icon);         //能访问到你现在图片的路径
            rs.put("title", originalFileName);
            rs.put("original", originalFileName);                       

        } catch (Exception e) {
            //log.error(e.getMessage(),e);
            rs.put("state", "文件上传失败!"); //在此处写上错误提示信息，这样当错误的时候就会显示此信息
            rs.put("url","");
            rs.put("title", "");
            rs.put("original", "");
        }
        return rs;
    }
	
	@RequestMapping(value = "/imageUp", method = RequestMethod.POST)
    public void save11(HttpServletRequest request, HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
	    Uploader up = new Uploader(request);
	    up.setSavePath("upload");
	    String[] fileType = {".gif" , ".png" , ".jpg" , ".jpeg" , ".bmp"};
	    up.setAllowFiles(fileType);
	    up.setMaxSize(10000); //单位KB
	    up.upload();

	    String callback = request.getParameter("callback");

	    String result = "{\"name\":\""+ up.getFileName() +"\", \"originalName\": \""+ up.getOriginalName() +"\", \"size\": "+ up.getSize() +", \"state\": \""+ up.getState() +"\", \"type\": \""+ up.getType() +"\", \"url\": \""+ up.getUrl() +"\"}";

	    result = result.replaceAll( "\\\\", "\\\\" );

	    if( callback == null ){
	        response.getWriter().print( result );
	    }else{
	        response.getWriter().print("<script>"+ callback +"(" + result + ")</script>");
	    }
    }
	
}
