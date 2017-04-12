/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    inSubmit();
}
$(document).ready(function(){
    mTabbarStyleGo(3);
    loadhtml();
});

//提交
function inSubmit(){
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/gold",
        dataType: "json",
        data: '',
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            document.getElementById("num").innerHTML = jsonData;
        },
        error:function(error){
            console.log(error);
            layer.msg("加载失败");
        }
    });
}