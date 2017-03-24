/**
 * Created by chun on 2016/9/22.
 */

//医院等级
var dataTimeType = [
	{"code": "0", "name": "月"},
	{"code": "1", "name": "年"}
];
var dataAnalyType = [
	{"code": "0", "name": "医疗专科"},
	{"code": "1", "name": "MDC分类"}
];
var dataDRGsAnalyType = [
	{"code": "0", "name": "医疗专科"},
	{"code": "1", "name": "MDC/DRGs"}
];
var dataDRGsClass = [
	{"code": "P", "name": "外科类"},
	{"code": "M", "name": "内科类"}
];
//季度列表
var dataQuarter = [
	{"code": "1", "name": "第一季度"},
	{"code": "2", "name": "第二季度"},
	{"code": "3", "name": "第三季度"},
	{"code": "4", "name": "第四季度"}
];
//医院等级
var dataHospitalDegree = [
	{"code": "0101", "name": "三甲医院"},
	{"code": "0102", "name": "三乙医院"},
	{"code": "0201", "name": "二甲医院"},
	{"code": "0202", "name": "二乙医院"},
	{"code": "0301_0302", "name": "二乙以下"}
];
//指标类型
var dataIndexType = [
	{
		"code": "0", "name": "综合能力类",
		"children": [
			{"code": "0", "name": "病例数", "unit": "(人)"},
			{"code": "1", "name": "DRG组数", "unit": "(组)"},
			{"code": "2", "name": "CMI", "unit": ""},
			{"code": "3", "name": "费用指数", "unit": ""},
			{"code": "4", "name": "时间指数", "unit": ""}
		]
	},
	{
		"code": "1", "name": "医疗质量类",
		"children": [
			{"code": "0", "name": "平均住院日", "unit": "(天)"},
			{"code": "1", "name": "术前平均住院日", "unit": "(天)"},
			{"code": "2", "name": "31天内再入院率", "unit": "(%)"},
			{"code": "3", "name": "入院诊断和出院诊断符合率", "unit": "(%)"},
			{"code": "4", "name": "抗菌药物使用率", "unit": "(%)"},
			{"code": "5", "name": "抢救成功率", "unit": "(%)"},
			{"code": "6", "name": "好转率", "unit": "(%)"},
			{"code": "7", "name": "治愈率", "unit": "(%)"},
			{"code": "8", "name": "低风险死亡率", "unit": "(%)"},
			{"code": "9", "name": "三四级手术死亡率", "unit": "(%)"}
		]
	},
	{
		"code": "2", "name": "医疗费用类",
		"children": [
			{"code": "0", "name": "总费用", "unit": "(万元)"},
			{"code": "1", "name": "次均费用", "unit": "(元)"},
			{"code": "2", "name": "自费率", "unit": "(%)"},
			{"code": "3", "name": "药占比", "unit": "(%)"},
			{"code": "4", "name": "抗菌药物占比", "unit": "(%)"},
			{"code": "5", "name": "高耗占比", "unit": "(%)"},
			{"code": "6", "name": "手术占比", "unit": "(%)"},
			{"code": "7", "name": "检查占比", "unit": "(%)"}
		]
	},
	{
		"code": "3", "name": "医疗难度类",
		"children": [
			{"code": "0", "name": "三四级手术人次", "unit": "(人次)"},
			{"code": "1", "name": "三四级手术占比", "unit": "(%)"},
			{"code": "2", "name": "1类手术切口", "unit": "(个)"},
			{"code": "3", "name": "2类手术切口", "unit": "(个)"},
			{"code": "4", "name": "3类手术切口", "unit": "(个)"}
		]
	}
];

//专科对应指标类型
var dataMDCIndexType = [
	{
		"code": "0", "name": "综合能力类",
		"children": [
			{"code": "0", "name": "病例数", "unit": "(人)"}
		]
	},
	{
		"code": "1", "name": "医疗质量类",
		"children": [
			{"code": "0", "name": "平均住院日", "unit": "(天)"},
			{"code": "1", "name": "术前平均住院日", "unit": "(天)"},
			{"code": "2", "name": "31天内再入院率", "unit": "(%)"},
			{"code": "3", "name": "入院诊断和出院诊断符合率", "unit": "(%)"},
			{"code": "4", "name": "抗菌药物使用率", "unit": "(%)"},
			{"code": "5", "name": "抢救成功率", "unit": "(%)"},
			{"code": "6", "name": "好转率", "unit": "(%)"},
			{"code": "7", "name": "治愈率", "unit": "(%)"}
		]
	},
	{
		"code": "2", "name": "医疗费用类",
		"children": [
			{"code": "0", "name": "总费用", "unit": "(万元)"},
			{"code": "1", "name": "次均费用", "unit": "(元)"},
			{"code": "2", "name": "自费率", "unit": "(%)"},
			{"code": "3", "name": "药占比", "unit": "(%)"},
			{"code": "4", "name": "抗菌药物占比", "unit": "(%)"},
			{"code": "5", "name": "高耗占比", "unit": "(%)"},
			{"code": "6", "name": "手术占比", "unit": "(%)"},
			{"code": "7", "name": "检查占比", "unit": "(%)"}
		]
	},
	{
		"code": "3", "name": "医疗难度类",
		"children": [
			{"code": "0", "name": "三四级手术人次", "unit": "(人次)"},
			{"code": "1", "name": "三四级手术占比", "unit": "(%)"},
			{"code": "2", "name": "1类手术切口", "unit": "(个)"},
			{"code": "3", "name": "2类手术切口", "unit": "(个)"},
			{"code": "4", "name": "3类手术切口", "unit": "(个)"}
		]
	}
];

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

