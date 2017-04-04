/**
 * Created by chun
 */

var appActInfo;
//加载页面
function loadhtml(){
    mTabbarStyleGo(1);
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});

//提交
function inSubmit(){
    scanTwoCode();
    //发送服务器
    /*$.ajax({
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
    });*/
}

//扫描二维码
function scanTwoCode(){

    layerPopShow({
        title: ["提示"]
    });
    /*
    layer.prompt({title: '输入消费金额', formType: 1}, function(pass, index){
        layer.close(index);
    });*/
}
