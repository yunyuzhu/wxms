/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //加载初始数据
    var appRule = new Vue({
        el: '#shConvertRule',
        data: {
            rate: "",
            remark: ""
        }
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
            appRule.rate = jsonData['rate'];
            appRule.remark = jsonData['remark'];
        },
        error:function(error){
            console.log(error);
        }
    });
}
$(document).ready(function(){
    loadhtml();
});
