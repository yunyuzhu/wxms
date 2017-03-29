/**
 * Created by chun
 */

//加载页面
function loadhtml(){
    //加载初始数据
    var appShopAccount = new Vue({
        el: '#shopAccount',
        data: {
            'baseinfo': {
                name: "",
                trade: "",
                addr: "",
                tel: ""
            },
            'linkman': {
                name: "",
                tel: ""
            }
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
            appShopAccount.baseinfo = {
                name: "COCO奶茶",
                trade: "餐饮",
                addr: "成都市xxx",
                tel: "1511111111"
            };
            appShopAccount.linkman = {
                name: "COCO奶茶",
                tel: "1511111111"
            };
        },
        error:function(error){
            console.log(error);
        }
    });
}
$(document).ready(function(){
    loadhtml();
});
