/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    mTabbarStyleGo(1);

    //消费扫描
    $("#costScan").on('click', function(){
        scanTwoCode();
    });
    scanTwoCode();
}
$(document).ready(function(){
    loadhtml();
});

//扫描二维码
function scanTwoCode(){
    layerPopShow({
        title: ["提示"],
        offset: '160px',
        yes: function(){
            var $costNum = $("#costNum");
            var inData = {
                shopId: '1',
                consumeMoney: $costNum.val()
            };
            do{
                if(!EmptyCheck($costNum, inData.consumeMoney, "输入金额数不能为空")){
                    break;
                }
                if(inData.consumeMoney < 0){
                    tipShow($costNum, "金额数不能小于0");
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
