/**
 * Created by chun
 */
var appActList;
//加载页面
function loadhtml(){
    mTabbarStyleGo(0);
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});

//提交
function inSubmit(){
    //初始化
    appActList = new Vue({
        el: '#mActivityPanel',
        data: {
            'items': []
        }
    });
    var inData = {
        pageSize: 100,
        pageStart: 0
    };
    //发送服务器
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
                listLoad(dataRows)
            }
        },
        error:function(error){
            console.log(error);
            layer.msg("获取活动列表失败");
        }
    });
}
//列表加载
function listLoad(dataArr){
    var vueArr = [];
    var arrSize = dataArr.length;
    for (var i = 0; i < arrSize; i++) {
        var curObj = dataArr[i];
        var curHref = rootPath+"mactinfo?id="+curObj["id"];
        var tmpObj = {
            "id": curObj["id"],
            "title": curObj["title"],
            "href": curHref
        };
        vueArr.push(tmpObj);
    }
    appActList.items = vueArr;
}