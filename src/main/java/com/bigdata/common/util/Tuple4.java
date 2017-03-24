package com.bigdata.common.util;

/**
 * Created by luosl on 2016/9/28.
 */
public class Tuple4<T1,T2,T3,T4> {

    public final T1 _1;
    public final T2 _2;
    public final T3 _3;
    public final T4 _4;

    public Tuple4(T1 _1, T2 _2, T3 _3, T4 _4) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
    }

    @Override
    public String toString() {
        return "Tuple4{" +
                "_1=" + _1 +
                ", _2=" + _2 +
                ", _3=" + _3 +
                ", _4=" + _4 +
                '}';
    }

    public static <T1,T2,T3,T4> Tuple4<T1,T2,T3,T4> tuple4(T1 t1, T2 t2, T3 t3,T4 t4){
        return new Tuple4<>(t1,t2,t3,t4);
    }
}
