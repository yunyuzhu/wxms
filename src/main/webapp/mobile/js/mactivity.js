/**
 * Created by chun
 */
var appActList;
//数据初始化
function appDataInit(){
    //活动列表
    appActList = new Vue({
        el: '#actList',
        data: {
            'items': [
                {id: "", title: "", abstract: "", time: "", count: ""}
            ],
            'show': true
        }
    });
}
appDataInit();
//加载页面
function loadhtml(){
    mTabbarStyleGo(2);
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
    //活动
    actList();
}
//活动列表
function actList(){
    var inData = new getInData({start: 0, size: 10});
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalActivity/activityList",
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
                    var curHref = mUrlBase + "/mactinfo?id="+curObj["id"];
                    var tmpObj = {
                        id: curObj["id"],
                        href: curHref,
                        title: curObj["title"],
                        abstract: curObj["activityAbstract"],
                        time: curObj["createTime"],
                        count: curObj["count"]
                    };
                    dataRows[i] = tmpObj;
                }
                appActList.items = dataRows;
                appActList.show = true;
            }
            else{
                appActList.show = false;
            }
        },
        error:function(error){
            console.log(error);
            appActList.show = false;
        }
    });
}