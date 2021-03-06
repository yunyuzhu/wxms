/**
 * Created by chun
 */
var appActInfo;
//加载页面
function loadhtml(){
    inSubmit();
}
$(document).ready(function(){
    //增加阅读量
    addReadCount();
    loadhtml();
});
//增加阅读量
function addReadCount(){
    //获取id
    var hrefPara = GetRequest();
    var inData = {
        id: hrefPara['id']
    };
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalActivity/updateCount",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
        },
        error:function(error){
            console.log(error);
        }
    });
}
//提交
function inSubmit(){
    //初始化
    appActInfo = new Vue({
        el: '#mActInfoPanel',
        data: {'title': '', 'count': '', 'time': '', 'content': ''}
    });
    //获取id
    var hrefPara = GetRequest();
    var inData = {
        id: hrefPara['id']
    };
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalActivity/query",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            appActInfo.title = jsonData["title"];
            appActInfo.count = jsonData["count"];
            appActInfo.time = jsonData["createTime"];
            appActInfo.content = jsonData["content"];
        },
        error:function(error){
            console.log(error);
            layer.msg("活动内容加载失败");
        }
    });
}