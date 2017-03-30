/**
 * Created by chun
 */
var userIdArr;
//加载页面
function loadhtml(){

    //窗口大小调整
    $(window).on('resize', function(){
        setTimeout(function(){
            $("#listTable").bootstrapTable('resetView');
        }, 300);
    });
    //注册提交按钮
    $("#inSubmit").on('click', function(){
        inSubmit();
    });
    //提交查询
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});

//提交
function inSubmit(){
    listTableFun();
}

//列表
function listTableFun(){
    /************ 表格 **************/
    var layerPopOpt = {
        type: 1,
        title: ['商户信息',"padding-left:70px;font-size:16px;text-align:center;color:#FFF;background:#4376a7;"],
        skin: 'layui-layer-rim', //加上边框
        area: ['440px', 'auto'], //宽高
        anim: 2,
        shadeClose: false, //开启遮罩关闭
        btn: ['保存', '取消'],
        yes: function(){},
        btn2: function(){layer.closeAll();},
        btnAlign: 'c',
        content: ''
    };
    function listEdit(id){
        layerPopOpt.content = $("#editPop");
        layerPopOpt.yes = function(){
            layer.alert('确定要保存？', function(index){
                layer.closeAll();
            });
        };
        layer.open(layerPopOpt);
    }
    // 表格点击事件
    window.clickEvents = {
        'click .like': function(e, value, row, index) {
            listEdit(userIdArr[index]);
        }
    };
    //格式化文本
    function linkTableFat(value, row, index) {
        var resTemp = '';
        resTemp = value;
        return [
            '<a class="like btn handlebtn" href="javascript:void(0);" title="请点击">'+resTemp+'</a>'
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
        $tableElem.bootstrapTable('destroy');
        $tableElem.bootstrapTable({
            method: 'get',
            contentType: "application/x-www-form-urlencoded",
            url: "tenant/consumerList",
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







