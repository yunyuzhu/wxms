/**
 * Created by chun
 */
var tmpIdArr;
var tmpPhoneArr;
var tmpTypeArr;
var shopAreaWH = ['800px', 'auto'];
//加载页面
function loadhtml(){
    //用户类型
    UserTypeList({hasAll: true, defVal: ""});

    //用户类型切换
    $("#userType").on('change', function(){
        inSubmit();
    });
    //提交
    inSubmit();

    //发送短信
    $("#msgSend").on('click', function(){
        listAddSave();
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
    $("#msgContent").val("");
}
//输入参数
function getInData(params){
    var inData = {};
    inData.userType = $("#userType").val();
    //表格参数
    if(typeof(params) != 'undefined'){
        inData.pageSize  = params.limit;
        inData.pageStart = params.offset;
    }
    return inData;
}

//获取用户类型文本
function getUserTypeTxt(type){
    var typeStr = type.toString();
    var typeTxt = "用户";
    if(typeStr == '2'){
        typeTxt = "商户";
    }
    return typeTxt;
}

//列表
function listTableFun(){
    /************ 表格 **************/
    //格式化内容
    function htmlFat(value, row, index) {
        return [
            getUserTypeTxt(value)
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
                var phoneArr = [];
                var typeArr = [];
                var pageSize = dataRows.length;
                for (var i = 0; i < pageSize; i++) {
                    var curObj = dataRows[i];
                    var curArr = [];
                    curArr[1] = curObj['orderId'];
                    curArr[2] = curObj['userType'];
                    curArr[3] = curObj['name'];
                    curArr[4] = curObj['phone'];
                    dataRows[i] = curArr;
                    //记录id
                    idArr[i] = curObj['id'];
                    phoneArr[i] = curObj['phone'];
                    typeArr[i] = curObj['userType'];
                }
                tmpIdArr = idArr;
                tmpPhoneArr = phoneArr;
                tmpTypeArr = typeArr;
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
            url: "message/userList",
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
            columns: [
                { field: 0, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false, checkbox: true },
                { field: 1, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
                    formatter: htmlFat},
                { field: 3, width: "30%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "30%", align: 'center', valign: 'middle', halign: 'center', sortable: false }
            ]
        });
    }
    //触发
    drawTable();
}

/*************  增加  ****************/
//增加保存
function listAddSave(){
    var $msgContent = $("#msgContent");
    var inData = {
        message: $msgContent.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    //输入校验
    do{
        if(!EmptyCheck($msgContent, inData.message, "短信内容不能为空")){
            break;
        }
        var $tableElem = $("#listTable");
        //phone \ userType
        var selectArr = $tableElem.bootstrapTable('getSelections');
        var selectSize = selectArr.length;
        if(selectSize <= 0){
            layer.msg('请选择待发送短信用户', {icon: 0,skin:'layui-layer-lan',title:'提示',time: 1000});
            break;
        }
        var phoneArr = [];
        var typeArr = [];
        for(var m=0; m<selectSize; m++){
            var selectCell = selectArr[m];
            typeArr[m] = selectCell[2];
            phoneArr[m] = selectCell[4];
        }
        //id
        var $rowList = $tableElem.find("tbody tr");
        var idArr = [];
        var rowListSize = $rowList.size();
        for(var i=0;i<rowListSize; i++){
            var $curRow = $rowList.eq(i);
            var $checkbox = $curRow.find('input[type="checkbox"]');
            if($checkbox.is(':checked')){
                var curId = $curRow.attr("data-id");
                idArr.push(curId);
            }
        }
        inData.ids = idArr.join(',');
        inData.phones = phoneArr.join(',');
        inData.userTypes = typeArr.join(',');
        //发送服务器
        $.ajax({
            type: "get",
            url: "message/send",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg('发送短信成功！', {icon: 1, time: 1000});
                //提交查询
                inSubmit();
            },
            error:function(error){
                console.log(error);
                layer.msg('发送失败！', {icon: 2, time: 1000});
            }
        });
    }while(0);
}
