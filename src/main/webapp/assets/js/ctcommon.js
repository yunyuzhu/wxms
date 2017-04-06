/**
 * Created by chun on 2016/9/22.
 */

/* 阻止事件冒泡(兼容IE) */
function stopPropagation(ev){
	var e = ev||window.event;
	if(e.stopPropagation) { //W3C
		e.stopPropagation();
	} else {
		e.cancelBubble = true; //IE
	}
}

//返回对象数组是定值的下标
function indexOfObjArr(dataArr, key, value){
	var index = -1;
	for(var i=0, arrSize=dataArr.length; i<arrSize;i++){
		var curObj = dataArr[i];
		if(curObj[key] == value){
			index = i;
			break;
		}
	}
	return index;
}

//图表颜色配置
//var chartColor1 = "#5AB1EF";
var chartColor1 = "#0AA89E";
var chartColor2 = "#D87A80";
var chartColor3 = "#3DCACC";
var chartColor4 = "#C5B5E4";
var chartColor5 = "#C66";
var chartColor6 = "#FF7D5F";
var chartColorAdd = "#FFB980";
var chartColorCut = "#F00";

var fillColor = ["#D87A80","#2EC7C9","#B6A2DE","#5AB1EF","#FFB980","#AAB980"];

var chartGridOpt = {
	top: 40,
	left: '4%',
	right: '6%',
	bottom: '6%',
	containLabel: true
};

//扩展输入 flag：true -> 深度拷贝
function extendOpt(defOpt, inOpt, flag){
	for(var para in inOpt){
		var curOpt = inOpt[para];
		if(isArray(curOpt) && (typeof(flag) != "undefined") && flag ){
			for(var i=0,size=curOpt.length; i<size; i++){
				defOpt[para][i] = curOpt[i];
			}
		}
		else{
			defOpt[para] = curOpt;
		}
	}
	return defOpt;
}
//判断是否为数组类型
function isArray(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
}
//layer弹窗
function layerPopShow(options){
	var layerOpt = {
		type: 1,
		title: ['', "padding-left:70px;font-size:16px;text-align:center;color:#FFF;background:#4376a7;"],
		skin: 'demo-class',
		area: ['440px', 'auto'], //宽高
		anim: 2,
		shadeClose: false, //开启遮罩关闭
		btn: ['保存', '取消'],
		yes: function(){layer.close("page");},
		btn2: function(){layer.closeAll(); tipHide();},
		btnAlign: 'c',
		content: $("#editPop")
	};
	if (typeof(options) === 'undefined'){options = {};}
	if (typeof(options) === "object") {
		for(var para in options){
			var curVal = options[para];
			if(isArray(curVal)){
				for(var i=0,size=curVal.length; i<size; i++){
					layerOpt[para][i] = curVal[i];
				}
			}
			else{
				layerOpt[para] = curVal;
			}
		}
	}
	//弹窗
	layer.open(layerOpt);
}
//判断是否为null
function isNull(obj){
    return (obj == null || obj == "null");
}
//小于10的数值前面增加0
function addZero(val){
	var value = (val < 10)? ("0"+val) : val;
	return value.toString();
}
//获取时间的 年、月、日
function getDate(time){
	var date;
	if(time){
		date = new Date(time);
	}else{
		date = new Date();
	}
	return {
		year : date.getFullYear(),
		month: addZero(date.getMonth()+1),
		day: addZero(date.getDate())
	};
}

