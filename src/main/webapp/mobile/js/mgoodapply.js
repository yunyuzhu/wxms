/**
 * Created by chun
 */
var appGoodsList;
//扫描页面跳转
function applyPageGo(index){
    var $tabPage = $("#tabPage");
    var $successPage = $("#successPage");
    var pageIndex = 0;
    if((typeof(index) != 'undefined')&&(index < 2)){
        pageIndex = index;
    }
    switch(pageIndex){
        case 0:
            $successPage.hide();
            $tabPage.show();
            break;
        case 1: //提交成功
            $tabPage.hide();
            $successPage.show();
            break;
    }
}
//数据初始化
function appDataInit(){
    //活动列表
    appGoodsList = new Vue({
        el: '#goodsList',
        data: {
            'items': [
                {id: "", name: "", price: ""}
            ],
            'show': true
        }
    });
}
appDataInit();
//加载页面
function loadhtml(){
    $("#goodsList").on('click', "input[type=checkbox]",function(){
        calTotalGold();
    });
    //活动
    goodsList();
    //提交申请
    $("#inSubmit").on('click', function(){
        if(isLogin()){
            inSubmit();
        }
        else{
            layer.msg("未登录，请先登录");
            setTimeout(function(){
                window.location.href = mUrlBase+"/mlogin";
            }, 500);
        }
    });
}
$(document).ready(function(){
    applyPageGo(0);
    loadhtml();
});
//计算总额
function calTotalGold(){
    var $totalGold = $("#totalGold");
    var $List = $("#goodsList");
    var $checkItems = $List.find('input[name=goodsapply]:checked');
    var priceArr= [];
    var total = 0;
    var checkSize = $checkItems.size();
    for(var i=0; i<checkSize; i++){
        var $item = $checkItems.eq(i);
        total += parseInt($item.attr('data-price'));
    }
    $totalGold.text(total);
}
//输入参数
function getInData(option){
    var setting = {start: 0, size: 10};
    if(typeof(option) == 'undefined'){var option={};}
    if(typeof(option) == 'object'){
        for(var key in option){
            setting[key] = option[key];
        }
    }
    var inData = {};
    inData.pageStart = setting.start;
    inData.pageSize  = setting.size;
    return inData;
}
//商品列表
function goodsList(){
    var inData = new getInData();
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalGoods/changeList",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var dataRows  = jsonData['rows'];
            var dataTotal = jsonData['total'];
            if(dataTotal > 0) {
                var arrSize = dataRows.length;
                for (var i = 0; i < arrSize; i++) {
                    var curObj = dataRows[i];
                    var tmpObj = {
                        id: curObj["id"],
                        name: curObj["name"],
                        price: curObj["price"]
                    };
                    dataRows[i] = tmpObj;
                }
                appGoodsList.items = dataRows;
                appGoodsList.show = true;
            }
            else{
                appGoodsList.show = false;
            }
        },
        error:function(error){
            console.log(error);
            appGoodsList.show = false;
        }
    });
}
//选中
function applyAddDef(){
    var hrefPara = GetRequest();
    if(typeof(hrefPara.id)!='undefined'){
        var id = hrefPara.id;
        var ids = [];
        ids.push(id);
        applyChecked(ids);
    }
}
//设置选中
function applyChecked(ids){
    var idArr = [];
    if(typeof(ids) == 'undefined'){var ids=[];}
    if(ids.length > 0){
        idArr = ids;
    }
    var $List = $("#goodsList");
    for(var i=0, arrSize = idArr.length; i<arrSize; i++){
        var $checkbox = $List.find('input[id='+idArr[i]+']');
        $checkbox.trigger('click');
    }
}
//提交申请
function inSubmit(){
    var $List = $("#goodsList");
    var $checkItems = $List.find('input[name=goodsapply]:checked');
    var idArr= [];
    var priceArr= [];
    var checkSize = $checkItems.size();
    for(var i=0; i<checkSize; i++){
        var $item = $checkItems.eq(i);
        idArr.push($item.attr('id'));
        priceArr.push($item.attr('data-price'));
    }
    do{
        if(idArr.length == 0){
            layer.msg("未选中任何商品");
            break;
        }
        //总额与余额比较
        var total = 0;
        for(var m=0,size=priceArr.length; m<size; m++){
            total += parseInt(priceArr[m]);
        }
        //获取余额
        $.ajax({
            type: "get",
            url: mUrlBase + "/portalAccount/gold",
            dataType: "json",
            data: '',
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var myGold = 0;
                myGold = parseInt(jsonData);
                if(total > myGold){
                    layer.msg("所选商品总计金币总额不能大于金币余额");
                    return;
                }
                var inData = {
                    ids: idArr.join(','),
                    prices: priceArr.join(',')
                };
                $.ajax({
                    type: "get",
                    url: mUrlBase + "/portalGoods/changeGoods",
                    dataType: "json",
                    data: inData,
                    async: false,
                    jsonp: "callback",
                    success:function(data){
                        var jsonData = eval(data);
                        var msg = jsonData['msg'];
                        //成功提示
                        applyPageGo(1);
                    },
                    error:function(error){
                        console.log(error);
                    }
                });
            },
            error:function(error){
                console.log(error);
                layer.msg("请重新提交申请");
            }
        });
    }while(0);
}