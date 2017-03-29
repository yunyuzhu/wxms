/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //加载初始数据
    var appShConvertRule = new Vue({
        el: '#shConvertRule',
        data: { 'rate': "" }
    });
    $.ajax({
        type: "get",
        url: "tenant/rule",
        dataType:"json",
        data: "",
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            appShConvertRule.rate = jsonData;
        },
        error:function(error){
            console.log(error);
        }
    });
}
$(document).ready(function(){
    loadhtml();
});
