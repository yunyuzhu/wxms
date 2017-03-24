//病人类型
var diagnoseTypes = [
	{"value":"0201", "name":"住院"},
	{"value":"0202", "name":"门诊特殊疾病"}
];

//医院 等级
var hospitalGrades=[
	{"value": "0101", "name": "三甲医院"},
	{"value": "0102", "name": "三乙医院"},
	{"value": "0201", "name": "二甲医院"},
	{"value": "0202", "name": "二乙医院"},
	{"value": "0301", "name": "二乙以下下浮10%"},
	{"value": "0302", "name": "二乙以下下浮20%"}

];

var hospitalGradeses=[
	  {"value": "", "name": "全部医院"},
	  {"value": "0101", "name": "三甲医院"},
	  {"value": "0102", "name": "三乙医院"},
	  {"value": "0201", "name": "二甲医院"},
	  {"value": "0202", "name": "二乙医院"},
	  {"value": "0301", "name": "二乙以下下浮10%"},
	  {"value": "0302", "name": "二乙以下下浮20%"}

  ];

//行政区划
var areaes=[
	{"value": "", "name": "全部"},
	{"value": "0000", "name": "成都市社保"},
	{"value": "0001", "name": "锦江区"},
	{"value": "0002", "name": "青羊区"},
	{"value": "0003", "name": "金牛区"},
	{"value": "0004", "name": "武侯区"},
	{"value": "0005", "name": "成华区"},
	{"value": "0006", "name": "龙泉驿区"},
	{"value": "0007", "name": "青白江区"},
	{"value": "0008", "name": "金堂县"},
	{"value": "0009", "name": "双流县"},
	{"value": "0010", "name": "温江区"},
	{"value": "0011", "name": "郫县"},
	{"value": "0012", "name": "新都区"},
	{"value": "0013", "name": "大邑县"},
	{"value": "0014", "name": "蒲江县"},
	{"value": "0015", "name": "新津县"},
	{"value": "0016", "name": "都江堰市"},
	{"value": "0017", "name": "彭州市"},
	{"value": "0018", "name": "邛崃市"},
	{"value": "0019", "name": "崇州市"},
	{"value": "0020", "name": "高新区"},
	{"value": "0021", "name": "天府新区"},
	{"value": "0090", "name": "省直医保中心"},
	{"value": "0091", "name": "统筹区外分中心"}
];

//报销类型
var paymentTypes=[
	{"value":"cz", "name":"城镇"},
	{"value":"cx", "name":"城乡"}
];

var paymentTypeses=[
	{"value":"", "name":"全部"},
	{"value":"cz", "name":"城镇"},
	{"value":"cx", "name":"城乡"}
];

var paymentTypeses2=[
	  /*{"value":"", "name":"城镇和城乡"},*/
	  {"value":"cz", "name":"城镇"},
	  {"value":"cx", "name":"城乡"}
  ];

//时间
var timeTypes=[
	{"value":"2015", "name":"2015年"},
	{"value":"2014", "name":"2014年"},
	{"value":"2013", "name":"2013年"},
	{"value":"2012", "name":"2012年"},
	{"value":"2011", "name":"2011年"}
];

var timeSections=[
	   {"value":"2014-2015", "name":"2014年 - 2015年"},
	   {"value":"2013-2014", "name":"2013年 - 2014年"},
	   {"value":"2012-2013", "name":"2012年 - 2013年"},
	   {"value":"2011-2012", "name":"2012年 - 2013年"}
   ];


var creditGrades=[
	  {"value":"", "name":"全部"},
	  {"value":"5", "name":"五星级"},
	  {"value":"4", "name":"四星级及四星级以上"},
	  {"value":"3", "name":"三星级及三星级以上"},
	  {"value":"2", "name":"二星级及二星级以上"},
	  {"value":"1", "name":"一星级及一星级以上"}
  ];

//主体对象
var mainObjects=[
	{"value":"yljg", "name":"医疗机构"},
	{"value":"jbjg", "name":"经办机构"}
];

