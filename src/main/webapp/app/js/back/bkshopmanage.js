/**
 * Created by chun
 */
var tmpIdArr;
var shopAreaWH = ['800px', 'auto'];
//加载页面
function loadhtml(){
    //加载行业列表
    TradeList();

    //注册提交按钮
    $("#inSubmit").on('click', function(){
        inSubmit();
    });
    //提交查询
    inSubmit();

    //增加
    $("#listAdd").on('click', function(){
        listAddShow();
    });
    //删除
    $("#listDel").on('click', function(){
        listDelFun();
    });

    //窗口大小调整
    $(window).on('resize', function(){
        setTimeout(function(){
            $("#listTable").bootstrapTable('resetView');
        }, 300);
    });
}
$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    listTableFun();
}
//输入参数
function getInData(params){
    var inData = {};
    inData.tenantName = $("#name").val();
    inData.trade = $("#trade").val();
    //表格参数
    if(typeof(params) != 'undefined'){
        inData.pageSize  = params.limit;
        inData.pageStart = params.offset;
    }
    return inData;
}

//列表
function listTableFun(){
    /************ 表格 **************/
    // 表格点击事件
    window.clickEvents = {
        'click .like': function(e, value, row, index) {
            listEditShow(tmpIdArr[index]);
        }
    };
    //格式化文本
    function linkTableFat(value, row, index) {
        var resTemp = '';
        resTemp = value;
        return [
            '<a class="like btn handlebtn" '+ ' data-id='+tmpIdArr[index]+ ' title="请点击">'+resTemp+'</a>'
        ];
    }
    // 表格
    function drawTable(){
        var $tableElem = $("#listTable");
        var classes = 'table table-hover tableStyle';
        //返回数据
        function resHandler(res) {
            var dataObj = {"rows": [], "total": 0};
            var jsonData = eval(res);
            var dataRows  = jsonData['rows'];
            var dataTotal = jsonData['total'];
            if(dataTotal > 0) {
                var idArr = [];
                var pageSize = dataRows.length;
                for (var i = 0; i < pageSize; i++) {
                    var curObj = dataRows[i];
                    var curArr = [];
                    curArr[1] = curObj['orderId'];
                    curArr[2] = curObj['tenantName'];
                    curArr[3] = curObj['trade'];
                    curArr[4] = curObj['linkName'];
                    curArr[5] = curObj['linkPhone'];
                    curArr[6] = "编辑";
                    dataRows[i] = curArr;
                    //记录id
                    idArr[i] = curObj['id'];
                }
                tmpIdArr = idArr;
                dataObj = {"rows": dataRows, "total": dataTotal};
            }
            return dataObj;
        }
        //输入参数
        function inParams(params) {
            var inData = new getInData(params);
            return inData;
        }
        $tableElem.bootstrapTable('destroy');
        $tableElem.bootstrapTable({
            method: 'get',
            contentType: "application/x-www-form-urlencoded",
            url: "shop/userPage",
            cache: false,
            dataType : 'json',
            queryParams: inParams,
            classes: classes,
            sortOrder: 'asc',
            striped: true,
            pagination: true,
            pageSize: 10,
            pageList: [10, 25, 50, 100, 200],
            search: false,
            showToggle : false,
            singleSelect : false,
            sidePagination:'server',    //设置为服务器端分页
            showColumns: false, //设置为True可显示表格显示/隐藏列表
            showRefresh: false, //设置为True可显示刷新按钮
            minimumCountColumns: 2, //表格显示/隐藏列表时可设置最小隐藏的列数
            clickToSelect: false,    //设置为True时点击行即可选中单选/复选框
            smartDisplay: true,  //设置为True智能显示分页或者Card View
            responseHandler: resHandler,    //在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
            columns: [
                { field: 0, width: "5%", align: 'center', valign: 'middle', halign: 'center', sortable: false, checkbox: true },
                { field: 1, width: "5%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 5, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 6, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
                    events: clickEvents, formatter: linkTableFat}
            ]
        });
    }
    //触发
    drawTable();
}
//弹窗信息初始化加载
function infoPopInit(options){
    var defOption = {
        userName: '', password: '', useFlag: '1',
        tenantName: '', trade: null, telephone: '', address: '', linkName: '',linkPhone: '', remark: ''
    };
    if (options === undefined){options = {};}
    if (typeof(options) === "object") {
        var setting = $.extend(false, {}, defOption, options);
        defOption = setting;
    }
    var $userPop = $("#userPop");
    var $passwordPop = $("#passwordPop");
    var $useFlagPop = $("#useFlagPop");
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $telPop = $("#telPop");
    var $addrPop = $("#addrPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");
    var $remarkPop = $("#remarkPop");

    $userPop.removeAttr('disabled').val(defOption.userName);
    $("#rowPasswordPop").show();
    $passwordPop.val(defOption.password);
    UseFlagList({defVal:defOption.useFlag});
    $namePop.val(defOption.tenantName);
    TradeList({id:"#tradePop", hasAll:false, defVal:defOption.trade});
    $telPop.val(defOption.telephone);
    $addrPop.val(defOption.address);
    $linkNamePop.val(defOption.linkName);
    $linkTelPop.val(defOption.linkPhone);
    $remarkPop.val(defOption.remark);
}

