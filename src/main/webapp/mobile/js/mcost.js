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
    var exArray = []; //存储设备源ID
    MediaStreamTrack.getSources(function (sourceInfos) {
        for (var i = 0; i != sourceInfos.length; ++i) {
            var sourceInfo = sourceInfos[i];
            //这里会遍历audio,video，所以要加以区分
            if (sourceInfo.kind === 'video') {
                exArray.push(sourceInfo.id);
            }
        }
        Webcam.reset();
        Webcam.attach('#screenDiv', exArray);
        setTimeout(function(){
            decodeQR();
        },2000);
    });
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
                // console.log(res);
                if(res.indexOf('http') != -1){
                    clearInterval(decoderTimer);
                    $('#screenDiv').empty();
                    layer.msg('扫描成功', {icon:0, shade:0.5, time: 1000});
                    window.location.href = res;
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
        window.location.href = mUrlBase + "/mlogin";
        return ;
    }
    //设置商户信息
    setShopInfo(id);
    $("#costNum").val('');
    costPageGo(1);
}
//消费提交
function costSubmit(){
    var $costNum = $("#costNum");
    var inData = {
        shopId: shopId,
        consumeMoney: $costNum.val()
    };
    do{
        if(!EmptyCheck($costNum, inData.consumeMoney, "输入金额数不能为空")){
            break;
        }
        if(inData.consumeMoney <= 0){
            tipShow($costNum, "金额数必须大于0");
            break;
        }
        tipHide();
        if(isNull(inData.shopId)){
            break;
        }
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
