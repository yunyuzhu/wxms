/**
 * Created by chun
 */
var userIdArr;
var emptyCheck = (new checkFun).isEmpty;
//加载页面
function loadhtml(){
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

    inData.startTime = "2016-07-17";
    inData.endTime = "2017-01-17";
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
            listEditShow(userIdArr[index]);
        }
    };
    //格式化文本
    function linkTableFat(value, row, index) {
        var resTemp = '';
        resTemp = value;
        return [
            '<a class="like btn handlebtn" '+ ' data-id='+userIdArr[index]+ ' title="请点击">'+resTemp+'</a>'
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
            jsonData = {
                rows: [
                    { name: "COCO", trade: "餐饮", addr: "成都市", tel: "151213131313" , linkman: "李四", linktel: "152113131"},
                    { name: "COCO", trade: "餐饮", addr: "成都市", tel: "151213131313" , linkman: "李四", linktel: "152113131"},
                    { name: "COCO", trade: "餐饮", addr: "成都市", tel: "151213131313" , linkman: "李四", linktel: "152113131"},
                    { name: "COCO", trade: "餐饮", addr: "成都市", tel: "151213131313" , linkman: "李四", linktel: "152113131"},
                    { name: "COCO", trade: "餐饮", addr: "成都市", tel: "151213131313" , linkman: "李四", linktel: "152113131"}
                ],
                total: 5
            };
            var dataRows  = jsonData['rows'];
            var dataTotal = jsonData['total'];
            if(dataTotal > 0) {
                var idArr = [];
                var pageSize = dataRows.length;
                for (var i = 0; i < pageSize; i++) {
                    var curObj = dataRows[i];
                    var curArr = [];
                    curArr[1] = curObj['name'];
                    curArr[2] = curObj['trade'];
                    curArr[3] = curObj['addr'];
                    curArr[4] = curObj['tel'];
                    curArr[5] = curObj['linkman'];
                    curArr[6] = curObj['linktel'];
                    curArr[7] = "编辑";
                    dataRows[i] = curArr;
                    //记录id
                    idArr[i] = curObj['id'];
                }
                userIdArr = idArr;
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
            url: "tenant/consumerList",
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
            singleSelect : true,
            sidePagination:'server',    //设置为服务器端分页
            showColumns: false, //设置为True可显示表格显示/隐藏列表
            showRefresh: false, //设置为True可显示刷新按钮
            minimumCountColumns: 2, //表格显示/隐藏列表时可设置最小隐藏的列数
            clickToSelect: true,    //设置为True时点击行即可选中单选/复选框
            smartDisplay:true,  //设置为True智能显示分页或者Card View
            responseHandler: resHandler,    //在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
            columns: [
                { field: 0, width: "5%", align: 'center', valign: 'middle', halign: 'center', sortable: false, checkbox: true },
                { field: 1, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 5, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 6, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 7, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
                    events: clickEvents, formatter: linkTableFat}
            ]
        });
    }
    //触发
    drawTable();
}

function layerPopSet(){
    layerPopOpt.title[0] = "商户信息";
    layerPopOpt.content = $("#editPop");
}

//弹窗信息初始化加载
function infoPopInit(options){
    var defOption = {
        name: '', trade: '', addr: '', tel: '', linkName: '',linkTel: ''
    };
    if (options === undefined){options = {};}
    if (typeof(options) === "object") {
        var setting = $.extend(false, {}, defOption, options);
        defOption = setting;
    }
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $addrPop = $("#addrPop");
    var $telPop = $("#telPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");

    $namePop.val(defOption.name);
    $tradePop.val(defOption.trade);
    $addrPop.val(defOption.addr);
    $telPop.val(defOption.tel);
    $linkNamePop.val(defOption.linkName);
    $linkTelPop.val(defOption.linkTel);
}

/*************  编辑  ****************/

//编辑保存
function listEditSave(id){
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $addrPop = $("#addrPop");
    var $telPop = $("#telPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");

    var inData = {};
    inData.id = id;
    inData.name = $namePop.val();
    inData.trade = $tradePop.val();
    inData.addr = $addrPop.val();
    inData.tel = $telPop.val();
    inData.linkName = $linkNamePop.val();
    inData.linkTel = $linkTelPop.val();

    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        if(!emptyCheck($namePop, inData.name, "名称不能为空")){
            break;
        }
        if(!emptyCheck($tradePop, inData.trade, "行业不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.addr, "地址不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.tel, "联系方式不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.linkName, "联系人不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.linkTel, "联系人信息不能为空")){
            break;
        }
        //发送服务器
        $.ajax({
            type: "post",
            url: "manageUser/saveUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('保存成功！', {icon: 1, time: 1000});
                    layer.closeAll();
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
    var inData = {id: id};
    //发送服务器
    $.ajax({
        type: "get",
        url: "manageUser/viewUser",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            //更新信息
            infoPopInit(jsonData);
            //弹窗
            layerPopSet();
            layerPopOpt.yes = function(){
                listEditSave(id);
            };
            layer.open(layerPopOpt);
        },
        error:function(error){
            console.log(error);
        }
    });
}

/*************  增加  ****************/
//增加保存
function listAddSave(){
    var $namePop = $("#namePop");
    var $tradePop = $("#tradePop");
    var $addrPop = $("#addrPop");
    var $telPop = $("#telPop");
    var $linkNamePop = $("#linkNamePop");
    var $linkTelPop = $("#linkTelPop");

    var inData = {};
    inData.name = $namePop.val();
    inData.trade = $tradePop.val();
    inData.addr = $addrPop.val();
    inData.tel = $telPop.val();
    inData.linkName = $linkNamePop.val();
    inData.linkTel = $linkTelPop.val();

    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        if(!emptyCheck($namePop, inData.name, "名称不能为空")){
            break;
        }
        if(!emptyCheck($tradePop, inData.trade, "行业不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.addr, "地址不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.tel, "联系方式不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.linkName, "联系人不能为空")){
            break;
        }
        if(!emptyCheck($namePop, inData.linkTel, "联系人信息不能为空")){
            break;
        }
        //发送服务器
        $.ajax({
            type: "post",
            url: "manageUser/saveUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('保存成功！', {icon: 1, time: 1000});
                    layer.closeAll();
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
    infoPopInit();
    layerPopSet();
    layerPopOpt.yes = function(){
        //增加保存
        listAddSave();
    };
    layer.open(layerPopOpt);
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
        layer.msg('请选择要删除的用户！', {icon:0,skin:'layui-layer-lan',title:'提示',time: 1500});
        return ;
    }
    layer.confirm('确定要删除选中的用户？', {
        icon: 3,
        title: ['提示',"color:#FFF;background:#4376a7;"],
        btn: ['删除','取消']
    }, function(){
        //删除操作
        var inData = {userIds: idArr.join(',')};
        //发送服务器
        $.ajax({
            type: "post",
            url: "manageUser/delUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    layer.msg('删除用户成功！', {icon: 1, time: 1000});
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    layer.msg(msg, {icon: 2});
                }
            },
            error:function(error){
                console.log(error);
            }
        });
    }, function(){
        return;
    });
}
