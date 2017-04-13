/**
 * Created by chun
 */
var appList;
//数据初始化
function appDataInit(){
    //列表
    appList = new Vue({
        el: '#streamList',
        data: {
            'items': [
                {id: "", name: "", money: "", flag: "",time: ''}
            ],
            'show': true
        }
    });
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
    var setting = {start: 0, size: 5};
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
    loadList();
}
//加载列表
function loadList(){
    var inData = new getInData();
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/consumeStream",
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
                        name: curObj["tenantName"],
                        money: curObj["consumeMoney"],
                        time: curObj["consumeTime"],
                        flag: curObj["flag"]
                    };
                    dataRows[i] = tmpObj;
                }
                appList.items = dataRows;
                appList.show = true;
            }
            else{
                appList.show = false;
            }
        },
        error:function(error){
            console.log(error);
            appList.show = false;
        }
    });
}