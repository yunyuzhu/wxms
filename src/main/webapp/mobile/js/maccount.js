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
        url: mUrlBase + "/portalAccount/myAccount",
        dataType: "json",
        data: '',
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            document.getElementById("name").innerHTML = jsonData["name"];
            document.getElementById("sex").innerHTML = jsonData["sex"];
            document.getElementById("age").innerHTML = jsonData["age"];
            document.getElementById("phone").innerHTML = jsonData["phone"];
        },
        error:function(error){
            console.log(error);
            layer.msg("账户信息加载失败");
        }
    });
}