/**
 * Created by chun on 2017/3/1.
 */

var hasAjaxArr = [false, false];
var drgIdOld = null;
//医疗质量
var medicalIndexName = {
    "pjzysc" : "平均住院日",
    "sqpjzysc" : "术前平均住院日",
    "hzl" : "好转率",
    "zyl" : "治愈率",
    "swl" : "死亡率",
    "zzyl" : "31天内再入院率",
    "rcyfhl" : "入院诊断和出院诊断符合率",
    "kjywsyl" : "抗菌药物使用率"
};
//综合能力
var compIndexName = {
    "bls" : "病例数",
    "drgsdfcd" : "DRGs覆盖程度",
    "ylzlpjdf" : "医疗质量评价得分",
    "fyzs" : "费用指数",
    "sjzs" : "时间指数",
    "cmi" : "CMI"
};
//获取DRGs类型
function getDrgClass(){
    return $("#drgsClassRes").attr("data-select");
}
//页面加载
function loadHtml(){
    hasAjaxArr = [false, false];
    //DRGs分类
    DRGsClassList();
    //DRGs分类切换
    $("#drgsClassList").on('click', 'a',function(){
        //MDC\DRGs列表
        MdcDrgsList({
            hasAllTab: true,
            tailAllTab: true,
            hasAllCon: true,
            tailAllCon: true,
            inData: {type: getDrgClass()}
        });
    });
    //注册DRGs点击
    $("#drgsRes").on('click', 'a',function(){
        var $drgsRes = $("#drgsRes");
        var curOptId = $drgsRes.attr("data-select");
        if(drgIdOld != curOptId){
            hasAjaxArr[0] = false;
            navMainGo(0);
            drgIdOld = curOptId;
        }
    });
    //主导航切换
    $("#pageNavTabs").on('click', ".navtab",function(){
        var $navtabs = $("#pageNavTabs");
        var $navtab = $navtabs.find(".navtab");
        var index = $navtab.index(this);
        navMainGo(index);
    });
    //默认选中第一个
    $("#pageNavTabs").find(".navtab").eq(0).trigger("click");
    $("#drgsClassList").find("a").eq(0).trigger("click");

    //注册设置
    //医疗质量
    $("#weightSetUpdata").on('click', function(){
        weightIndexUpdate();
    });
    //综合能力
    $("#compSetUpdata").on('click', function(){
        compIndexUpdate();
    });
}
$(document).ready(function(){
    loadHtml();
});

//主导航切换
function navMainGo(index){
    var active = "on";
    var $navtabs = $("#pageNavTabs");
    var $navtab = $navtabs.find(".navtab");
    var $navcons = $("#pageNavCons");
    var $navcon = $navcons.find(".navcon");
    var $setParaIn = $("#setParaIn");
    $navtab.removeClass(active).eq(index).addClass(active);
    $navcon.removeClass(active).eq(index).addClass(active);
    switch(index){
        case 0:
            $setParaIn.show();
            if(!hasAjaxArr[0]){
                weightInit();
            }
            break;
        case 1:
            $setParaIn.hide();
            if(!hasAjaxArr[1]){
                compInit();
            }
            break;
    }
}

/**********  医疗质量评价参数设置 ************/
//获取输入参数
function getInData(){
    var inputData = {};
    inputData.drgClass = getDrgClass();
    inputData.mdcId = $("#mdcRes").attr("data-select");
    inputData.drgId = $("#drgsRes").attr("data-select");
    return inputData;
}