var hospitalDetailsSets = ["第三人民医院","华西医院","成都上锦南府医院","省中西医结合医院","成都中医药大学附属医院","四川省肿瘤医院","四川省人民医院","四川华西第四医院","成都第二人民医院","成都第三人民医院",
	"第三人民医院","华西医院","成都上锦南府医院","省中西医结合医院","成都中医药大学附属医院","四川省肿瘤医院","四川省人民医院","四川华西第四医院","成都第二人民医院","成都第三人民医院"];

var hospitalDetailsSetsTest = ["人民医院第三人民医院第三人民医院第三人民邵波","华西医院","成都上锦南府医院","省中西医结合医院","成都中医药大学附属医院"
							   ,"华西医院","成都上锦南府医院","省中西医结合医院","成都中医药大学附属医院","成都中医药大学附属医院"];
//随机数
function getRandomData(num,max,points){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push((Math.random()*max).toFixed(2));
	}
	return arr;
}

function getRandomPieData(num,max,legends){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push({"name":legends[i],"value":(Math.random()*200).toFixed(0)})
	}
	console.log("饼状图数据。。。。。。。。。。。。。。。");
	console.log(arr);
	return arr;
}

//接口路径
//var rootPath = "http://10.111.123.9:8180/huaxi";
//var rootPath = "http://10.111.123.9:8080/hx";
//var rootPath = "http://127.0.0.1:8080/hx";
//var rootPath = "http://10.111.123.6:8088/huaxi";
//var rootPath = "http://182.150.22.119:2880/huaxi";
//var rootPath = "http://10.111.123.2:8080/huaxi";
//var rootPath = "http://172.16.20.28:8080/huaxi";
var rootPath = "http://127.0.0.1:8088/huaxi";
//var rootPath = "http://10.111.123.230:8080/hx";
//var rootPath = "http://10.111.123.2:8080/huaxi";

//柱状图颜色
var Color = '#81BBDC';
var ColorBlue = 'rgb(60, 141, 188)';
var ColorGreen = 'rgb(0, 166, 90)';
var ColorRed = 'rgb(245, 105, 84)';
//var Color5 = '#16aad8';
var Color1 = '#ff7f50';//棕
var Color2 = '#87cefa';//浅蓝
var Color3 = '#cd5c5c';//紫红
var Color4 = '#ffa500';//警告
var Color5 = '#40e0d0';//浅绿
var Color6 = '#0AA89E';//绿

var Colort = '#9BCA63';
var Colort2 = '#19A5B6';

var ColorYellow = '#FFA500';//橘黄
var ColorSky = '#87CEFA';//天蓝
var ColorPink = '#DA70D6';//粉红

//var Color1 = '#';
var ColorSets = ["#EE9A49","red","pink","#7266ba","#fad733","green","#23b7e5","#27c24c","#CC0033","#0099CC","#C0FF3E","#8B2500","#FFCC33","#9999FF","#00FF00","#669966","#3300FF","#00FFFF","#336633","#FF0066"];

function toFloatVal(val){
	return Number(parseFloat(val, 10).toFixed(2));
}
//获取数值函数
function getValFun(){
	//取得数组最大值
	this.getArrMax = function(valArr){
		var arrLength = valArr.length;
		var maxVal = toFloatVal(valArr[0]);
		for(var i=0; i<arrLength; i++){
			var curVal = toFloatVal(valArr[i]);
			maxVal = (maxVal < curVal) ? curVal : maxVal;
		}
		return maxVal;
	};
	//取得数组最小值
	this.getArrMin = function(valArr){
		var arrLength = valArr.length;
		var minVal = valArr[0];
		for(var i=0; i<arrLength; i++){
			var curVal = toFloatVal(valArr[i]);
			minVal = (minVal > curVal) ? curVal : minVal;
		}
		return minVal;
	};
	//获取十整数倍的区间上、下限值
	// flag：true --> 上限值 ， flag：false --> 下限值
	this.getTensNum = function getTensNum(val, flag){
		var tensNum;
		val = Number(parseFloat(val, 10).toFixed(2));
		var tensDig = parseInt(val / 10);
		var unitDig = parseInt(val % 10);
		if(unitDig >= 9){
			tensDig = flag ? (tensDig + 2) : tensDig;
		}
		else if((unitDig > 2)&&unitDig < 9){
			tensDig = flag ? (tensDig + 1) : tensDig;
		}
		else{
			tensDig = flag ? (tensDig + 1) : (tensDig - 1);
		}
		tensNum = tensDig * 10;
		return tensNum;
	};
}
//字符串添加截断换行函数
function strLineFeed(str, len){
	var res='';
	if(typeof(str) != "string"){
		return str;
	}
	for(var i=0, size=str.length; i<size; i++){
		res += str[i];
		if((i<(size-1)) && ((i+1)%len==0)){
			res = res + "\n";
		}
	}
	return res;
}

