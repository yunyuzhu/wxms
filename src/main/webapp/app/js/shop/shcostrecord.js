/**
 * Created by chun
 */
var $tableElem = $("#costRecordTableDiv");
//加载页面
function loadhtml(){
    costTableFun();
}
$(document).ready(function(){
    loadhtml();
    //窗口大小调整
    $(window).on('resize', function(){
        setTimeout(function(){
            $tableElem.bootstrapTable('resetView');
        }, 300);
    });
});

// 表格
function costTableFun(){
    drawTable();
    /************ 表格 **************/
    function drawTable(){
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
                    curArr[0] = curObj['hisRank'];
                    curArr[1] = curObj['hospitalName'];
                    curArr[2] = curObj['timeNum'];
                    curArr[3] = curObj['score'];
                    curArr[4] = "确认";
                    dataRows[i] = curArr;
                    //记录id
                    idArr[i] = curObj['hospitalId'];
                }
                dataObj = {"rows": dataRows, "total": dataTotal};
            }
            $("#totalCostNum").val("123456");
            return dataObj;
        }
        $tableElem.bootstrapTable('destroy');
        $tableElem.bootstrapTable({
            method: 'post',
            contentType: "application/x-www-form-urlencoded",
            url: "ability/qualityTb",
            cache: false,
            dataType : 'json',
            queryParams: "",  //参数
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
                { field: 0, width: "15%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 1, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 2, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 3, width: "20%", align: 'center', valign: 'middle', halign: 'center', sortable: false },
                { field: 4, width: "25%", align: 'center', valign: 'middle', halign: 'center', sortable: false }
            ]
        });
    }
}