/**
 * Created by chun
 */
var tmpIdArr;
//加载页面
function loadhtml(){
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
    inData.name = $("#name").val();
    inData.phone = $("#phone").val();
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
            listEditShow(tmpIdArr[index], row[3]);
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
                    curArr[1] = curObj['name'];
                    curArr[2] = curObj['phone'];
                    curArr[3] = curObj['gold'];
                    curArr[4] = "兑换金币";
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
            url: "stream/balance",
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
                { field: 0, width: "10%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 1, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false,
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
        num: '',
        gold: ''
    };
    if (typeof(options) === 'undefined'){options = {};}
    if (typeof(options) === "object") {
        var setting = $.extend(false, {}, defOption, options);
        defOption = setting;
    }
    $("#goldNum").text(defOption.num);
    $("#goldPop").val(defOption.gold);
}

/*************  编辑  ****************/
//编辑保存
function listEditSave(id){
    var $goldPop = $("#goldPop");
    var inData = {
        id: id,
        gold: $goldPop.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        if(!EmptyCheck($goldPop, inData.gold, "金币数不能为空")){
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: "stream/change",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                layer.closeAll('page');
                layer.msg(jsonData['msg'], {icon: 1, time: 1000});
                //提交查询
                inSubmit();
            },
            error:function(error){
                console.log(error);
                layer.msg('金币兑换失败！', {icon: 2, time: 1000});
            }
        });
    }while(0);
}
//编辑显示
function listEditShow(id, num){
    //更新信息
    infoPopInit({'num': num});
    //弹窗
    layerPopShow({
        title: ["兑换金币"],
        yes: function(){
            listEditSave(id);
        }
    });
}