//输入选项加载
function inOptsFun(options){
	var defOption = {
		id: "#",
		data: [],
		hasAll: false,
		tailAll: false,
		selectOpt: null,
		name: "name",
		allOpt: [
			{"code": "", "name": "全部"}
		]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		var $optList = $(setting.id);
		//数组数据
		this.data = function(){
			var dataArr = [];
			//加载列表
			if(setting.hasAll == true){
				if(setting.tailAll){
					dataArr = dataArr.concat(setting.data, setting.allOpt);
				}
				else{
					dataArr = dataArr.concat(setting.allOpt, setting.data);
				}
			}else{
				dataArr = setting.data;
			}
			return dataArr;
		};
		//列表
		this.list = function(){
			if((setting.hasAll == false)&&(setting.selectOpt == "")){
				setting.selectOpt = null;
			}
			$optList.hide().html("");
			var optLiElem = document.createElement("span");
			optLiElem.className = "inopt-li";
			var aElem = document.createElement("a");
			optLiElem.appendChild(aElem);
			var dataArr = this.data();
			for(var i=0, arrSize=dataArr.length; i<arrSize; i++){
				var curObj = dataArr[i];
				var optLiClone = optLiElem.cloneNode(true);
				var optAElem = optLiClone.getElementsByTagName("a")[0];
				var curCode = curObj['code'];
				optAElem.setAttribute("data-id", curCode);
				if(curCode == ''){
					optAElem.setAttribute("data-all", true);
				}
				optAElem.innerHTML = curObj[setting.name];
				$optList.append(optLiClone);
			}
			//显示列表
			$optList.show();
			//注册点击事件
			$optList.on('click', 'a', function(){
				var $this = $(this);
				var on = "on";
				var $inoptCon = $this.parents(".inopt-con");
				var $opts = $optList.find("a");
				$opts.removeClass(on); $this.addClass(on);
				$inoptCon.attr("data-select", $this.attr("data-id"));
			});
		};
		//加载点击事件和选中项
		this.load = function(){
			this.list();
			//选中项
			var defClass = "[data-id="+setting.selectOpt+"]";
			var $defAElem = $optList.find(defClass);
			if($defAElem.size() > 0){
				$defAElem.trigger('click');
			}else{
				$optList.find("a").eq(0).trigger('click');
			}
		};
	}
}

//生成标签内容关联
function relateTabAndList(options){
	var defOption = {
		tabId: "#",
		conId: "#",
		data: [],
		hasAllTab: false,
		tailAllTab: false,
		hasAllCon: false,
		tailAllCon: false,
		selectOptTab: null,
		selectOptCon: null,
		tabname: "name",
		allOptTab: [
			{"code": "", "name": "全部", "nameSimple": "全部", "children": []}
		]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		var dataArr = [];
		var dataTabArr = [];
		if(setting.hasAllTab){
			if(setting.tailAllTab){
				dataArr = dataArr.concat(setting.data, setting.allOptTab);
			}
			else{
				dataArr = dataArr.concat(setting.allOptTab, setting.data);
			}
		}
		else{
			dataArr = setting.data;
		}
		//con内容列表
		var $tabElem = $(setting.tabId);
		var $conElem = $(setting.conId);
		var optList = document.createElement("div");
		optList.className = "inopt-list";
		$conElem.hide().html("");
		var tabSize = dataArr.length;
		for(var i=0; i<tabSize; i++){
			var curObj = dataArr[i];
			var tmpObj = {
				'code': curObj['code'],
				'name': curObj[setting.tabname]
			};
			dataTabArr.push(tmpObj);
			var curChildren = curObj['children'];
			if(typeof curChildren != "undefined"){
				var optListCon = optList.cloneNode(true);
				var optFunObj = {};
				optFunObj = {
					id: optListCon,
					data: curChildren,
					hasAll: setting.hasAllCon,
					tailAll: setting.tailAllCon,
					selectOpt: setting.selectOptCon
				};
				if(setting.hasAllTab){
					if(setting.tailAllTab){
						if(i == tabSize-1){
							optFunObj.hasAll = true;
							optFunObj.tailAll = false;
						}
					}
					else{
						if(i == 0){
							optFunObj.hasAll = true;
							optFunObj.tailAll = false;
						}
					}
				}
				new inOptsFun(optFunObj).list();
				$conElem.append(optListCon);
			}
		}
		$conElem.show();
		//tab标签列表
		if(dataTabArr.length > 0){
			var tabFun = new inOptsFun({
				id: setting.tabId,
				data: dataTabArr,
				selectOpt: setting.selectOptTab
			}).list();
		}
		//关联标签菜单点击
		$tabElem.on('click', "a",function(){
			var on = "on";
			var $tabOptA = $tabElem.find("a");
			var index = $tabOptA.index(this);
			var $conList = $conElem.find(".inopt-list");
			$conList.hide().eq(index).show().find("a").eq(0).trigger('click');
		});
		//关联所有列表点击
		$conElem.on('click', "a",function(){
			var on = "on";
			var $conListA = $conElem.find("a");
			$conListA.removeClass(on);
			$(this).addClass(on);
		});
		//默认选中项
		var tabDefClass = "[data-id="+setting.selectOptTab+"]";
		var $tabDefAElem = $tabElem.find(tabDefClass);
		if($tabDefAElem.size() > 0){
			$tabDefAElem.trigger('click');
			var tabIndex = $tabElem.find("a").index($tabDefAElem[0]);
			var conDefClass = "[data-id="+setting.selectOptCon+"]";
			var $curConList = $conElem.find(".inopt-list").eq(tabIndex);
			var $conDefElem = $curConList.find(conDefClass);
			if($conDefElem.size() > 0){
				$conDefElem.trigger('click');
			}else{
				$curConList.find("a").eq(0).trigger('click');
			}
		}else{
			$tabElem.find("a").eq(0).trigger('click');
			$conElem.find("a").eq(0).trigger('click');
		}
	}
}

