package com.bigdata.common.util;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Zipper {

    public static <T1, T2> List<Pair<T1, T2>> zip(List<T1> input1, List<T2> input2){
        int inputSize = input1.size();
        if(inputSize != input2.size()){
            throw  new IllegalArgumentException("Different input sizes.");
        }
        List<Pair<T1,T2>> output = new LinkedList<Pair<T1,T2>>();
        for (int i = 0; i < inputSize; ++i){
           output.add(new Pair<T1,T2>(input1.get(i), input2.get(i)));
        }
        return output;
    }

    public static <T1,T2> Pair<List<T1>, List<T2>> unzip(List<Pair<T1, T2>> input){
        List<T1> output1 = new LinkedList<T1>();
        List<T2> output2 = new LinkedList<T2>();
        for(Pair<T1, T2> pair : input){
            output1.add(pair.getInfo1());
            output2.add(pair.getInfo2());
        }
        return new Pair<List<T1>, List<T2>>(output1, output2);
    }

    public static void main(String[] args) {
        List<Integer> input1 = Arrays.asList(1,2,3,4);
        List<Character> input2 = Arrays.asList('a','b','c','d');
        List<Pair<Integer, Character>> zipped = zip(input1, input2);
        System.out.println("zipped: " + zipped);
        Pair<List<Integer>,List<Character>> output = unzip(zipped);
        System.out.println("unzipped1: " + output.getInfo1());
        System.out.println("unzipped2: " + output.getInfo2());
    }
}
