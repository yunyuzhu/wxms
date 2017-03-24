package com.bigdata.common.util;

public class Pair<T1, T2> {
    T1 info1;
    T2 info2;

    public Pair(T1 info1, T2 info2) {
        this.info1 = info1;
        this.info2 = info2;
    }

    public T1 getInfo1() {
        return info1;
    }

    public T2 getInfo2() {
        return info2;
    }

    @Override
    public String toString() {
        return info1.toString() +" -> "+ info2.toString();
    }

    public static <T1,T2> Pair<T1,T2> pair(T1 info1, T2 info2){
        return new Pair<>(info1,info2);
    }
}