//起始、结束时间 初始化
function startEndTimeInit($timeStart, $timeEnd, callback, defVal){
	var callOpt = {
		day: 30,
		fun: function(){}
	};
    if (typeof(callback) == 'undefined'){callback = {};}
    if (typeof(callback) === "object") {
        var callObj = $.extend(false, {}, callOpt, callback);
        callOpt = callObj;
    }
	var endDate = getDate();
	var startData = getDate((new Date()).getTime() - (callOpt.day)*24*60*60*1000);

	//起始时间datapicker参数设置
	var startTimeDPOpt = {
		language: 'zh-CN',
		startDate: '2010/1/1',
		endDate: endDate.year+"/"+endDate.month+"/"+endDate.day,
		autoclose: true,
		format: 'yyyy年mm月dd日'
	};
	//结束时间datapicker参数设置
	var endTimeDPOpt = {
		language: 'zh-CN',
		startDate: '2010/1/1',
		endDate: endDate.year+"/"+endDate.month+"/"+endDate.day,
		autoclose: true,
		format: 'yyyy年mm月dd日'
	};

	//设置时间默认初始值
	var defTime = {
		startTime: startData.year+"年"+startData.month+"月"+startData.day+"日",
		endTime: endDate.year+"年"+endDate.month+"月"+endDate.day+"日"
	};
	if(defVal){
		defTime.startTime = defVal.startTime;
		defTime.endTime = defVal.endTime;
	}
	$timeStart.val(defTime.startTime).attr('readonly', 'readonly');
	$timeEnd.val(defTime.endTime).attr('readonly', 'readonly');

	var startDPOpt = {}, endDPOpt = {};
	var startTime, endTime;
	startDPOpt = startTimeDPOpt;
	endDPOpt = endTimeDPOpt;

	var timeStartDP = $timeStart.datepicker(startDPOpt);
	var timeEndDP = $timeEnd.datepicker(endDPOpt);

	timeStartDP.on('changeDate',function(ev){
		startTime = ev.date.valueOf();

		var startTimeUTC = $timeStart.datepicker('getUTCDate');
		var endTimeUTC = $timeEnd.datepicker('getUTCDate');
		var curStartDate = getDate(startTimeUTC);
		var curEndDate = getDate(endTimeUTC);
		if(startTimeUTC > endTimeUTC){
			var newEndVal = curStartDate.year+"年"+curStartDate.month+"月"+curStartDate.day+"日";
			$timeEnd.val(newEndVal);
		}
		$timeEnd.datepicker('destroy');
		endDPOpt.startDate = curStartDate.year+"/"+curStartDate.month+"/"+curStartDate.day;
		timeEndDP = $timeEnd.datepicker(endDPOpt);
		$timeEnd.focus();
	});

	timeEndDP.on('changeDate',function(ev){
		endTime = ev.date.valueOf();
		var curDate = getDate(endTime);
		$timeEnd.datepicker('update', curDate.year+"-"+curDate.month+"-"+curDate.day);

		//提交
        callOpt.fun();
	});

	//日历小图标点击触发日历窗口
	$(".fa-calendar").on('click', function(){
		$(this).siblings().filter('input').trigger('focus');
	});
}

//角色列表初始化
function roleInit($role, setting){
	//默认值(有"全部")
	var roleAllTrueOpt = {
		roleAll: true,
		roleId: ""   //全部
	};
	//默认值(没有"全部")
	var roleAllFlaseOpt = {
		roleAll: false,
		roleId: false  //默认选取第一个
	};
	var defOpt = roleAllTrueOpt; //默认使用(有"全部")

	var $elem = $role;
	//获取列表
	$elem.select2({minimumResultsForSearch: -1});
	$.ajax({
		type: "post",
		url: "manageRole/roleAll",
		dataType:"json",
		data: '',
		async: false,
		jsonp: "callback",
		success:function(data){
			var jsonData = eval(data);
			var roleData = jsonData["roles"];
			//角色
			$elem.empty();
			var roleAllBool = defOpt.roleAll;
			if((typeof(setting) === "object")&&(typeof(setting.roleAll) === "boolean")){
				roleAllBool = setting.roleAll;
			}
			if(roleAllBool){
				$elem.append("<option value="+""+">"+"全部"+"</option>");
			}
			$.each(roleData, function(index, obj){
				$elem.append("<option value="+obj.id+">"+obj.name+"</option>");
			});
			//设置默认值
			if((typeof(setting) === "object")&&(typeof(setting.roleId) != "undefined")){
				if(setting.roleId != false){
					$elem.val(setting.roleId);
				}
			}else{
				if(!roleAllBool){
					defOpt = roleAllFlaseOpt;
				}
				if((typeof(defOpt.roleId) != "undefined")&&(defOpt.roleId != false)) {
					$elem.val(defOpt.roleId);
				}
			}
			$elem.select2({minimumResultsForSearch: -1});
		},
		error:function(error){
			console.log(error);
		}
	});
}


