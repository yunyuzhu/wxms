package com.bigdata.common.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**   
 * @Title: MathUtil.java
 * @Description: 计算公共类
 * @author zzc   
 * @date 2015年11月9日 下午2:14:56   
 */
public class MathUtil {
	
	/**
	 * 计算偏度系数
	 * @param arr 数据集合
	 * @return 偏度系数
	 */
	public static double calcuSkewness(ArrayList<Double> arr){
		
		//数组长度
		int n = arr.size();
		
		//计算数组各元素之和
		double sum_index = 0.0;
		for(int i=0; i<n; i++){
			sum_index += arr.get(i);
		}

		//计算均值
		double avg_index = sum_index / n;

		//计算标准差
		double x_u_square_sum_index = 0.0;
		for(int i=0; i<n; i++){
			x_u_square_sum_index += (arr.get(i) - avg_index) * (arr.get(i) - avg_index);
		}
		
		double std_index  = Math.sqrt(x_u_square_sum_index / n);

		//每个指标的偏度系数
		double x_u_cube_sum_index = 0.0;
		for(int i=0; i<n; i++){
			x_u_cube_sum_index += (arr.get(i) - avg_index) * (arr.get(i) - avg_index) * (arr.get(i) - avg_index);
		}
		
		//得出偏度系数[原公式为(n * x_u_cube_sum_index) / ((n - 1) * (n - 2) * std_index * std_index * std_index))]
		//double skewness_index = (n * x_u_cube_sum_index) / ((n - 1) * (n - 2) * std_index * std_index * std_index);
		double skewness_index = x_u_cube_sum_index / (n * std_index * std_index * std_index);
		
		return skewness_index;
	}
	
	/**
	 * 计算中位数
	 * @param list 数据列表
	 * @return 中位数
	 */
	public static double calcuMedian(ArrayList<Double> list){
		
		//排序
		Collections.sort(list);
		
		//去重
		if(list.size()>1){
			for(int i=1;i<list.size();i++){
				if(list.get(i).equals(list.get(i-1))){
					list.remove(i);
					i--;
				}
			}
		}
		
		//获取中位数
        double dMedian = 0;
        if(list.size()%2==0){
        	if(list.size() == 0){
        		dMedian = 0;
        	}
        	else{
        		dMedian=(list.get(list.size()/2-1)+list.get(list.size()/2))/2;
        	}
        }else{
        	dMedian=list.get(list.size()/2) ;
        }
		
		return dMedian;
	}
	
	/**
	 * 计算众数
	 * @param list 数据列表
	 * @return 众数
	 */
	public static double calcuMode(ArrayList<Double> list){
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		for(int i=0;i<list.size();i++){
			String key = list.get(i).toString();
			
			if(map.containsKey(key)){
				int count = map.get(key);
				map.remove(key);
				map.put(key, ++count);
			}
			else{
				map.put(key, 1);
			}
		}
		
		//通过ArrayList构造函数把map.entrySet()转换成list 
		List<Map.Entry<String,Integer>> mappingList = new ArrayList<Map.Entry<String,Integer>>(map.entrySet()); 
		
		//通过比较器实现比较排序 
		Collections.sort(mappingList, new Comparator<Map.Entry<String,Integer>>(){
			public int compare(Map.Entry<String,Integer> mapping1,Map.Entry<String,Integer> mapping2){
				return mapping2.getValue().compareTo(mapping1.getValue());
			}
		});
		
		//计算均值
		/*double out = 0;
		int count = 0;
		for(int i=0;i<mappingList.size();i++){
			if(mappingList.get(i).getValue().equals(mappingList.get(0).getValue())){
				out +=Double.parseDouble(mappingList.get(i).getKey());
				count++;
			}
			else{
				break;
			}
		}
		
		double mode = out/count;*/
		double mode = Double.parseDouble(mappingList.get(0).getKey());
		
		return mode;
	}


	/**
	 * 功能描述：浮点数转化为百分数
	 *
	 * @param num
	 * @return
	 */
	public static Double changeDouble2Precent2(double f) {
		Double num = f * 100;
		Double result = Double.valueOf(String.format("%.2f", num));
		return result;
	}

	public static Double changeDouble2Precent3(double f) {
		double num = f / 10000;
		Double result = Double.valueOf(String.format("%.2f", num));
		return result;
	}
}