//画柱状图

function drawBarChart(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];

	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			if(index > 0){
				res = value.substring(0, index);
			}else{
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			}

			/*var result='';
			for(var i=0, l=res.length;i<l;i++){
				result+=res[i];
				if((i<(l-1)) && ((i+1)%8==0)){
					result=result+"\n";//就是这里！！！
					//每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
				}
			}*/

			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			if(index > 0){
				res = value.substring(0, index);
			}else {
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			}

			/*var result='';
			for(var i=0, l=res.length;i<l;i++){
				result+=res[i];
				if((i<(l-1)) && ((i+1)%8==0)){
					result=result+"\n";//就是这里！！！
					//每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
				}
			}*/

			return res;
		};
	}

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#DC147C';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString();
			res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}

function drawBarChartInc(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];


	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			if(index > 0){
				res = value.substring(0, index);
			}else{
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			}

			/*var result='';
			 for(var i=0, l=res.length;i<l;i++){
			 result+=res[i];
			 if((i<(l-1)) && ((i+1)%8==0)){
			 result=result+"\n";//就是这里！！！
			 //每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
			 }
			 }*/

			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			if(index > 0){
				res = value.substring(0, index);
			}else {
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			}

			/*var result='';
			 for(var i=0, l=res.length;i<l;i++){
			 result+=res[i];
			 if((i<(l-1)) && ((i+1)%8==0)){
			 result=result+"\n";//就是这里！！！
			 //每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
			 }
			 }*/

			return res;
		};
	}


	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#DC147C';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString() + '%';
			res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}

//不截断（）
function drawBarChart8(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];


	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';

			if(value == 'ssqt'){
				res = '手术其它';
			}else if(value == 'czqt'){
				res = '操作其它';
			}else{
				res = value;
			}

			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';

			if(value == 'ssqt'){
				res = '手术其它';
			}else if(value == 'czqt'){
				res = '操作其它';
			}else{
				res = value;
			}

			return res;
		};
	}


	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#DC147C';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString();
			res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}

function drawBarChartInc8(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];


	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';

			if(value == 'ssqt'){
				res = '手术其它';
			}else if(value == 'czqt'){
				res = '操作其它';
			}else{
				res = value;
			}

			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';

			if(value == 'ssqt'){
				res = '手术其它';
			}else if(value == 'czqt'){
				res = '操作其它';
			}else{
				res = value;
			}

			return res;
		};
	}


	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#DC147C';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString()+ '%';;
			res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}

//条状图
function drawBarChart2(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	var indexObj = jsonData["axis"].length;
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];
	/*options.series[0].data= [ "16", "33", "49.54", "49.81", "53.10", "55.12", "66.92", "0", "6", "-" ];*/

	options.series[0].ranking = jsonData["ranking"];

	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			var index2 = value.indexOf(" ");
			if(index > 0){
				res = value.substring(0, index);
			}else if(index2 > 0){
				res = value.substring(0, index2);
			}else{
				res = value;
			}

			/*for(var i=0, l=value.length;i<l;i++){
				res+=value[i];
				if((i<(l-1)) && ((i+1)%4==0)){
					res=res+"\n";//就是这里！！！
					//每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
				}
			}*/
			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("（");
			var index2 = value.indexOf(" ");
			if(index > 0){
				res = value.substring(0, index);
			}else if(index2 > 0){
				res = value.substring(0, index2);
			}else{
				res = value;
			}

			return res;
		};
	}

	/*options.yAxis[0].axisLabel.formatter = function(value){
		var res='';
		var index = value.indexOf("（");
		res = value.substring(0, index-1);

		return res;
	};*/

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		//var op  = echarts.getOption();
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			var objIndex = params[i].dataIndex ;
			res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString();
			res += '<br/>' + "排名" + ' : ' + params[0].series.ranking[objIndex];
			/*res += '<br/>' + "排名" + ' : ' + (indexObj -params[i].dataIndex);*/

			//var j = 9-params[i].dataIndex;
			//console.log(j);
			//console.log(params[i].series.num[j]);
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}