//医疗质量评价参数设置
function weightInit(){
    var $subSetBody = $("#weightSetBody");
    var $preSetLoad = $subSetBody.find(".subset-load");
    var $preSetContent = $subSetBody.find(".subset-content");
    //显示加载动画
    $preSetContent.hide();
    $preSetLoad.show();
    //获取服务器数据
    var inData = new getInData();
    if((typeof(inData.mdcId) == 'undefined') || (typeof(inData.drgId) == 'undefined')){
        return ;
    }
    $.ajax({
        type: "get",
        url: "ruleManager/medicalQualityWeight/index",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var res = jsonData['success'];
            if(res){
                weightIndexInit(jsonData['data']);
            }else{
                $preSetLoad.hide();
                layer.msg( "获取失败", {icon: 2, time: 3000});
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
//显示指标列表
function weightIndexInit(jsonData){
    var $subSetDemo = $("#weightSetDemo");
    var $subSetBody = $("#weightSetBody");
    var $preSetLoad = $subSetBody.find(".subset-load");
    var $preSetMain = $subSetBody.find(".subset-main");
    var $preSetContent = $subSetBody.find(".subset-content");
    var sliderOpt = {
        min: 0,
        max: 10,
        value: 5,
        step: 1,
        precision: 0,
        tooltip: 'show',
        handle: 'square',  //'round', 'square', 'triangle' 或 'custom'
        natural_arrow_keys: true
    };
    $preSetMain.html(""); //清空内容
    for(var para in jsonData){
        if(para == "drgId"){
            continue;
        }
        var curValue = 5;
        curValue = parseInt(jsonData[para]);
        var $subSetCon = $($subSetDemo.html()).clone();
        var $indexName = $subSetCon.find(".indexname");
        var $sliderElem = $subSetCon.find(".dragbar");
        $subSetCon.attr("data-id", para);
        $indexName.text(medicalIndexName[para]);
        $sliderElem.slider(sliderOpt);
        $sliderElem.slider('setValue', curValue);
        //添加当前指标行
        $preSetMain.append($subSetCon[0]);
    }
    //显示内容
    $preSetLoad.hide();
    $preSetContent.show();
    hasAjaxArr[0] = true;
}

//保存指标
function weightIndexUpdate(){
    //设置到服务器
    function weightIndexSave(inData){
        //获取服务器数据
        $.ajax({
            type: "post",
            url: "ruleManager/medicalQualityWeight/update",
            dataType: "json",
            data: inData,
            jsonp: "callback",
            success: function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('设置成功！', {icon: 1, time: 1000});
                }
                else{
                    layer.msg(jsonData['message'], {icon: 2, time: 1000});
                }
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    var $subSetBody = $("#weightSetBody");
    var inData = new getInData();
    var $subSetCon = $subSetBody.find(".subset-con");
    var indexSize = $subSetCon.size();
    for(var m=0; m<indexSize; m++){
        var $curSetCon =  $subSetCon.eq(m);
        var indexId  = $curSetCon.attr("data-id");
        var $sliderElem = $curSetCon.find(".dragbar");
        var indexVal = $sliderElem.slider('getValue');
        inData[indexId] = indexVal;
    }
    var msgStr = "本次修改将重置当前DRGs的各评价指标权重系数，系统将以您本次修改记录为标准重新计算。<br/>您确定执行本次修改？";
    if(inData.drgId == ''){
        msgStr = "1、由于您有更改个别DRGs评价指标权重系数历史，导致DRGs各项指标权重系数存在不一致情况。2、当前显示各指标权重系数是系统默认值。您是否要重置所有DRGs指标权重系数？";
    }
    //询问框
    layer.confirm( msgStr, {
        title: ['注意',"color:#FFF;background:#4376a7;"],
        btn: ['确定','取消'] //按钮
    }, function(){
        weightIndexSave(inData);
    }, function(){
        return ;
    });
}

/************** 综合能力评价参数设置 *****************/

//综合能力评价参数设置
function compInit(){
    var $subSetBody = $("#compSetBody");
    var $preSetLoad = $subSetBody.find(".subset-load");
    var $preSetContent = $subSetBody.find(".subset-content");
    //显示加载动画
    $preSetContent.hide();
    $preSetLoad.show();
    //获取服务器数据
    $.ajax({
        type: "get",
        url: "ruleManager/comAbilityWeight/index",
        dataType:"json",
        data: "",
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var res = jsonData['success'];
            if(res){
                compIndexInit(jsonData['data']);
            }else{
                $preSetLoad.hide();
                layer.msg( "获取失败", {icon: 2, time: 3000});
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
//显示指标列表
function compIndexInit(jsonData){
    var $subSetDemo = $("#compSetDemo");
    var $subSetBody = $("#compSetBody");
    var $preSetLoad = $subSetBody.find(".subset-load");
    var $preSetMain = $subSetBody.find(".subset-main");
    var $preSetContent = $subSetBody.find(".subset-content");
    var sliderOpt = {
        min: 0,
        max: 10,
        value: 5,
        step: 1,
        precision: 0,
        tooltip: 'show',
        handle: 'square',  //'round', 'square', 'triangle' 或 'custom'
        natural_arrow_keys: true
    };
    $preSetMain.html(""); //清空内容
    for(var para in jsonData){
        var curValue = 5;
        curValue = parseInt(jsonData[para]);
        var $subSetCon = $($subSetDemo.html()).clone();
        var $indexName = $subSetCon.find(".indexname");
        var $sliderElem = $subSetCon.find(".dragbar");
        $subSetCon.attr("data-id", para);
        $indexName.text(compIndexName[para]);
        $sliderElem.slider(sliderOpt);
        $sliderElem.slider('setValue', curValue);
        //添加当前指标行
        $preSetMain.append($subSetCon[0]);
    }
    //显示内容
    $preSetLoad.hide();
    $preSetContent.show();
    hasAjaxArr[1] = true;
}

//保存指标
function compIndexUpdate(){
    //设置到服务器
    function compIndexSave(inData){
        //获取服务器数据
        $.ajax({
            type: "post",
            url: "ruleManager/comAbilityWeight/update",
            dataType: "json",
            data: inData,
            jsonp: "callback",
            success: function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('设置成功！', {icon: 1, time: 1000});
                    hasAjaxArr[1] = false;
                }
                else{
                    layer.msg(jsonData['message'], {icon: 2, time: 1000});
                }
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    var $subSetBody = $("#compSetBody");
    var inData = {};
    var $subSetCon = $subSetBody.find(".subset-con");
    var indexSize = $subSetCon.size();
    for(var m=0; m<indexSize; m++){
        var $curSetCon =  $subSetCon.eq(m);
        var indexId  = $curSetCon.attr("data-id");
        var $sliderElem = $curSetCon.find(".dragbar");
        var indexVal = $sliderElem.slider('getValue');
        inData[indexId] = indexVal;
    }
    //询问框
    var msgStr = "本次修改将重置所有DRGs的各评价指标权重系数，系统将以您本次修改记录为标准重新计算。<br/>您确定执行本次修改？";
    layer.confirm( msgStr, {
        title: ['注意',"color:#FFF;background:#4376a7;"],
        btn: ['确定','取消'] //按钮
    }, function(){
        compIndexSave(inData);
    }, function(){
        return ;
    });
}
