/**
 * Created by chun
 */
var shopId = null;
var decoderTimer;
//扫描页面跳转
function costPageGo(index){
    var $tabPage = $("#tabPage");
    var $scanPage = $("#scanPage");
    var $successPage = $("#successPage");
    var pageIndex = 0;
    if((typeof(index) != 'undefined')&&(index < 3)){
        pageIndex = index;
    }
    switch(pageIndex){
        case 0:
            $scanPage.hide();
            $successPage.hide();
            $tabPage.show();
            break;
        case 1: //扫描成功
            $tabPage.hide();
            $successPage.hide();
            $scanPage.show();
            break;
        case 2: //提交成功
            $tabPage.hide();
            $scanPage.hide();
            $successPage.show();
            break;
    }
}
//加载页面
function loadhtml(){
    costPageGo(0);
    //消费提交
    $("#costSubmit").on('click', function(){
        costSubmit();
    });
    var hrefPara = GetRequest();
    if(typeof(hrefPara.shopId)!='undefined'){
        var shopId = hrefPara.shopId;
        scanInfo(shopId);
    }else{
        //启动扫描
        scanStart();
    }
}
$(document).ready(function(){
    mTabbarStyleGo(1);
    loadhtml();
});
//启动扫描
function scanStart(){
    Webcam.set({
        width: 240,
        height: 320,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    //获取camera设备
    if(window.MediaStreamTrack.getSources){
        window.MediaStreamTrack.getSources(function (sourceInfos) {
            var exArray = []; //存储设备源ID
            for (var i = 0; i != sourceInfos.length; ++i) {
                var sourceInfo = sourceInfos[i];
                //这里会遍历audio,video，所以要加以区分
                if (sourceInfo.kind === 'video') {
                    exArray.push(sourceInfo.id);
                }
            }
            //camera on
            Webcam.reset();
            var exNum = exArray.length;
            //0为前置摄像头，1为后置
            switch(exNum){
                case 1:
                    Webcam.attach('#screenDiv', exArray[0]);
                    break;
                case 2:
                    Webcam.attach('#screenDiv', exArray[1]);
                    break;
                default:
                    Webcam.attach('#screenDiv');
            }
            setTimeout(function(){
                decodeQR();
            },2000);
        });
    }
    else{
        //camera on
        Webcam.reset();
        Webcam.attach('#screenDiv');
        setTimeout(function(){
            decodeQR();
        },2000);
    }
}
//解码
function decodeQR(){
    var qr = new QCodeDecoder();
    if(decoderTimer){
        clearInterval(decoderTimer);
    }
    decoderTimer = setInterval(function(){
        webcamSnap();
    }, 100);
    function webcamSnap(){
        Webcam.snap(function(data_uri) {
            qr.decodeFromImage(data_uri, function(er, res){
                if(isString(res)&&((res.indexOf('http') != -1)||(res.indexOf('www') != -1))){
                    clearInterval(decoderTimer);
                    layer.msg('识别成功');
                    //camera off
                    Webcam.reset();
                    $('#screenDiv').empty();
                    setTimeout(function(){
                        window.location.href = res;
                    }, 500);
                }
            });
        });
    }
}
//商户信息
function setShopInfo(id){
    var scanInfoInit= function(option){
        var setting = {tenantName: '', telephone: '', address: ''};
        if(typeof(option) == 'undefined'){var option={};}
        if(typeof(option) == 'object'){
            for(var key in option){
                setting[key] = option[key];
            }
        }
        var $tenantName = $("#tenantName");
        var $telephone = $("#telephone");
        var $address = $("#address");
        $tenantName.text(setting.tenantName);
        $telephone.text(setting.telephone);
        $address.text(setting.address);
    };
    //初始化清空
    scanInfoInit();
    var inData = {userId: id};
    //发送服务器
    $.ajax({
        type: "get",
        url: "shop/viewUser",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var scanData = {
                tenantName: jsonData["tenantName"],
                telephone: jsonData["telephone"],
                address: jsonData["address"]
            };
            scanInfoInit(scanData);
        },
        error:function(error){
            console.log(error);
        }
    });
}
//扫描信息
function scanInfo(id){
    shopId = id;
    if(!isLogin()){
        layer.msg('未登录，请先登录', {icon:0, shade:0.5, time: 1000});
        window.location.href = mUrlBase + "/mlogin?shopId="+id;
        return ;
    }
    //设置商户信息
    setShopInfo(id);
    $("#costNum").val('');
    costPageGo(1);
}
//消费提交
function costSubmit(){
    var $loadingToast = $('#loadingToast');
    var $costNum = $("#costNum");
    var inData = {
        shopId: shopId,
        consumeMoney: $costNum.val()
    };
    do{
        if(inData.consumeMoney == ''){
            layer.msg('金额数不能为空');
            break;
        }
        var inVal = Number(inData.consumeMoney);
        if(isNaN(inVal)){
            layer.msg('金额数必须为数字');
            break;
        }
        if(inVal <= 0){
            layer.msg('金额数必须大于0');
            break;
        }
        if(isNull(inData.shopId)){
            break;
        }
        //加载提示
        $loadingToast.fadeIn(100);
        //发送服务器
        $.ajax({
            type: "get",
            url: "portalAccount/saveGold",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = jsonData['msg'];
                layer.closeAll();
                $loadingToast.fadeOut(100);
                //提交完成
                costPageGo(2);
            },
            error:function(error){
                console.log(error);
                layer.msg('消费失败！', {icon: 2, shade:0.5, time: 1000});
            }
        });
    }while(0);
}