//指标
function drawBarChart6(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];
	options.series[0].data=jsonData["series"][0];

	options.series[0].ranking = jsonData["ranking"][0];

	if(jsonData["axis"].length == 1){
		options.series[0].barCategoryGap = '90%';
	}else if(jsonData["axis"].length == 2){
		options.series[0].barCategoryGap = '85%';
	}else if(jsonData["axis"].length == 3){
		options.series[0].barCategoryGap = '80%';
	}else if(jsonData["axis"].length == 4){
		options.series[0].barCategoryGap = '75%';
	}else if(jsonData["axis"].length == 5){
		options.series[0].barCategoryGap = '70%';
	}else if(jsonData["axis"].length == 6){
		options.series[0].barCategoryGap = '65%';
	}else if(jsonData["axis"].length == 7){
		options.series[0].barCategoryGap = '60%';
	}else{
		options.series[0].barCategoryGap = '60%';
	}


	if(direction=="vertical"){
		options.yAxis[0].axisLabel.formatter = function(value){
			var res='';
		   /* var index = value.indexOf("（");
			if(index > 0){
				res = value.substring(0, index);
			}else{*/
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			//}

			return res;
		};
	}else{
		options.xAxis[0].axisLabel.formatter = function(value){
			var res='';
			var index = value.indexOf("）");
			if(index > 0){
				res = value.substring(index+1, value.length);
			}else {
				if(value == 'ssqt'){
					res = '手术其它';
				}else if(value == 'czqt'){
					res = '操作其它';
				}else{
					res = value;
				}
			}

			return res;
		};
	}


	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#DC147C';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params,ticket,callback) {
		console.dir(params);
		//var res = 'Function formatter : <br/>' + params[0].name;
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			var objIndex = params[i].dataIndex ;
			res +=  params[i].seriesName + ' : ' + params[i].value;
			res += '<br/>' + "排名" + ' : ' + params[0].series.ranking[objIndex];
			/*res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);*/
		}
		//setTimeout(function (){
		//    // 仅为了模拟异步回调
		//    callback(ticket, res);
		//}, 1000);
		//return 'loading';
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
}