//时间类型列表
function TimeTypeList(options){
	var defOption = {
		id: "#timeTypeList",
		data: dataTimeType
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		new inOptsFun({
			id: setting.id,
			data: setting.data
		}).load();
	}
}

//DRGs分类列表
function DRGsClassList(options){
	var defOption = {
		id: "#drgsClassList",
		data: dataDRGsClass
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		new inOptsFun({
			id: setting.id,
			data: setting.data
		}).load();
	}
}
//季度列表
function QuarterList(options){
	var defOption = {
		id: "#quarterList",
		data: dataQuarter,
		hasAll: true,
		allOpt: [
			{"code": " ", "name": "全年"}
		]
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		new inOptsFun(setting).load();
	}
}
//评价周期选择
function yearQuarterList(){
	var $timeCheck = $("#yearPeriod");
	//年份设置
	var yearDPOpt = {
		language: 'zh-CN',
		minViewMode: 2,
		startDate: '2010',
		endDate: getDate().year+"/"+getDate().month,
		autoclose: true,
		format: 'yyyy年'
	};
	$timeCheck.val("2015年");
	$timeCheck.datepicker("destroy");
	$timeCheck.datepicker(yearDPOpt);

	//季度列表
	QuarterList({selectOpt: 1});

	//切换年度后默认选中 “全年”
	$timeCheck.on('change', function(){
		$("#quarterList").find("a").eq(0).trigger('click');
	});
}

//医院等级列表
function HospDegreeList(options){
	var defOption = {
		id: "#hospDegreeList",
		data: dataHospitalDegree
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		new inOptsFun({
			id: setting.id,
			data: setting.data,
			hasAll: true
		}).load();
	}
}

