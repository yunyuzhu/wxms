/**
 * Created by chun
 */
var appList;
var pageNum = 0;
//数据初始化
function appDataInit(){
    //列表
    appList = new Vue({
        el: '#streamList',
        data: {
            'items': [
                {id: "",name: "", goldNum: "",time: '' ,flag: ''}
            ]
        }
    });
    //默认清空
    appList.items = [];
}
appDataInit();
//加载页面
function loadhtml(){
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});

//输入参数
function getInData(option){
    var setting = {start: 0, size: 10};
    if(typeof(option) == 'undefined'){var option={};}
    if(typeof(option) == 'object'){
        for(var key in option){
            setting[key] = option[key];
        }
    }
    var inData = {};
    inData.pageStart = setting.start;
    inData.pageSize  = setting.size;
    return inData;
}
//提交
function inSubmit(){
    //列表
    dropLoadAuto();
}
//底部自动加载
function dropLoadAuto(){
    $('#dropWrap').dropload({
        scrollArea : $('#dropWrap'),
        threshold  : 30,
        autoLoad : true,
        loadDownFn : function(me){
            var inData = new getInData({start: (pageNum++)*10 , size:10});
            $.ajax({
                type: "get",
                url: mUrlBase + "/portalAccount/changeStream",
                dataType: "json",
                data: inData,
                async: false,
                jsonp: "callback",
                success:function(data){
                    var jsonData = eval(data);
                    var dataRows  = jsonData['rows'];
                    var dataTotal = dataRows.length;
                    if(dataTotal > 0) {
                        var arrSize = dataRows.length;
                        for (var i = 0; i < arrSize; i++) {
                            var curObj = dataRows[i];
                            var tmpObj = {
                                id: curObj["id"],
                                name: curObj["name"],
                                goldNum: curObj["goldNum"],
                                time: curObj["consumeTime"],
                                flag: curObj["flag"]
                            };
                            dataRows[i] = tmpObj;
                        }
                        appList.items = appList.items.concat(dataRows);
                    }
                    else{
                        // 无数据
                        me.lock();
                        me.noData();
                    }
                    setTimeout(function(){
                        me.resetload();
                    }, 100);
                },
                error:function(error){
                    console.log(error);
                    me.noData();
                    setTimeout(function(){
                        me.resetload();
                    }, 1000);
                }
            });
        }
    });
}
//加载列表
function loadList(){
    var inData = new getInData();
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/changeStream",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var dataRows  = jsonData['rows'];
            var dataTotal = jsonData['total'];
            if(dataTotal > 0) {
                var arrSize = dataRows.length;
                for (var i = 0; i < arrSize; i++) {
                    var curObj = dataRows[i];
                    var tmpObj = {
                        id: curObj["id"],
                        name: curObj["name"],
                        goldNum: curObj["goldNum"],
                        time: curObj["consumeTime"],
                        flag: curObj["flag"]
                    };
                    dataRows[i] = tmpObj;
                }
                appList.items = appList.items.concat(dataRows);
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}