/*************  编辑  ****************/

//编辑保存
function listEditSave(id){
    var $userPop = $("#userPop");
    var $passwordPop = $("#passwordPop");
    var $useFlagPop = $("#useFlagPop");
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $telPop = $("#telPop");
    var $addrPop = $("#addrPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");
    var $remarkPop = $("#remarkPop");
    var inData = {
        userId: id,
        useFlag: $useFlagPop.val(),
        tenantName: $namePop.val(),
        trade: $tradePop.val(),
        telephone: $telPop.val(),
        address: $addrPop.val(),
        linkName: $linkNamePop.val(),
        linkPhone: $linkTelPop.val(),
        remark: $remarkPop.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        //发送服务器
        $.ajax({
            type: "get",
            url: "shop/updateUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.closeAll('page');
                    layer.msg('保存成功！', {icon: 1, time: 1000});
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    layer.msg(msg, {icon: 2, time: 1000});
                }
            },
            error:function(error){
                console.log(error);
                layer.msg('保存失败！', {icon: 2, time: 1000});
            }
        });
    }while(0);
}
//编辑显示
function listEditShow(id){
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
            var popData = {
                userName: jsonData["userName"],
                useFlag: jsonData["useFlag"],
                tenantName: jsonData["tenantName"],
                trade: jsonData["trade"],
                telephone: jsonData["telephone"],
                address: jsonData["address"],
                linkName: jsonData["linkName"],
                linkPhone: jsonData["linkPhone"],
                remark: jsonData["remark"]
            };
            //更新信息
            infoPopInit(popData);
            //禁止账户名，隐藏密码
            $("#userPop").attr('disabled', 'disabled');
            $("#rowPasswordPop").hide();
            //弹窗
            layerPopShow({
                title: ["商户信息"],
                area: shopAreaWH,
                yes: function(){
                    listEditSave(id);
                }
            });
        },
        error:function(error){
            console.log(error);
        }
    });
}

/*************  增加  ****************/
//增加保存
function listAddSave(){
    var $userPop = $("#userPop");
    var $passwordPop = $("#passwordPop");
    var $useFlagPop = $("#useFlagPop");
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $telPop = $("#telPop");
    var $addrPop = $("#addrPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");
    var $remarkPop = $("#remarkPop");
    var inData = {
        userName: $userPop.val(),
        password: $passwordPop.val(),
        useFlag: $useFlagPop.val(),
        tenantName: $namePop.val(),
        trade: $tradePop.val(),
        telephone: $telPop.val(),
        address: $addrPop.val(),
        linkName: $linkNamePop.val(),
        linkPhone: $linkTelPop.val(),
        remark: $remarkPop.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    //输入校验
    do{
        if(!EmptyCheck($userPop, inData.userName, "账户名不能为空")){
            break;
        }
        if(!PasswordCheck($passwordPop, inData.password)){
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: "shop/saveUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.closeAll('page');
                    layer.msg('保存成功！', {icon: 1, time: 1000});
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    layer.msg(msg, {icon: 2, time: 1000});
                }
            },
            error:function(error){
                console.log(error);
                layer.msg('保存失败！', {icon: 2, time: 1000});
            }
        });
    }while(0);
}
//增加显示
function listAddShow(){
    //更新信息
    infoPopInit();
    //弹窗
    layerPopShow({
        title: ["商户信息"],
        area: shopAreaWH,
        yes: function(){
            listAddSave();
        }
    });
}
/*************  删除  ****************/
//删除
function listDelFun(){
    var $curTable = $("#listTable");
    var $rowList = $curTable.find("tbody tr");
    var idArr = [];
    var rowListSize = $rowList.size();
    for(var i=0;i<rowListSize; i++){
        var $curRow = $rowList.eq(i);
        var $checkbox = $curRow.find('input[type="checkbox"]');
        if($checkbox.is(':checked')){
            var curId = $curRow.find(".like").attr("data-id");
            idArr.push(curId);
        }
    }
    if(idArr.length == 0){
        layer.msg('请选择要删除的商户！', {icon:0,skin:'layui-layer-lan',title:'提示',time: 1500});
        return ;
    }
    layer.confirm('确定要删除选中的商户？', {
        icon: 3,
        title: ['提示',"color:#FFF;background:#4376a7;"],
        btn: ['删除','取消']
    }, function(){
        //删除操作
        var inData = {userIds: idArr.join(',')};
        //发送服务器
        $.ajax({
            type: "get",
            url: "shop/delUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('删除成功！', {icon: 1, time: 1000});
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    layer.msg(msg, {icon: 2, time: 1000});
                }
            },
            error:function(error){
                console.log(error);
                layer.msg('删除失败！', {icon: 2, time: 1000});
            }
        });
    }, function(){
        return;
    });
}
