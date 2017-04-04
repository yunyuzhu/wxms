/**
 * Created by chun
 */
var tmpIdArr;
var tmpRuleIdArr;
//选中行业
var tradeFlag = true;
var checkboxFlag = true;
//加载页面
function loadhtml(){
    //行业应用列表
    TradeList({id: "#tradeTab", hasAll: false});
    //加载行业列表
    TradeList();
    //时间输入
    startEndTimeInit($("#startTime"), $("#endTime"));

    //菜单切换
    $("#applyType").on('click', 'a', function(){
        var on = "on";
        var $tabs = $("#applyType").find('a');
        var index = $tabs.index(this);
        applyNavGo(index);
    });
    applyNavGo(0);

    //商户筛选
    $("#shopSubmit").on('click', function(){
        listTableFun(checkboxFlag);
    });

    //规则筛选
    $("#ruleSubmit").on('click', function(){
        ruleTableFun();
    });
    ruleTableFun();

    //规则应用
    $("#ruleApply").on('click', function(){
        ruleApply();
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

//菜单切换
function applyNavGo(index){
    var $tableElem = $("#listTable");
    var on = "on";
    var $tabs = $("#applyType").find('a');
    var $cons = $("#applyList").find('.navcon');
    var indexCon = index;
    $tabs.removeClass(on).eq(index).addClass(on);
    if(index != 0){
        indexCon = 1;
    }
    $cons.removeClass(on).eq(indexCon).addClass(on);

    switch(index){
        case 0:
            tradeFlag = true;
            break;
        case 1:
            checkboxFlag = true;
            tradeFlag = false;
            // $tableElem.bootstrapTable('refreshOptions', listTableColumns(checkboxFlag));
            listTableFun(checkboxFlag);
            break;
        case 2:
            checkboxFlag = false;
            tradeFlag = false;
            listTableFun(checkboxFlag);
            // $tableElem.bootstrapTable('refreshOptions', listTableColumns(checkboxFlag));
            break;
    }
}

/*************  商户列表  ****************/
function listTableColumns(flag){
    var defFlag = true;
    var columns = [
        { field: 0, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
            checkbox: true, radio: false },
        { field: 1, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
        { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
        { field: 3, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
        { field: 4, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
        { field: 5, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false }
    ];
    if(typeof(flag) != 'undefined'){
        defFlag = flag;
    }
    if(!defFlag){
        columns[0].checkbox = false;
        columns[0].radio = true;
    }
    return columns;
}
//列表
function listTableFun(flag){
    //输入参数
    function getInData(params){
        var inData = {};
        inData.trade = $("#trade").val();
        inData.tenantName = $("#name").val();
        //表格参数
        if(typeof(params) != 'undefined'){
            inData.pageSize  = params.limit;
            inData.pageStart = params.offset;
        }
        return inData;
    }
    /************ 表格 **************/
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
        //行属性
        function rowAttr(row, index){
            return {
                'data-id': tmpIdArr[index]
            };
        }
        $tableElem.bootstrapTable('destroy');
        $tableElem.bootstrapTable({
            method: 'get',
            contentType: "application/x-www-form-urlencoded",
            url: "rule/shopList",
            cache: false,
            dataType : 'json',
            queryParams: inParams,
            classes: classes,
            sortOrder: 'asc',
            striped: true,
            pagination: true,
            pageSize: 200,
            pageList: [10, 25, 50, 100, 200],
            search: false,
            showToggle : false,
            singleSelect : false,
            sidePagination:'server',    //设置为服务器端分页
            showColumns: false, //设置为True可显示表格显示/隐藏列表
            showRefresh: false, //设置为True可显示刷新按钮
            minimumCountColumns: 2, //表格显示/隐藏列表时可设置最小隐藏的列数
            clickToSelect: true,    //设置为True时点击行即可选中单选/复选框
            smartDisplay: true,  //设置为True智能显示分页或者Card View
            responseHandler: resHandler,    //在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
            rowAttributes: rowAttr,
            selectItemName: "shopSelectItem",
            columns: listTableColumns(flag)
        });
    }
    //触发
    drawTable();
}

/*************  规则列表  ****************/
//规则列表
function ruleTableFun(){
    //输入参数
    function getInData(params){
        var inData = {};
        var startDateObj = getDate($("#startTime").datepicker('getUTCDate'));
        inData.startTime = startDateObj.year+'-'+startDateObj.month+'-'+startDateObj.day;
        var endDateObj = getDate($("#endTime").datepicker('getUTCDate'));
        inData.endTime = endDateObj.year+'-'+endDateObj.month+'-'+endDateObj.day;
        //表格参数
        if(typeof(params) != 'undefined'){
            inData.pageSize  = params.limit;
            inData.pageStart = params.offset;
        }
        return inData;
    }
    /************ 表格 **************/
    // 表格
    function drawTable(){
        var $tableElem = $("#ruleTable");
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
                    curArr[0] = curObj['flag'];
                    curArr[1] = curObj['orderId'];
                    curArr[2] = curObj['ruleName'];
                    curArr[3] = curObj['rate'];
                    curArr[4] = curObj['remark'];
                    curArr[5] = curObj['createTime'];
                    dataRows[i] = curArr;
                    //记录id
                    idArr[i] = curObj['id'];
                }
                tmpRuleIdArr = idArr;
                dataObj = {"rows": dataRows, "total": dataTotal};
            }
            return dataObj;
        }
        //输入参数
        function inParams(params) {
            var inData = new getInData(params);
            return inData;
        }
        //行属性
        function rowAttr(row, index){
            return {
                'data-id': tmpRuleIdArr[index]
            };
        }
        $tableElem.bootstrapTable('destroy');
        $tableElem.bootstrapTable({
            method: 'get',
            contentType: "application/x-www-form-urlencoded",
            url: "rule/ruleList",
            cache: false,
            dataType : 'json',
            queryParams: inParams,
            classes: classes,
            sortOrder: 'asc',
            striped: true,
            pagination: true,
            pageSize: 200,
            pageList: [10, 25, 50, 100, 200],
            search: false,
            showToggle : false,
            singleSelect : false,
            sidePagination:'server',    //设置为服务器端分页
            showColumns: false, //设置为True可显示表格显示/隐藏列表
            showRefresh: false, //设置为True可显示刷新按钮
            minimumCountColumns: 2, //表格显示/隐藏列表时可设置最小隐藏的列数
            clickToSelect: true,    //设置为True时点击行即可选中单选/复选框
            smartDisplay: true,  //设置为True智能显示分页或者Card View
            responseHandler: resHandler,    //在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
            rowAttributes: rowAttr,
            selectItemName: "ruleSelectItem",
            columns: [
                { field: 0, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
                    checkbox: false, radio: true },
                { field: 1, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 5, width: "25%", align: 'center', valign: 'middle', halign: 'center', sortable: false }
            ]
        });
    }
    //触发
    drawTable();
}

/*************  应用规则  ****************/
//获取选中列表id
function getSelectId($elem){
    var $tableElem = $elem;
    //id
    var $rowList = $tableElem.find("tbody tr");
    var idArr = [];
    var rowListSize = $rowList.size();
    for(var i=0;i<rowListSize; i++){
        var $curRow = $rowList.eq(i);
        var $checkbox = $curRow.find('.bs-checkbox input');
        if($checkbox.is(':checked')){
            var curId = $curRow.attr("data-id");
            idArr.push(curId);
        }
    }
    return idArr;
}
//应用规则
function ruleApply(){
    //参数
    var inData = {
        tradeFlag: tradeFlag
    };
    //参数校验
    do{
        //行业id或者商户id
        var idArr = [];
        if(inData.tradeFlag){
            idArr = [$("#tradeTab").val()];
        }
        else{
            idArr = getSelectId($("#listTable"));
        }
        if(idArr.length <= 0){
            layer.msg('请选择待设置规则的商户', {icon: 0,skin:'layui-layer-lan',title:'提示',time: 1000});
            break;
        }
        //规则id
        var ruleIdArr = getSelectId($("#ruleTable"));
        if(ruleIdArr.length <= 0){
            layer.msg('请选择待应用规则', {icon: 0,skin:'layui-layer-lan',title:'提示',time: 1000});
            break;
        }
        inData.ids = idArr.join(',');
        inData.ruleId = ruleIdArr.join(',');
        //发送服务器
        $.ajax({
            type: "get",
            url: "rule/apply",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg('应用规则成功！', {icon: 1, time: 1000});
            },
            error:function(error){
                console.log(error);
                layer.msg('应用规则失败！', {icon: 2, time: 1000});
            }
        });
    }while(0);
}
