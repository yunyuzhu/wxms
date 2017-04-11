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
            listCheckShow(tmpIdArr[index]);
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
                    curArr[0] = curObj['orderId'];
                    curArr[1] = curObj['goodsName'];
                    curArr[2] = curObj['price'];
                    curArr[3] = curObj['name'];
                    curArr[4] = curObj['phone'];
                    curArr[5] = curObj['consumeTime'];
                    curArr[6] = "兑换确认";
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
            url: "goods/ConfirmList",
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
                { field: 0, width: "5%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 1, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "16%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 5, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 6, width: "14%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
                    events: clickEvents, formatter: linkTableFat}
            ]
        });
    }
    //触发
    drawTable();
}

/*************  确认  ****************/
//确认兑换
function listCheckShow(id){
    //确认询问
    layer.confirm('确认用户的兑换？', {
        title: ['提示'],
        btn: ['确认','取消'] //按钮
    }, function(){
        var inData = {"id": id};
        $.ajax({
            type: "get",
            url: "goods/change",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                layer.msg('确认成功！', {icon: 1, time: 1000});
                //刷新列表
                inSubmit();
            },
            error:function(error){
                console.log(error);
                layer.msg('确认失败！', {icon: 2, time: 1000});
            }
        });
    }, function(){ return ; });
}