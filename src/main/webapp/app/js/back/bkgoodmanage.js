/**
 * Created by chun
 */
var tmpIdArr;
//加载页面
function loadhtml(){
    //时间输入
    startEndTimeInit($("#startTime"), $("#endTime"));

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
    var startDateObj = getDate($("#startTime").datepicker('getUTCDate'));
    inData.startTime = startDateObj.year+'-'+startDateObj.month+'-'+startDateObj.day;
    var endDateObj = getDate($("#endTime").datepicker('getUTCDate'));
    inData.endTime = endDateObj.year+'-'+endDateObj.month+'-'+endDateObj.day;
    inData.name = $("#name").val();
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
                    curArr[2] = curObj['name'];
                    curArr[3] = curObj['price'];
                    curArr[4] = curObj['remark'];
                    curArr[5] = curObj['createTime'];
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
            url: "goods/goodsList",
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
                { field: 3, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 5, width: "25%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
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
        name: '', price: '', remark: ''
    };
    if (options === undefined){options = {};}
    if (typeof(options) === "object") {
        var setting = $.extend(false, {}, defOption, options);
        defOption = setting;
    }
    var $namePop = $("#namePop");
    var $pricePop = $("#pricePop");
    var $remarkPop = $("#remarkPop");
    $namePop.val(defOption.name);
    $pricePop.val(defOption.price);
    $remarkPop.val(defOption.remark);
}

/*************  编辑  ****************/

//编辑保存
function listEditSave(id){
    var $namePop = $("#namePop");
    var $pricePop = $("#pricePop");
    var $remarkPop = $("#remarkPop");
    var inData = {
        id: id,
        name: $namePop.val(),
        price: $pricePop.val(),
        remark: $remarkPop.val()
    };
    // 输入校验
    do{
        if(!EmptyCheck($namePop, inData.name, "名称不能为空")){
            break;
        }
        if(!EmptyCheck($pricePop, inData.price, "价格不能为空")){
            break;
        }
        if(inData.price <= 0){
            layer.msg('价格必须为大于0的整数！', {icon: 2, time: 1000});
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: "goods/update",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg('保存成功！', {icon: 1, time: 1000});
                //提交查询
                inSubmit();
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
        url: "goods/query",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var popData = {
                name: jsonData["name"],
                price: jsonData["price"],
                remark: jsonData["remark"]
            };
            //更新信息
            infoPopInit(popData);
            //弹窗
            layerPopShow({
                title: ["商品信息"],
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
    var $namePop = $("#namePop");
    var $pricePop = $("#pricePop");
    var $remarkPop = $("#remarkPop");
    var inData = {
        name: $namePop.val(),
        price: $pricePop.val(),
        remark: $remarkPop.val()
    };
    //输入校验
    do{
        if(!EmptyCheck($namePop, inData.name, "名称不能为空")){
            break;
        }
        if(!EmptyCheck($pricePop, inData.price, "价格不能为空")){
            break;
        }
        if(inData.price <= 0){
            layer.msg('价格必须为大于0的整数！', {icon: 2, time: 1000});
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: "goods/save",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg('保存成功！', {icon: 1, time: 1000});
                //提交查询
                inSubmit();
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
        title: ["商品信息"],
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
        layer.msg('请选择要删除的商品！', {icon:0,skin:'layui-layer-lan',title:'提示',time: 1500});
        return ;
    }
    layer.confirm('确定要删除选中的商品？', {
        icon: 3,
        title: ['提示',"color:#FFF;background:#4376a7;"],
        btn: ['删除','取消']
    }, function(){
        //删除操作
        var inData = {ids: idArr.join(',')};
        //发送服务器
        $.ajax({
            type: "get",
            url: "goods/delete",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg('删除成功！', {icon: 1, time: 1000});
                //提交查询
                inSubmit();
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
