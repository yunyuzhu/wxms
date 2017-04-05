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
        url: "tenant/baseInfo",
        dataType:"json",
        data: "",
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            appShopAccount.baseinfo = {
                name:   jsonData['tenantName'],
                trade:  jsonData['trade'],
                addr:   jsonData['address'],
                tel:    jsonData['telephone']
            };
            appShopAccount.linkman = {
                name:   jsonData['linkName'],
                tel:    jsonData['linkPhone']
            };
            drawTwocode(jsonData['id']);
        },
        error:function(error){
            console.log(error);
        }
    });
}
$(document).ready(function(){
    loadhtml();
});

//二维码生成
function drawTwocode(id){
    function toUtf8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            }
        }
        return out;
    }
    var costHref = "http://192.168.0.106:8280/mcost?shopId="+id;
    var $twocode = $("#twocode");
    $twocode.empty();
    costHref = toUtf8(costHref);
    $twocode.qrcode({
        render: "canvas",
        width: 120,
        height: 120,
        text: costHref
    });
}