//Mdc列表
function MdcList(options){
	var defOption = {
		id: "#mdcList",
		hasAll: false,
		name: "name",
		selectOpt: 11
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		$.ajax({
			type: "post",
			url: "common/mdcDrgList",
			dataType:"jsonp",
			data: "",
			async: false,
			jsonp: "callback",
			success:function(data){
				var jsonData = eval(data);
				var dataArr = jsonData;
				var dataTabArr = [];
				var tabSize = dataArr.length;
				for(var i=0; i<tabSize; i++){
					var curObj = dataArr[i];
					var tmpObj = {
						'code': curObj['code'],
						'name': curObj["nameSimple"]
					};
					dataTabArr.push(tmpObj);
				}
				//tab标签列表
				if(dataTabArr.length > 0){
					setting.data = dataTabArr;
					new inOptsFun(setting).load();
				}
			},
			error:function(error){
				console.log(error);
			}
		});
	}
}
//DRGs模糊搜索下拉
function searchDrgsList(){
	var $searchBox = $("#searchBox");
	var $searchRes = $searchBox.find(".search-res");
	var $searchInput = $("#searchInput");
	var nores = "nores";
	$searchRes.hide();
	$searchInput.on('keyup focus', function(){
		$searchRes.find("a").remove();
		var inVal = jQuery.trim($(this).val());
		var inValLength = inVal.length;
		if(inValLength > 0){
			var $drgsRes = $("#drgsRes");
			var $curList = $drgsRes.find(".inopt-list:visible");
			var $optA = $curList.find("a");
			for(var i=0,aSize=$optA.size(); i<aSize; i++){
				var $curA = $optA.eq(i);
				var curTxt = jQuery.trim($curA.text());
				var curId = $curA.attr("data-id");
				var indexFront = curTxt.toLowerCase().indexOf(inVal.toLowerCase());
				if(indexFront != -1){
					var resAElem = document.createElement("a");
					var emElem = document.createElement("em");
					var spanElemBefore = document.createElement("span");
					var spanElemAfter = document.createElement("span");
					var restTxtBefore = curTxt.slice(0,indexFront);
					var inValSelf = curTxt.slice(indexFront,indexFront+inValLength);
					var restTxtAfter = curTxt.slice(indexFront+inValLength);
					spanElemBefore.innerHTML = restTxtBefore;
					emElem.innerHTML = inValSelf;
					spanElemAfter.innerHTML = restTxtAfter;
					resAElem.setAttribute("id", curId);
					resAElem.appendChild(spanElemBefore);
					resAElem.appendChild(emElem);
					resAElem.appendChild(spanElemAfter);
					$searchRes.append(resAElem);
				}
			}
			var $resAItem = $searchRes.find("a");
			if($resAItem.size()>0){
				$searchRes.removeClass(nores);
				$resAItem.on('click',function(){
					var thisId = $(this).attr("id");
					var defClass = "[data-id="+thisId+"]";
					if(thisId == ""){
						defClass = "[data-all=true]";
					}
					var $defAElem = $curList.find(defClass);
					if($defAElem.size() > 0){
						$defAElem.trigger('click');
						var $curOptCon = $defAElem.parents(".inopt-con");
						var curTop = $defAElem[0].offsetTop - 42;
						$curOptCon.stop().animate({
							scrollTop: curTop
						},500);
						$resAItem.remove();
						$searchRes.hide();
						$searchInput.val('');
					}
				});
			}
			else{
				$searchRes.addClass(nores);
			}
			$searchRes.show();
		}
		else{
			$searchRes.hide();
		}
	});
	//隐藏搜索下拉结果
	$searchBox.on('click', function(ev){
		var e = ev || window.event;
		stopPropagation(e);
	});
	$(document).on('click', function(){
		$(".search-res").hide();
	});
}
//更多展开\收起
function inoptMore(){
	//更多展开
	var $inoptMore = $("#inoptMore");
	$inoptMore.on('click', '.more-down', function(){
		$inoptMore.removeClass("fold");
	});
	$inoptMore.on('click', '.more-up', function(){
		$inoptMore.addClass("fold");
	});
}
//MdcDrgs列表
function MdcDrgsList(options){
	var defOption = {
		mdcId: "#mdcList",
		drgId: "#drgsRes",
		hasAllTab: false,
		tailAllTab: false,
		hasAllCon: false,
		tailAllCon: false,
		selectOptTab: null,
		selectOptCon: null,
        inData: ''
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
        var inData = setting.inData;
		$.ajax({
			type: "post",
			url: "common/mdcDrgList",
			dataType:"jsonp",
			data: inData,
			async: false,
			jsonp: "callback",
			success:function(data){
				var jsonData = eval(data);
				relateTabAndList({
					tabId: setting.mdcId,
					conId: setting.drgId,
					data: jsonData,
					hasAllTab: setting.hasAllTab,
					tailAllTab: setting.tailAllTab,
					hasAllCon: setting.hasAllCon,
					tailAllCon: setting.tailAllCon,
					selectOptTab: setting.selectOptTab,
					selectOptCon: setting.selectOptCon,
					tabname: "nameSimple"
				});
				searchDrgsList();
				inoptMore();
			},
			error:function(error){
				console.log(error);
			}
		});
	}
}

//专科列表
function DepaList(options){
	var defOption = {
		id: "#depaList",
		data: dataHospitalDegree
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		$.ajax({
			type: "post",
			url: "common/depa",
			dataType:"jsonp",
			data: "",
			async: false,
			jsonp: "callback",
			success:function(data){
				var jsonData = eval(data);
				new inOptsFun({
					id: setting.id,
					data: jsonData
				}).load();
			},
			error:function(error){
				console.log(error);
			}
		});
	}
}

//专科 与 MDC 切换
function depaAndMdc(options){
	//医疗专科
	DepaList();
	//MDC分类
	MdcDrgsList();
	//标签列表
	var defOption = {
		tabId: "#analyTypeList",
		conId: "#analyTypeListRes",
		data: dataAnalyType
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(true, {}, defOption, options);
		new inOptsFun({
			id: setting.tabId,
			data: setting.data
		}).load();
		var $tabElem = $(setting.tabId);
		var $conElem = $(setting.conId);
		//关联标签菜单点击
		$tabElem.on('click', "a",function(){
			var on = "on";
			var $tabOptA = $tabElem.find("a");
			var index = $tabOptA.index(this);
			var $conList = $conElem.find(".inopt-list");
			$conList.hide().eq(index).show().find("a").eq(0).trigger('click');
			//切换DRGs列表
			var $drgsOpt = $("#drgsOption");
			if(index == 0){
				$drgsOpt.hide();
			}
			else{
				$drgsOpt.show();
			}
		});
		//关联所有列表点击
		$conElem.on('click', ".inopt-list a", function(){
			var on = "on";
			var $conListA = $conElem.find(".inopt-list a");
			$conListA.removeClass(on);
			$(this).addClass(on);
		});
		//默认选中第一个
		$tabElem.find("a").eq(0).trigger('click');
		$conElem.find("a").eq(0).trigger('click');
	}
}
//指标类型
function indexTypeLoad(options){
	var defOption = {
		tabId: "#indexTypeList",
		conId: "#indexTypeListRes",
		data: dataIndexType
	};
	if (options === undefined){options = {};}
	if (typeof(options) === "object") {
		var setting = $.extend(false, {}, defOption, options);
		relateTabAndList({
			tabId: setting.tabId,
			conId: setting.conId,
			data: setting.data
		});
	}
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
	var endDate = getDate();
	var startData = getDate((new Date()).getTime() - 30*24*60*60*1000);

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
	defTime = {
		startTime: "2010-01-01",
		endTime: "2016-12-31"
	};
	if(defVal){
		defTime.startTime = defVal.startTime;
		defTime.endTime = defVal.endTime;
	}
	$timeStart.val(defTime.startTime);
	$timeEnd.val(defTime.endTime);

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
		if(callback){
			callback();
		}
	});

	//日历小图标点击触发日历窗口
	$(".fa-calendar").on('click', function(){
		$(this).siblings().filter('input').trigger('focus');
	});
}

