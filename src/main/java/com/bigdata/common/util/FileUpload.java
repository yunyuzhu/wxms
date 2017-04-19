package com.bigdata.common.util;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * Created by Administrator on 2016/5/12.
 */
public class FileUpload {

    private static final Logger logger = LoggerFactory.getLogger(FileUpload.class);

    /**
     * 长传路径
     */
    //public static String uploadPath = "D:\\upload";
    public static String uploadPath = "../img";

    /**
     * 文件上传
     * @param mf 文件资源
     * @param fileName 文件名
     * @return
     */
    public static String uploadFile(MultipartFile mf, String fileName) {
        String originalFileName = mf.getOriginalFilename();
        String suffix = checkFileAndGetSuffix(originalFileName);
        checkFileSize(mf);
        String fileFullName = uploadPath + File.separator + fileName+suffix;
        checkPathExsit(uploadPath);
        try {
            FileUtils.copyInputStreamToFile(mf.getInputStream(),new File(fileFullName));
        } catch (IOException e) {
            String errMsg = "系统异常，文件上传失败。";
        }
        return fileName+suffix;
    }

    /**
     * 检查文件是否存在
     * @param path
     */
    private static void checkPathExsit(String path){
        File file = new File(path);
        if(!file.exists()){
            file.mkdirs();
        }
    }

    /**
     * 检查文件大小
     * @param mf
     */
    private static void checkFileSize(MultipartFile mf){
        if ( mf.getSize() > 1024*1024 ){
            String errMsg = "图片尺寸过大（最大"+ 1024*1024 / 1024 /1024 +"M）";
        }
    }

    /**
     * 检查文件
     * @param fileName 文件名
     * @return
     */
    private static String checkFileAndGetSuffix(String fileName){
        int dot = fileName.lastIndexOf('.');
        boolean result = false;
        String suffix="";
        if ((dot >-1) && (dot < (fileName.length() - 1))) {
            suffix = fileName.substring(dot);
            result = ".jpg.gif.png.3gp".indexOf(suffix.toLowerCase())>=0;
        }
        if (!result){
            String errMsg = "文件后缀不合规格，只能是jpg,或者jif,png,3gp";
        }
        return suffix;
    }

}
