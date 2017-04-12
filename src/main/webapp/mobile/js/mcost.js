/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //消费扫描
    $("#costScan").on('click', function(){
        scanTwoCode();
    });

    var hrefPara = GetRequest();
    if(typeof(hrefPara.shopId)!='undefined'){
        var shopId = hrefPara.shopId;
        scanTwoCode(shopId);
    }
}
$(document).ready(function(){
    mTabbarStyleGo(1);
    loadhtml();
});

//扫描二维码
function scanTwoCode(id){
    if(isLogin){
        layer.msg('未登录，请先登录', {icon:0, shade:0.5, time: 1000});
        window.location.href = mUrlBase + "/mlogin";
        return ;
    }
    $("#costNum").val('');
    layerPopShow({
        title: ["提示"],
        offset: '160px',
        yes: function(){
            var $costNum = $("#costNum");
            var shId = '29';
            if(typeof(id) != 'undefined'){
                shId = id;
            }
            var inData = {
                shopId: shId,
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
                        layer.closeAll('page');
                        layer.msg(jsonData['msg'], {icon: 1, shade:0.5, time: 1000});
                    },
                    error:function(error){
                        console.log(error);
                        layer.msg('消费失败！', {icon: 2, shade:0.5, time: 1000});
                    }
                });
            }while(0);
        }
    });
}