/*********** 下拉列表数据  *************/
//选项加载
function OptionList(options){
	var defOption = {
		id: "",
		hasAll: false,
		tailAll: false,
		defVal: null,
		data: [],
		allOpt: [{"id": "", "name": "全部"}]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		var $elem = $(setting.id);
		$elem.empty();
		var optionElem = document.createElement("option");
		var dataArr = [];
		//组合数据
		if(setting.hasAll){
			if(setting.tailAll){
				dataArr = dataArr.concat(setting.data, setting.allOpt);
			}
			else{
				dataArr = dataArr.concat(setting.allOpt, setting.data);
			}
		}else{
			dataArr = setting.data;
		}
		//列表
		for(var i=0,dataSize=dataArr.length; i<dataSize; i++){
			var curData = dataArr[i];
			var optionElemClone = optionElem.cloneNode(true);
			optionElemClone.value = curData.id;
			optionElemClone.innerHTML = curData.name;
			$elem.append(optionElemClone);
		}
		//默认值
		if((!setting.hasAll)&&(setting.defVal == "")){
			setting.defVal = null;
		}
		if(setting.defVal != null){
			$elem.val(setting.defVal);
		}
	}
}

//行业列表
function TradeList(options){
	var defOption = {
		id: "#trade",
		hasAll: true,
		tailAll: false,
		defVal: "",
		data: [],
		allOpt: [{"id": "", "name": "全部"}]
	};
	if (typeof(options) === 'undefined'){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		$.ajax({
			type: "get",
			url: "shop/trade",
			dataType:"json",
			data: "",
			async: false,
			jsonp: "callback",
			success:function(data){
				var jsonData = eval(data);
				setting.data = jsonData;
				new OptionList(setting);
			},
			error:function(error){
				console.log(error);
			}
		});
	}
}

//启用状态
function UseFlagList(options){
	var defOption = {
		id: "#useFlagPop",
		hasAll: false,
		tailAll: false,
		defVal: "1",
		data: [
			{"id": "0", "name": "禁用"},
			{"id": "1", "name": "启用"}
		],
		allOpt: [{"id": "", "name": "全部"}]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		new OptionList(setting);
	}
}

//用户类型
function UserTypeList(options){
    var defOption = {
        id: "#userType",
        hasAll: false,
        tailAll: false,
        defVal: "1",
        data: [
            {"id": "1", "name": "用户"},
            {"id": "2", "name": "商户"}
        ],
        allOpt: [{"id": "", "name": "全部"}]
    };
    if (options === undefined){options = {};}
    if (typeof(options) === "object") {
        var setting = $.extend(false, {}, defOption, options);
        new OptionList(setting);
    }
}

//性别
function SexList(options){
	var defOption = {
		id: "#sexPop",
		hasAll: false,
		tailAll: false,
		defVal: "0",
		data: [
			{"id": "0", "name": "男"},
			{"id": "1", "name": "女"}
		],
		allOpt: [{"id": "", "name": "全部"}]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		new OptionList(setting);
	}
}

/*
* 图表展示功能函数区域
*/

//初始化提示信息
function initCharts(elem){
	var myChart = echarts.init(elem, {
		noDataLoadingOption:{
			text :"无数据，请修改查询条件重试！",
			effect : 'bubble',
			effectOption:{backgroundColor:"#fff"},
			textStyle : {fontSize : 20}
		}
	});
	//图表显示提示信息
	myChart.showLoading({
		text: "图表数据加载中，请稍后...",
		effect : 'whirling',
		effectOption:{backgroundColor:"#fff"},
		textStyle : {fontSize : 20}
	});
	return myChart;
}

function loadingDiv(myChart, id){
	myChart = echarts.init(id, {
		noDataLoadingOption:{
			text :"无数据，请修改查询条件重试！",
			effect : 'bubble',
			effectOption:{backgroundColor:"#fff"},
			textStyle : {fontSize : 20}
		}
	});

	//图表显示提示信息
	myChart.showLoading({
		text: "数据加载中，请稍后...",
		effect : 'whirling',
		effectOption:{backgroundColor:"#fff"},
		textStyle : {fontSize : 20}
	});

	return myChart;
}
//接口调用失败
function errorAjax(myChart){
	//图表显示提示信息
	myChart.clear();
	myChart.showLoading({
		text :"接口调用失败，请联系管理员！",
		effect : 'bubble',
		effectOption:{backgroundColor:"#fff"},
		textStyle : {fontSize : 20}
	});
	return myChart;
}

