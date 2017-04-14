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

//canvas画边框
function drawStroke(option){
    var context = option.elem.getContext('2d');
    context.beginPath();
    context.rect(0, 0, option.width, option.height);
    context.lineWidth = 2;
    context.strokeStyle = '#FFF';
    context.stroke();
}
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
    
    //var costHref = location.protocol + "//" + "192.168.0.110:8280" + rootPath + "/mcost?shopId=" + id;
    //var costHref = location.protocol + "//" + "10.111.123.5:8980" + rootPath + "/mcost?shopId=" + id;
    var costHref = "http://35.160.177.181:8080/wxms/mcost?shopId=" + id;

    var $twocode = $("#twocode");
    $twocode.empty();
    costHref = toUtf8(costHref);
    $twocode.qrcode({
        render: "canvas",
        width: 120,
        height: 120,
        text: costHref,
        src: ''             //二维码中间的图片
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
        text: content,
        src: ''             //二维码中间的图片
    });
    //画边框
    var canvas = $twocodeImg.find('canvas').get(0);
    drawStroke({
        elem: canvas,
        width: 400,
        height: 400
    });
    dlCanvasImgInit({
        canvasElem: $twocodeImg.find('canvas')[0],
        dlElem: document.getElementById("twocodeDl"),
        fileName: "qr",
        imgType: 'jpg'
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
    //图片下载
    function downloadImg(setting){
        var type = setting.imgType;
        var filename = setting.fileName;
        var fixType = function (type) {
            type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
            var res = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + res;
        };
        var canvasElem = setting.canvasElem;
        var dlElem = setting.dlElem;
        var imgType = fixType(type);
        var imgData = canvasElem.toDataURL(imgType).replace(imgType, 'image/octet-stream');
        dlElem.href = imgData;
        var imgName = filename + '.' + type;
        dlElem.download = imgName;
        //事件创建
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, false); //initEvent 不加后两个参数在FF下会报错
        // dlElem.dispatchEvent(evt);
    }
    downloadImg(setting);
}