//医院列表初始化
function hospListInit($elem, setting){
	//默认值(有"全部")
	var allTrueOpt = {
		hasAll: true,
		defId: ""  //全部
	};
	//默认值(没有"全部")
	var allFlaseOpt = {
		hasAll: false,
		defId: false
	};
	var defOpt = allTrueOpt; //默认使用(有"全部")

	var inData = {};
	if((typeof(setting) === "object")&&(typeof(setting.inPara) === "object")){
		inData = setting.inPara;
	}
	$elem.select2();
	$.ajax({
		type: "post",
		url: "common/hospital",
		dataType:"jsonp",
		data: inData,
		async: false,
		jsonp: "callback",
		success:function(data){
			var jsonData = eval(data);
			$elem.empty();
			var allBool = defOpt.hasAll;
			if((typeof(setting) === "object")&&(typeof(setting.hasAll) === "boolean")){
				allBool = setting.hasAll;
			}
			if(allBool){
				$elem.append("<option value=''>"+"全部"+"</option>");
			}
			$.each(jsonData, function(index, obj){
				$elem.append("<option value="+obj.id+">"+obj.name+"</option>");
			});
			//设置默认值
			if((typeof(setting) === "object")&&(typeof(setting.defId) != "undefined")){
				if(setting.defId != false){
					$elem.val(setting.defId);
				}
			}else{
				if(typeof(defOpt.defId) != "undefined"){
					if(defOpt.defId != false){
						$elem.val(defOpt.defId);
					}
				}
			}
			$elem.select2();
		},
		error:function(error){
			console.log(error);
		}
	});
}

//医院等级关联名称列表 初始化
function hospDegreeListInit($degree,$hosp,setting){
	//默认值(有"全部")
	var allTrueOpt = {
		degreeAll: true,
		hospAll: true,
		degreeId: "",
		hospId: ""
	};
	//默认值(没有"全部")
	var allFlaseOpt = {
		degreeAll: false,
		hospAll: false,
		degreeId: false,
		hospId: false
	};
	var defOpt = allTrueOpt; //默认使用(有"全部")

	//医院等级 加载
	$degree.empty();
	var degreeAll = defOpt.degreeAll;
	if((typeof(setting) === "object")&&(typeof(setting.degreeAll) === "boolean")){
		degreeAll = setting.degreeAll;
	}
	if(degreeAll){
		$degree.append("<option value=''>"+"全部"+"</option>");
	}
	$.each(hospitalDegree, function(index, obj) {
		$degree.append("<option value="+obj.value+">"+obj.name+"</option>");
	});
	//设置默认值
	if((typeof(setting) === "object")&&(typeof(setting.degreeId) != "undefined")){
		if(setting.degreeId != false){
			$degree.val(setting.degreeId);
		}
	}else{
		if(typeof(defOpt.degreeId) != "undefined"){
			if(defOpt.degreeId != false){
				$degree.val(defOpt.degreeId);
			}
		}
	}
	$degree.select2({minimumResultsForSearch: -1});

	//医院名称 加载
	if((typeof($hosp) != "undefined") && $hosp) {
		$degree.on('change', function(){
			$hosp.empty();
			var degreeVal = $degree.val(); //医院等级值
			if (degreeVal == "") {
				$hosp.append("<option value=''>" + "全部" + "</option>");
				$hosp.select2({minimumResultsForSearch: -1});
				$hosp.attr('disabled', 'disabled');
			}
			else{
				$hosp.removeAttr('disabled');
				//获取服务器数据
				var inData = {hospitalDegree:$degree.val()};
				$.ajax({
					type: "post",
					url: "common/hospital",
					dataType:"jsonp",
					data: inData,
					async: false,
					jsonp: "callback",
					success:function(data){
						var jsonData = eval(data);
						$hosp.empty();
						$hosp.hide();
						var hospAll = defOpt.hospAll;
						if((typeof(setting) === "object")&&(typeof(setting.hospAll) === "boolean")){
							hospAll = setting.hospAll;
						}
						if(hospAll){
							$hosp.append("<option value=''>"+"全部"+"</option>");
						}
						$.each(jsonData, function(index, obj){
							$hosp.append("<option value="+obj.id+">"+obj.name+"</option>");
						});
						//设置默认值
						if((typeof(setting) === "object")&&(typeof(setting.hospId) != "undefined")){
							if(setting.hospId != false){
								$hosp.val(setting.hospId);
							}
						}else{
							if(typeof(defOpt.hospId) != "undefined"){
								if(defOpt.hospId != false){
									$hosp.val(defOpt.hospId);
								}
							}
						}
						$hosp.show();
						$hosp.select2();
						$hosp.trigger('change');
					},
					error:function(error){
						console.log(error);
					}
				});
			}
		});
		$degree.trigger('change');
	}
}

