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
    var inData = {
        pageStart: 0,
        pageSize: 200
    };
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/goldStream",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);

        },
        error:function(error){
            console.log(error);
            layer.msg("金币明细加载失败");
        }
    });
}