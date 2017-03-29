/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //加载初始数据
    var appShConvertRule = new Vue({
        el: '#shConvertRule',
        data: {
            'rate': ""
        }
    });
    $.ajax({
        type: "get",
        url: "index/info",
        dataType:"json",
        data: "",
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            appShConvertRule.rate = "1:1";
        },
        error:function(error){
            console.log(error);
        }
    });
}
$(document).ready(function(){
    loadhtml();
});