//医生名称 初始化
function docListInit($elem, setting){
	//默认值(有"全部")
	var allTrueOpt = {
		hasAll: true,
		defId: ""  //全部
	};
	//默认值(没有"全部")
	var allFlaseOpt = {
		hasAll: false,
		defId: false
	};
	var defOpt = allFlaseOpt; //默认使用(有"全部")

	var inData = {};
	if((typeof(setting) === "object")&&(typeof(setting.inPara) === "object")){
		inData = setting.inPara;
	}
	$.ajax({
		type: "post",
		url: "orgDocAnalysis/getDocList",
		dataType:"json",
		data: inData,
		async: false,
		jsonp: "callback",
		success:function(data){
			var jsonData = eval(data);
			$elem.empty();
			$elem.hide();
			var allBool = defOpt.hasAll;
			if((typeof(setting) === "object")&&(typeof(setting.hasAll) === "boolean")){
				allBool = setting.hasAll;
			}
			if(allBool){
				$elem.append("<option value=''>"+"全部"+"</option>");
			}
			$.each(jsonData, function(index, obj){
				$elem.append("<option value="+obj.docId+">"+obj.docName+"</option>");
			});
			//设置默认值
			if((typeof(setting) === "object")&&(typeof(setting.defId) != "undefined")){
				if(setting.defId != false){
					$elem.val(setting.defId);
				}
			}else{
				if(typeof(defOpt.defId) != "undefined"){
					if(defOpt.defId != false){
						$elem.val(defOpt.defId);
					}
				}
			}
			$elem.show();
			$elem.select2();
		},
		error:function(error){
			console.log(error);
		}
	});
}