//堆积瀑布图
function drawBarChart4(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];

	var min_current = [];
	var current = [];
	var current_max = [];

	var minObj = jsonData["minScore"]; //最低分
	var currentObj = jsonData["score"]; //当前得分
	var maxObj = jsonData["maxScore"]; //最高分

	for(var i = 0; i < currentObj[0].length; i++){
		min_current.push(currentObj[0][i] - minObj[0][i]);
		current_max.push(maxObj[0][i] - currentObj[0][i]);
		if(currentObj[0][i] != '-'){
			current.push(1);
		}
	}

	if(jsonData["axis"].length == 1){
		options.series[0].barCategoryGap = '90%';
	}else if(jsonData["axis"].length == 2){
		options.series[0].barCategoryGap = '85%';
	}else if(jsonData["axis"].length == 3){
		options.series[0].barCategoryGap = '80%';
	}else if(jsonData["axis"].length == 4){
		options.series[0].barCategoryGap = '75%';
	}else if(jsonData["axis"].length == 5){
		options.series[0].barCategoryGap = '70%';
	}else if(jsonData["axis"].length == 6){
		options.series[0].barCategoryGap = '65%';
	}else if(jsonData["axis"].length == 7){
		options.series[0].barCategoryGap = '60%';
	}else{
		options.series[0].barCategoryGap = '60%';
	}


	options.series[0].data = jsonData["minScore"][0]; //最低分
	options.series[1].data = min_current; //最低分-得分
	options.series[2].data = current; //得分
	options.series[3].data = current_max; //得分-最高分

	options.series[0].hospitalNum = jsonData["hisNum"][0];
	options.series[0].hospitalRank = jsonData["scoreRank"][0];
	options.series[0].minScore = jsonData["minScore"][0];
	options.series[0].score = jsonData["score"][0];
	options.series[0].maxScore = jsonData["maxScore"][0];
	options.series[1].hospitalNum = jsonData["hisNum"][0];
	options.series[1].hospitalRank = jsonData["scoreRank"][0];
	options.series[1].minScore = jsonData["minScore"][0];
	options.series[1].score = jsonData["score"][0];
	options.series[1].maxScore = jsonData["maxScore"][0];
	options.series[2].hospitalNum = jsonData["hisNum"][0];
	options.series[2].hospitalRank = jsonData["scoreRank"][0];
	options.series[2].minScore = jsonData["minScore"][0];
	options.series[2].score = jsonData["score"][0];
	options.series[2].maxScore = jsonData["maxScore"][0];
	options.series[3].hospitalNum = jsonData["hisNum"][0];
	options.series[3].hospitalRank = jsonData["scoreRank"][0];
	options.series[3].minScore = jsonData["minScore"][0];
	options.series[3].score = jsonData["score"][0];
	options.series[3].maxScore = jsonData["maxScore"][0];

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params, ticket, callback) {
		console.dir(params);
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			var objIndex = params[i].dataIndex ;
			res = "医院数：" + params[0].series.hospitalNum[objIndex]
				+ '<br/>' + "排名：" + params[0].series.hospitalRank[objIndex]
				+ '<br/>' + "最高分：" + params[0].series.maxScore[objIndex]
				+ '<br/>' + "最低分：" + params[0].series.minScore[objIndex]
				+ '<br/>' + "得分：" + params[0].series.score[objIndex];

		}
		return res;
	};

	/*var tempSeries = options.series[0].data;
	 for(var i=0; i<tempSeries.length; i++){
	 var tempData = tempSeries[i];
	 if(tempData == '-'){
	 //自定义提示框
	 options.tooltip.trigger= 'axis';
	 options.tooltip.showDelay= 200;
	 options.tooltip.hideDelay= 50;
	 options.tooltip.transitionDuration=0;
	 //options.tooltip.backgroundColor = '#59B968';
	 //options.tooltip.borderColor = '#DC147C';
	 options.tooltip.borderRadius = 8;//提示边框圆角
	 //options.tooltip.borderWidth= 2;
	 options.tooltip.padding= 10;    // [5, 10, 15, 20]
	 options.tooltip.formatter = function (params,ticket,callback) {
	 console.dir(params);
	 //var res = 'Function formatter : <br/>' + params[0].name;
	 var res = '';
	 for (var i = 0, l = params.length; i < l; i++) {
	 res +=  params[i].seriesName + ' : -';
	 res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
	 }
	 //setTimeout(function (){
	 //    // 仅为了模拟异步回调
	 //    callback(ticket, res);
	 //}, 1000);
	 //return 'loading';
	 return res;
	 };

	 //options.tooltip.show = true;
	 //options.series[0].clickable = true;
	 }else{
	 options.tooltip.trigger= 'axis';
	 options.tooltip.showDelay= 200;
	 options.tooltip.hideDelay= 50;
	 options.tooltip.transitionDuration=0;
	 //options.tooltip.backgroundColor = '#59B968';
	 //options.tooltip.borderColor = '#DC147C';
	 options.tooltip.borderRadius = 8;//提示边框圆角
	 //options.tooltip.borderWidth= 2;
	 options.tooltip.padding= 10;    // [5, 10, 15, 20]
	 options.tooltip.formatter = function (params,ticket,callback) {
	 console.dir(params);
	 //var res = 'Function formatter : <br/>' + params[0].name;
	 var res = '';
	 for (var i = 0, l = params.length; i < l; i++) {
	 res +=  params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString();
	 res += '<br/>' + "排名" + ' : ' + (params[i].dataIndex + 1);
	 }
	 //setTimeout(function (){
	 //    // 仅为了模拟异步回调
	 //    callback(ticket, res);
	 //}, 1000);
	 //return 'loading';
	 return res;
	 };
	 //options.tooltip.show = false;
	 //options.series[0].clickable = false;
	 }
	 }*/

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);

	console.log(options);
	options.version++;
}