//小数格式化函数
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

//格式化数据函数
function fatVal(){
	this.toFloatVal = function(val){
		return Number(parseFloat(val, 10).toFixed(2));
	};
	//获取百分数数值
	this.getPerVal = function(val){
		var value = val.split("%")[0];
		return this.toFloatVal(value);
	};
	//获取数值
	this.getNum = function(val, digit){
		var resVal;
		if(Number == (typeof digit)){
			resVal = Number(parseFloat(val, 10).toFixed(parseInt(digit,10)));
		}
		else{
			resVal = Number(parseFloat(val, 10));
		}
		return resVal;
	};
	//转换成百分率
	this.toPer = function(val){
		var value = val;
		if(!isNaN(value)){
			value = this.toFloatVal( value*100 ) + "%";
		}
		return value;
	};
}
//转换成百分率
function toPer(val){
	return new fatVal().toPer(val);
}
//数组计算
function calValFun(){
	//转换成保留2位的浮点数
	this.toFloatVal = function(val){
		return Number(parseFloat(val, 10).toFixed(2));
	};
	//取得数组最值
	this.arrMost = function(valArr){
		var maxVal = 0, minVal = 0;
		var arrLength = valArr.length;
		maxVal = this.toFloatVal(valArr[0]);
		minVal = this.toFloatVal(valArr[0]);
		for(var i=0; i<arrLength; i++){
			var curVal = this.toFloatVal(valArr[i]);
			minVal = (minVal > curVal) ? curVal : minVal;
			maxVal = (maxVal < curVal) ? curVal : maxVal;
		}
		return {
			min: minVal,
			max: maxVal
		};
	};
	//获取十整数倍的区间上、下限值
	// flag：true --> 上限值 ， flag：false --> 下限值
	this.tensReg = function(val, flag){
		var tensNum = 0;
		var tensDig = 0;
		var unitDig = 0;
		var curVal = Number(parseFloat(val, 10).toFixed(2));
		tensDig = parseInt(curVal / 10, 10);
		unitDig = parseInt(curVal % 10, 10);
		if(unitDig < 1){
			if(flag){
				tensNum = tensDig*10 + 5;
			}else{
				tensNum = tensDig*10 - 5;
			}
		}else if((unitDig >= 1 )&&(unitDig < 4)){
			if(flag){
				tensNum = tensDig*10 + 5;
			}else{
				tensNum = tensDig*10;
			}
		}else if((unitDig >= 4 )&&(unitDig < 6)){
			if(flag){
				tensNum = tensDig*10 + 10;
			}else{
				tensNum = tensDig*10;
			}
		}else{
			if(flag){
				tensNum = parseInt(tensDig*10+10, 10);
			}else{
				tensNum = parseInt(tensDig*10+5, 10);
			}
		}
		tensNum = parseInt(tensNum, 10);
		return tensNum;
	};
	//获取紧挨整数的区间上、下限值
	// flag：true --> 上限值 ， flag：false --> 下限值
	this.intReg = function(val, flag){
		var intNum = 0;
		var curVal = Number(parseFloat(val, 10).toFixed(2));
		intNum = flag ? (curVal+1) : (curVal-1);
		intNum = parseInt(intNum);
		return intNum;
	};
}

// Echats图表函数自定义
var barValFun = new calValFun();

/*
* 校验
* */
//提示框关闭
function tipHide(){
	$(".jq_tips_box").hide().remove();
}
//提示框显示信息
function tipShow($elem, msgStr){
	tipHide();
	$elem.tips({
		side: 1,
		msg: msgStr,
		color: '#FFF',
		bg: '#FF8231',
		time: 3
	});
}

/****  校验函数 ****/
//校验是否为空
function EmptyCheck($elem, value, msg){
	var res = true;
	if(value == ''){
		tipShow($elem, msg);
		res = false;
	}
	else{
		tipHide();
	}
	return res;
}
//密码校验
function PasswordCheck($elem, value){
	var res = true;
	if (value == "") {
		tipShow($elem, "密码不能为空");
		res = false;
	} else if (value.length < 6) {
		tipShow($elem, "密码长度不能小于6位");
		res = false;
	} else {
		$elem.val(jQuery.trim(value));
		tipHide();
	}
	return res;
}