// MDC、DRG列表初始化
function mdcDrgListInit($mdc, $drg, setting){
	//默认值(MDC有"全部")
	var mdcAllTrueOpt = {
		mdcAll: true,
		mdcId: "",  //全部
		drgId: ""   //全部
	};
	//默认值(MDC没有"全部")
	var mdcAllFlaseOpt = {
		mdcAll: false,
		mdcId: false,
		drgId: false
	};
	var defOpt = mdcAllTrueOpt; //默认使用(MDC有"全部")

	var inData = {};
	if((typeof(setting) === "object")&&(typeof(setting.inPara) === "object")){
		inData = setting.inPara;
	}
	// 获取MDC列表
	$mdc.select2();
	$.ajax({
		type: "post",
		url: "common/mdcDrgList",
		dataType:"jsonp",
		data: inData,
		async: false,
		jsonp: "callback",
		success:function(data){
			var jsonData = eval(data);
			//MDC
			$mdc.empty();

			var mdcAllBool = defOpt.mdcAll;
			if((typeof(setting) === "object")&&(typeof(setting.mdcAll) === "boolean")){
				mdcAllBool = setting.mdcAll;
			}
			if(mdcAllBool){
				$mdc.append("<option value=''>"+"全部"+"</option>");
			}
			$.each(jsonData, function(index, obj){
				$mdc.append("<option value="+obj.code+">"+obj.name+"</option>");
			});
			//设置MDC默认值
			if((typeof(setting) === "object")&&(typeof(setting.mdcId) != "undefined")){
				if(setting.mdcId != false){
					$mdc.val(setting.mdcId);
				}
			}else{
				if(!mdcAllBool){
					defOpt = mdcAllFlaseOpt;
				}
				if(typeof(defOpt.mdcId) != "undefined"){
					if(defOpt.mdcId != false){
						$mdc.val(defOpt.mdcId);
					}
				}
			}
			$mdc.select2();

			//DRG
			if((typeof($drg) != "undefined") && $drg){
				$mdc.on('change',function(){
					var drgAll = true; // DRG默认有全部选项
					$drg.empty();
					var curVal = $(this).val();//变化的当前值
					if(curVal == ""){
						$drg.append("<option value=''>"+"全部"+"</option>");
						$drg.attr('disabled','disabled');
					}
					else{
						$drg.removeAttr('disabled');
						if((typeof(setting) === "object")&&(typeof(setting.drgAll) === "boolean")){
							drgAll = setting.drgAll;
						}
						if(drgAll){
							$drg.append("<option value=''>"+"全部"+"</option>");
						}
						$.each(jsonData, function(index, obj){
							if(jsonData[index].code == curVal){//如果这个级还有child
								var childData = jsonData[index].children;
								$.each(childData, function(index, obj){//二级遍历
									$drg.append("<option value="+obj.code+">"+obj.name+"</option>");
								});
							}
						});
					}

					//设置DRG默认值
					if((typeof(setting) === "object")&&(typeof(setting.drgId) != "undefined")){
						if(setting.drgId != false){
							$drg.val(setting.drgId);
						}
					}else{
						if(typeof(defOpt.drgId) != "undefined"){
							if(defOpt.drgId != false){
								$drg.val(defOpt.drgId);
							}
						}
					}
					$drg.select2();
					$drg.trigger('change');
				});
				$mdc.trigger('change');
			}
		},
		error:function(error){
			console.log(error);
		}
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
// 柱状图
function setBarChart(echarts, options, jsonData, direction){
	if(jsonData["axis"].length == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	//数据整理
	var axisArr = jsonData["axis"];
	var dataArr = jsonData["series"];
	var rankArr = jsonData["ranking"];

	if(direction == "vertical"){
		options.xAxis[0].type = 'value';
		options.xAxis[0].position = 'left';

		options.yAxis[0].type = 'category';
		options.yAxis[0].position = 'bottom';

		options.yAxis[0].data = axisArr;
	}
	else{
		options.xAxis[0].type = 'category';
		options.xAxis[0].position = 'bottom';

		options.yAxis[0].type = 'value';
		options.yAxis[0].position = 'left';

		options.xAxis[0].data = axisArr;
	}

	for(var i=0;i<jsonData["series"].length; i++){
		options.series[i].data = dataArr[i];
	}

	options.series[0].ranking = rankArr;

	var distMin, distMax;
	var minMax  = barValFun.arrMost(dataArr[0]);
	var diffMinMax = Math.abs(minMax.max - minMax.min);
	if(diffMinMax < 5){
		var partOfDiff = barValFun.toFloatVal(diffMinMax / 10);
		distMin = barValFun.intReg(minMax.min - partOfDiff, false);
		distMax = barValFun.intReg(minMax.max + partOfDiff, true);
	}
	else{
		distMin = barValFun.tensReg(minMax.min, false);
		distMax = barValFun.tensReg(minMax.max, true);
	}

	//distMax = (distMax > 100) ? 100 : distMax;
	distMin = (distMin < 0) ? 0 : distMin;

	if(direction == "vertical"){
		//数值坐标的区间
		options.xAxis[0].min = distMin;
		options.xAxis[0].max = distMax;
	}
	else{
		//数值坐标的区间
		options.yAxis[0].min = distMin;
		options.yAxis[0].max = distMax;
	}

	//自定义提示框
	options.tooltip.trigger = 'axis';
	options.tooltip.showDelay = 200;
	options.tooltip.hideDelay = 50;
	options.tooltip.transitionDuration = 0;
	options.tooltip.borderRadius = 8;
	options.tooltip.padding = 10;
	options.tooltip.formatter = function (params,ticket,callback) {
		var optionObj  = echarts.getOption();
		var res = '';
		for (var i = 0, l = params.length; i < l; i++) {
			var objIndex = params[i].dataIndex;
			res += "<div class='bartip-hd'>"+params[i].name+"</div>";
			res += params[i].seriesName + ' : ' + parseFloat(params[i].value).toLocaleString();
			res += '<br/>' + "排名" + ' : ' + optionObj.series[0].ranking[objIndex];
		}
		return res;
	};

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}

// 堆叠柱状图
function setBarStackChart(echarts, options, jsonData, direction){
	if(jsonData["axis"].length == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	//数据整理
	var axisArr = jsonData["axis"];
	var dataArr = jsonData["series"];

	if(direction == "vertical"){
		options.xAxis.type = 'value';
		options.xAxis.position = 'left';

		options.yAxis.type = 'category';
		options.yAxis.position = 'bottom';

		options.yAxis.data = axisArr;
	}
	else{
		options.xAxis.type = 'category';
		options.xAxis.position = 'bottom';

		options.yAxis.type = 'value';
		options.yAxis.position = 'left';

		options.xAxis.data = axisArr;
	}

	var dataArrSize = dataArr.length;
	for(var i=0;i<dataArrSize; i++){
		options.series[i].data = dataArr[i];
	}

	//自定义提示框
	options.tooltip.trigger = 'axis';
	options.tooltip.showDelay = 200;
	options.tooltip.hideDelay = 50;
	options.tooltip.transitionDuration = 0;
	options.tooltip.borderRadius = 8;
	options.tooltip.padding = 10;

	echarts.hideLoading();
	echarts.clear();
	echarts.setOption(options);
	options.version++;
}

// 仪表盘
function setGaugeChart(echarts, options, jsonData){
	var seriesLength = jsonData["series"].length;

	if(seriesLength == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	for(var i=0; i<seriesLength; i++){
		options.series[i].data[0].value = jsonData["series"][i];
	}

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}

// 饼状环形图
function setPieCirChart(echarts, options, jsonData){
	var seriesLength = jsonData["series"].length;
	if(seriesLength == 0){
		echarts.showLoading({
			text: "无数据，请修改查询条件重试！",
			textStyle: {
				fontSize : 20
			},
			effect: 'bubble'
		});
		return false;
	}

	var curVal = jsonData["series"][0];
	options.series[0].data[0].value = 100 - curVal;
	options.series[0].data[1].value = curVal;

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}


// 饼图
function setPieChart(echarts, options, jsonData){
	var legendData = jsonData["axis"];
	var seriesData = jsonData["series"];

	if(legendData.length == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	var pieColor = ["#D87A80","#2EC7C9","#B6A2DE","#5AB1EF","#FFB980","#AAB980","#8D98B3","#E5CF0D","#95706D","#DC69AA"];
	var legendArr = [];
	var seriesArr = [];
	for(var i=0, arrLeng=seriesData[0].length; i<arrLeng; i++){
		var curAxis = (legendData[i]).toString();
		seriesArr[i] = {name: curAxis,value:seriesData[0][i],itemStyle:{normal:{color:pieColor[i]}}};
		legendArr[i] = curAxis;
	}

	options.legend.data = legendArr;
	options.series[0].data = seriesArr;

	//自定义提示框
	options.tooltip.trigger= 'item';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	options.tooltip.borderRadius = 8;//提示边框圆角
	options.tooltip.padding = 10;

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}

// 折线图
function setLineChart(echarts, options, jsonData){
	var axisLength = jsonData["axis"][0].length;
	var seriesData = jsonData["series"];
	if(axisLength == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}

	options.xAxis.data = jsonData["axis"];

	for(var i=0; i<seriesData.length; i++){
		options.series[i].data = seriesData[i];
	}

	//自定义提示框
	options.tooltip.trigger = 'axis';
	options.tooltip.showDelay = 0;
	options.tooltip.hideDelay = 50;
	options.tooltip.transitionDuration = 0;
	options.tooltip.borderRadius = 8;//提示边框圆角
	options.tooltip.padding = 10;

	echarts.hideLoading();
	echarts.setOption(options);
	options.version++;
}

// 折线差值图
function setLineDiffChart(echarts, options, jsonData){
	var axisLength = jsonData["axis"].length;
	if(axisLength == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {
				fontSize : 20
			},
			effect : 'bubble'
		});
		return false;
	}
	var handleVal = new fatVal();

	options.xAxis.data = jsonData["axis"];
	options.series[0].data = jsonData["series"][0];
	options.series[1].data = jsonData["series"][1];
	//options.series[2].data = jsonData["series"][2];
	//options.series[3].data = jsonData["series"][3];

	//自定义提示框
	options.tooltip.trigger= 'axis';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	options.tooltip.borderRadius = 8;//提示边框圆角
	options.tooltip.padding = 10;
	options.tooltip.backgroundColor = 'rgba(30,30,30,0.7)';
	options.tooltip.formatter = function (params){
		var isRiseIcon = "";
		var curDiff = params[0].value - params[1].value;
		isRiseIcon = (curDiff >= 0) ? "<em class='rise-icon'></em>&nbsp;" : "<em class='lower-icon'></em>&nbsp;";
		return params[0].name + ' : ' + isRiseIcon + Math.abs(handleVal.toFloatVal(curDiff)) + '<br/>'
			+ params[0].seriesName + ' : ' + params[0].value + '<br/>'
			+ params[1].seriesName + ' : ' + params[1].value + '<br/>'
	};

	echarts.hideLoading();
	echarts.clear();
	echarts.setOption(options);
	options.version++;
}

// 雷达图
function setRadarEChart(echarts, options, jsonData){
	var legendData = jsonData["axis"];
	var seriesData = jsonData["series"];
	var indicatorData = jsonData["indicator"];
	var rankData = jsonData["rank"];
	var legendSize = legendData.length;
	if(legendSize == 0){
		echarts.showLoading({
			text:"无数据，请修改查询条件重试！",
			textStyle : {fontSize : 20},
			effect : 'bubble'
		});
		return false;
	}
	var arrValFun = new calValFun();
	//设置指示器indicator
	for(var m=0, indicatorSize = indicatorData.length; m<indicatorSize; m++){
		var indicatorObj = {};
		indicatorObj.name = indicatorData[m];
		//计算最大值
		var curMaxArr = [];
		for(var n=0; n<legendSize; n++){
			curMaxArr[n] = seriesData[n][m];
		}
		var minMax  = arrValFun.arrMost(curMaxArr);
		var diffMinMax = Math.abs(minMax.max - minMax.min);
		if((minMax.max==0)&&(minMax.min==0)){
			diffMinMax = 1;
		}
		indicatorObj.max = arrValFun.tensReg(minMax.max + (diffMinMax / 10), true);
		//赋值指示器
		options.radar.indicator[m] = indicatorObj;
	}
	//设置数据
	var lineColor = ["#00A65A","#ED5565","#FF8231","#D87A80","#2EC7C9","#B6A2DE","#AAB980","#8D98B3"];
	for(var i=0; i<legendSize; i++){
		//数据
		var seriesObj = {};
		seriesObj.name = legendData[i];
		seriesObj.value = seriesData[i];
		seriesObj.lineStyle = {
			normal: {color: lineColor[i] }
		};
		options.series[0].data[i] = seriesObj;
		//图例
		var legendObj = {};
		legendObj.name = legendData[i];
		legendObj.icon = "diamond";
		options.legend.data[i] = legendObj;
	}
	//排名
	options.series[0].rank = rankData;
	//自定义提示框
	options.tooltip.trigger= 'item';
	options.tooltip.showDelay= 0;
	options.tooltip.hideDelay= 50;
	options.tooltip.transitionDuration=0;
	options.tooltip.borderRadius = 8;//提示边框圆角
	options.tooltip.padding = 10;

	echarts.hideLoading();
	echarts.clear();
	echarts.setOption(options);
	options.version++;
}
