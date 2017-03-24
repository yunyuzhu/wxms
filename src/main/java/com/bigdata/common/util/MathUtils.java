package com.bigdata.common.util;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.stream.Stream;

/**
 * Created by luosl on 2016/9/27.
 */
public class MathUtils {

    /**
     * 构建BigDecimal
     * @param number
     * @return
     */
    public static BigDecimal toBigDecimal(Serializable number){
        BigDecimal bd;
        if(number instanceof Integer){
            bd = new BigDecimal((Integer) number);
        }else if(number instanceof Double){
            bd = new BigDecimal((Double) number);
        }else if(number instanceof Float){
            bd = new BigDecimal((Float) number);
        }else if(number instanceof Long){
            bd = new BigDecimal((Long) number);
        }else {
            throw new RuntimeException(number.getClass()+"无法构造BigDecimal");
        }
        return bd;
    }

    /**
     * 除法
     * @param num1
     * @param nums
     * @return
     */
    public static BigDecimal div(Serializable num1,Serializable ...nums){
        BigDecimal fm = toBigDecimal(num1);
        return Stream.of(nums).map(MathUtils::toBigDecimal).reduce(fm,(res,bd)->res.divide(bd,5, BigDecimal.ROUND_HALF_EVEN));
    }
    /**
     * 乘法
     * @param num1
     * @param nums
     * @return
     */
    public static BigDecimal mul(Serializable num1,Serializable ...nums){
        BigDecimal fm = toBigDecimal(num1); //(res,bd)->res.multiply(bd)
        return Stream.of(nums).map(MathUtils::toBigDecimal).reduce(fm,BigDecimal::multiply);
    }

    /**
     * double格式化
     * @param d
     * @return
     */
    public static Double doubleFormat(Double d){
        if(null==d) return null;
        BigDecimal db = new BigDecimal(d);
        return db.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
    }

}
