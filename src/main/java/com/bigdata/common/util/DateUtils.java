package com.bigdata.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * Created by luosl on 2016/9/26.
 */
public class DateUtils {

    public static final String PATTERN_1 = "yyyy-MM";

    public static Date str2Date(String str) throws ParseException {
        return str2Date(str,PATTERN_1);
    }

    /**
     * 字符串转时间
     * @param str
     * @param pattern
     * @return
     * @throws ParseException
     */
    public static Date str2Date(String str,String pattern) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);
        return sdf.parse(str);
    }

    public static Date monthAdd(Date date){
        Calendar cl = Calendar.getInstance();
        cl.setTime(date);
        cl.add(Calendar.MONTH, 1);
        return cl.getTime();
    }

}
