package com.bigdata.common.util;

/**
 * Created by luosl on 2016/9/28.
 */
public class Tuple3<T1,T2,T3> {

    public final T1 _1;
    public final T2 _2;
    public final T3 _3;

    public Tuple3(T1 t1, T2 t2,T3 t3) {
        _1 = t1;
        _2 = t2;
        _3 = t3;
    }

    @Override
    public String toString() {
        return "("+_1 +"," +_2+","+_3+")";
    }

    public static <T1,T2,T3> Tuple3<T1,T2,T3> tuple3(T1 t1,T2 t2,T3 t3){
        return new Tuple3<>(t1,t2,t3);
    }
}