function drawBarChart5(echarts, options, jsonData, direction){
	console.log(jsonData["axis"].length);
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	direction=="vertical"?
		options.yAxis[0].data=jsonData["axis"]:
		options.xAxis[0].data=jsonData["axis"];

	var dataArr = [];
	for(var i = 0; i < jsonData["adPercent"][0].length; i++){
		dataArr.push(jsonData["adPercent"][0][i].substring(0, jsonData["adPercent"][0][i].length));
	}

	if(jsonData["axis"].length == 1){
		options.series[0].barCategoryGap = '90%';
	}else if(jsonData["axis"].length == 2){
		options.series[0].barCategoryGap = '85%';
	}else if(jsonData["axis"].length == 3){
		options.series[0].barCategoryGap = '80%';
	}else if(jsonData["axis"].length == 4){
		options.series[0].barCategoryGap = '75%';
	}else if(jsonData["axis"].length == 5){
		options.series[0].barCategoryGap = '70%';
	}else if(jsonData["axis"].length == 6){
		options.series[0].barCategoryGap = '65%';
	}else if(jsonData["axis"].length == 7){
		options.series[0].barCategoryGap = '60%';
	}else{
		options.series[0].barCategoryGap = '60%';
	}


	console.log(dataArr);
	options.series[0].data = dataArr;//占比
	options.series[0].allFee = jsonData["allFee"][0];//总费用
	options.series[0].sumFee = jsonData["sumFee"][0];//分组费用

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params, ticket, callback) {
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			var objIndex = params[i].dataIndex ;
			res = "总费用：" + parseFloat(params[0].series.allFee[objIndex]).toLocaleString()
				+ '<br/>' + "分组费用：" + parseFloat(params[0].series.sumFee[objIndex]).toLocaleString()
				+'<br/>' + "占比：" + params[0].series.data[objIndex];
			if(params[0].series.data[objIndex] != '-'){
				res +=  "%";
			}
		}
		return res;
	};

	//options.legend.data = ;
	console.log(options);
	echarts.hideLoading();
	echarts.setOption(options);
	console.log(options);
	options.version++;
	options.version++;
}


//画饼图
function drawPieChart(echarts, options, jsonData){
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	var arr = [];
	var arrLeng = [];
	var obj = jsonData["series"];
	var obj2 = jsonData["axis"];
	for(var i = 0; i<obj[0].length; i++){
		if(obj[0][i] > 0){
			arr.push({"name":obj2[0][i],"value":obj[0][i]});
			arrLeng.push(obj2[0][i]);
		}
	}

	options.legend.data = arrLeng;
	options.series[0].data=arr.reverse();

	console.dir(arrLeng);
	console.dir(arr);

	//自定义提示框
	options.tooltip.trigger= 'item';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}

