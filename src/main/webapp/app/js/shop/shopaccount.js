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
    var costHref = location.protocol + "//" + location.host + "/mcost?shopId=" + id;
    var $twocode = $("#twocode");
    $twocode.empty();
    costHref = toUtf8(costHref);
    $twocode.qrcode({
        render: "canvas",
        width: 120,
        height: 120,
        text: costHref
    });
    //下载链接
    twocodeImgLink(costHref)
}

//二维码图片下载
function twocodeImgLink(content){
    var $twocodeImg = $("#twocodeImg");
    $twocodeImg.qrcode({
        render: "canvas",
        width: 400,
        height: 400,
        text: content
    });
    dlCanvasImgInit({
        canvasElem: $twocodeImg.find('canvas')[0],
        dlElem: document.getElementById("twocodeDl"),
        fileName: "消费扫描二维码图片",
        imgType: 'png'
    });
}
//图片下载
function dlCanvasImgInit(option){
    var setting = {
        canvasElem: document.getElementsByTagName('canvas')[0],
        dlElem: '',
        fileName: (new Date().toLocaleDateString()),
        imgType: 'png'
    };
    if(typeof(option) == 'undefined'){option={}}
    if(typeof(option) == 'object'){
        setting = extendOpt(setting , option);
    }
    var canvasElem = setting.canvasElem;
    var dlElem = setting.dlElem;
    //图片下载
    function downloadImg(type, filename){
        var fixType = function (type) {
            type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
            var res = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + res;
        };
        var imgType = fixType(type);
        var imgData = canvasElem.toDataURL(imgType).replace(imgType, 'image/octet-stream');
        dlElem.href = imgData;
        var imgName = filename + '.' + type;
        dlElem.download = imgName;
        //事件创建
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, false); //initEvent 不加后两个参数在FF下会报错
        dlElem.dispatchEvent(evt);
    }
    //下载点击事件
    dlElem.onclick = function(){
        downloadImg('png', setting.fileName);
    };
}