//构成图
function drawPieChart2(echarts, options, jsonData){
	if(jsonData["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	var arr = [];
	var arrLeng = [];
	var obj = jsonData["series"];
	var obj2 = jsonData["axis"];
	for(var i = 0; i<obj[0].length; i++){
		if(obj[0][i] > 0){
			arr.push({"name":obj2[0][i],"value":obj[0][i]});
			arrLeng.push(obj2[0][i]);
		}
	}

	options.legend.data = arrLeng;
	options.series[1].data=arr;
	console.dir(arrLeng);
	console.dir(arr);

	//自定义提示框
	options.tooltip.trigger= 'item';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}


//散点图
var drawScatterChart = function(echarts, options, jsonData){
	if(jsonData["series"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	console.log(jsonData);
	options.series[0].data=jsonData["series"];
	options.series[0].drgName=jsonData["axis"];

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 200;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	//options.tooltip.backgroundColor = '#59B968';
	//options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	//options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;    // [5, 10, 15, 20]
	options.tooltip.formatter = function (params, ticket, callback) {
		var res = '';
		var objIndex = params.dataIndex ;
		var resTemp = '';
		var temp = params.series.drgName[objIndex];
		if(temp == 'ssqt'){
			resTemp = '手术其它';
		}else if(temp == 'czqt'){
			resTemp = '操作其它';
		}else{
			resTemp = temp;
		}
		//res = params.series.drgName[objIndex]
		res = resTemp
			+ '<br/>' + "得分：" +
			params.series.data[objIndex][0]
			+ '<br/>' + "占比：" +
			params.series.data[objIndex][1]+"%";
		return res;
	};

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
};

//折线图
var drawBrokenChart = function(echarts, options, jsonDataLast, jsonDataThis){

	if(jsonDataLast["axis"].length==0 && jsonDataThis["axis"].length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	jsonDataLast["axis"][0].length == 0 ?
		options.xAxis[0].data=jsonDataThis["axis"][0]:
		options.xAxis[0].data=jsonDataLast["axis"][0];
	options.series[0].data=jsonDataLast["series"][0];
	options.series[1].data=jsonDataThis["series"][0];

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	options.tooltip.backgroundColor = '#59B968';
	options.tooltip.borderColor = '#59B968';
	options.tooltip.borderRadius = 8;//提示边框圆角
	////options.tooltip.borderWidth= 2;
	options.tooltip.padding= 10;
	options.tooltip.formatter = function (params, ticket, callback) {
		var res = '';
			res = params[0].name + '月'
			+ '<br/>' + params[0].seriesName + ":" + params[0].value + "（万元）"
			+ '<br/>' + params[1].seriesName + ":" + params[1].value + "（万元）";

		return res;
	};

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
};


//刻度图
function drawTimeChart2(echarts, options, jsonData){
	if(jsonData.length==0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	options.series[0].data=jsonData;

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}


//初始化提示信息
function initCharts(myChart, id){

	myChart = echarts.init(id, {
		noDataLoadingOption:{
			text :"无数据，请修改查询条件重试！",
			effect : 'bubble',
			effectOption:{
				backgroundColor:"#fff"
			},
			textStyle : {
				fontSize : 20
			}
		}
	});

	//图表显示提示信息
	myChart.showLoading({
		text: "图表数据加载中，请稍后...",
		effect : 'whirling',
		effectOption:{
			backgroundColor:"#fff"
		},
		textStyle : {
			fontSize : 20
		}
	});

	return myChart;
}

function loadingDiv(myChart, id){
	myChart = echarts.init(id, {
		noDataLoadingOption:{
			text :"无数据，请修改查询条件重试！",
			effect : 'bubble',
			effectOption:{
				backgroundColor:"#fff"
			},
			textStyle : {
				fontSize : 20
			}
		}
	});

	//图表显示提示信息
	myChart.showLoading({
		text: "数据加载中，请稍后...",
		effect : 'whirling',
		effectOption:{
			backgroundColor:"#fff"
		},
		textStyle : {
			fontSize : 20
		}
	});

	return myChart;
}


//接口调用失败
function errorAjax(myChart){

	//图表显示提示信息
	myChart.showLoading({
		text :"接口调用失败，请联系管理员！",
		effect : 'bubble',
		effectOption:{
			backgroundColor:"#fff"
		},
		textStyle : {
			fontSize : 20
		}
	});

	return myChart;
}


//打印div
function printdiv(printpage)
{
	var headstr = "<html><head><title></title></head><body>";
	var footstr = "</body>";
	var newstr = document.all.item(printpage).innerHTML;
	var oldstr = document.body.innerHTML;
	document.body.innerHTML = headstr+newstr+footstr;
	window.print();
	document.body.innerHTML = oldstr;
	return false;
}