/**
 * Created by chun on 2016/9/22.
 */

var curRoleId;
var roleIdArr;

//加载页面
function loadhtml(){

    //关闭弹窗
    $("#khpopClose").on('click', function(){
        khpopShow(false);
    });
    //取消
    $("#canclePop").on('click', function(){
        khpopShow(false);
    });
    //保存
    $("#savePop").on('click', function(){
        var res = roleAuthSave();
    });

    $(window).on('resize', function(){
        setTimeout(function(){
            $("#roleListTable").bootstrapTable('resetView');
        }, 300);
    });

    //提交
    inSubmit();
}

$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    roleListTableDraw();
}

// 用户列表 表格
function roleListTableDraw(){
    var classes = 'table table-hover tableStyle';
    var $curTable = $("#roleListTable");

    //table 返回的数据
    function resHandler(res) {
        var jsonData = eval(res);

        var dataRows  = jsonData.data.rows;
        var dataTotal = jsonData.data.total;

        if((jsonData.success)&&(dataTotal > 0)){
            roleIdArr = [];
            var pageSize = dataRows.length;
            for(var i=0; i<pageSize; i++){
                var curObj = dataRows[i];
                var curArr = [];
                curArr[0] = curObj['orderId'];
                curArr[1] = curObj['name'];
                curArr[2] = curObj['description'];
                curArr[3] = "权限配置";
                roleIdArr[i] = curObj['id'];
                dataRows[i] = curArr;
            }
            return {
                "rows": dataRows,
                "total": dataTotal
            };
        }
        else {
            return {
                "rows": [],
                "total": 0
            };
        }
    }

    function queryParams(params) {
        return {
            pageSize: params.limit,
            pageStart: params.offset
        };
    }

    //点击事件
    window.handleEvents = {
        'click .like': function (e, value, row, index) {
            khpopShow(true);
            roleAuthInit(roleIdArr[index], row[1]);
        }
    };
    //格式化显示
    function handleFat(value, row, index) {
        var resTemp = '';
        resTemp = value;
        return [
            '<a class="like btn handlebtn" '+'   title="请点击">'+resTemp+'</a>'
        ];
    }

    $curTable.bootstrapTable('destroy');
    $curTable.bootstrapTable({
        method: 'post',
        contentType: "application/x-www-form-urlencoded",
        url: "manageRole/rolePage",
        cache: false,
        dataType : 'json',
        queryParams: queryParams,//参数
        classes: classes,
        sortOrder: 'asc',
        striped: true,
        pagination: true,
        pageSize: 10,
        pageList: [10, 25, 50, 100, 200],
        search: false,
        showToggle : false,
        singleSelect : true,
        sidePagination:'server',//设置为服务器端分页
        showColumns: false,//设置为True可显示表格显示/隐藏列表
        showRefresh: false,//设置为True可显示刷新按钮
        minimumCountColumns: 2,//表格显示/隐藏列表时可设置最小隐藏的列数
        clickToSelect: true,//设置为True时点击行即可选中单选/复选框
        smartDisplay:true,//设置为True智能显示分页或者Card View
        responseHandler: resHandler,//在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
        columns: [
            {
                field: 0,
                width: "10%",
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false
            },
            {
                field: 1,
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false
            },
            {
                field: 2,
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false
            },
            {
                field: 3,
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false,
                events: handleEvents,
                formatter: handleFat
            }
        ]
    });
}

//提示框显示信息
function tipShow($elem, msgStr){
    $elem.tips({
        side: 1,
        msg: msgStr,
        color: '#FFF',
        bg: '#FF8231',
        time: 3
    });
}
//提示框关闭
function tipHide(){
    $(".jq_tips_box").hide().remove();
}
//弹窗
function khpopShow(flag){
    var $khpopWrap = $("#khpopWrap");
    if(flag){
        $khpopWrap.show();
    }
    else{
        //关闭提示框
        tipHide();
        $khpopWrap.hide();
    }
}

//权限树形配置
function authTreeDraw(jsonData){
    var $roleAuthTree = $("#roleAuthTree");

    var menuAll = jsonData['data'];
    var allSize = menuAll.length;
    for(var i= 0;i<allSize; i++){
        var curObj = menuAll[i];
        var dataObj = {};
        var curType = curObj['type'];
        dataObj.text = curObj['name'];
        dataObj.id = curObj['id'];
        dataObj.type = curType;
        dataObj.state = {};
        dataObj.state.opened = 'true';
        if(curType == '0'){
            dataObj.parent = '#';
            var hasChild = false;
            for(var k=0;k<allSize; k++){
                var curMenu = menuAll[k];
                if(dataObj.id == curMenu['parentId']){
                    hasChild = true;
                    break;
                }
            }
            if(!hasChild){
                if(curObj['checked'] == "true"){
                    dataObj.state.selected = true;
                }
                else{
                    dataObj.state.selected = false;
                }
            }
        }
        else{
            dataObj.parent = curObj['parentId'];
            if(curObj['checked'] == "true"){
                dataObj.state.selected = true;
            }
            else{
                dataObj.state.selected = false;
            }
        }
        //管理员增加无法操作系统管理模块
        if(curRoleId == "1"){
            if(((curObj['id']).toString() == "11")||((curObj['parentId']).toString()== "11")){
                dataObj.state.disabled = 'true';
            }
        }
        menuAll[i] = dataObj;
    }

    $roleAuthTree.jstree('destroy');
    $roleAuthTree.jstree({
        core : {
            check_callback : true,
            "multiple" : true,
            "animation" : 0,
            "themes": { "stripes" : true },
            "checkbox" : {"keep_selected_style" : false},
            data: menuAll
        },
        'plugins': [ "checkbox", "types" ]
    });
}

//权限加载
function roleAuthInit(roleId, roleName){
    var inData = {};
    inData.roleId = roleId;
    curRoleId = roleId;
    $("#popLabel").text(roleName);

    $.ajax({
        type: "post",
        url: "manageRole/viewRole",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            authTreeDraw(jsonData);
        },
        error:function(error){
            console.log(error);
        }
    });
}

//保存权限菜单状态
function roleAuthSave(){
    var $roleAuthTree = $("#roleAuthTree");
    var curTree = $roleAuthTree.jstree("get_json");
    var inData = {};
    var menuArr = [];
    var treeSize = curTree.length;
    for(var m=0; m<treeSize; m++){
        var isChecked = false;
        var curObj = curTree[m];
        var children = curObj['children'];
        var childSize = children.length;
        if(childSize == 0){
            if(curObj['state'].selected){
                isChecked = true;
            }
        }
        for(var n=0; n<childSize; n++){
            var curChild = children[n];
            if(curChild['state'].selected){
                isChecked = true;
                menuArr.push(curChild['id']);
            }
        }
        if(isChecked){
            menuArr.push(curObj['id']);
        }
    }

    inData.roleId = curRoleId;
    inData.roleMenu = menuArr.join(",");

    $.ajax({
        type: "post",
        url: "manageRole/updateRole",
        dataType: "json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var res = jsonData['success'];
            if(res){
                khpopShow(false);
                console.log('更新权限成功');
                //提交查询
                inSubmit();
            }
            else{
                var msg = jsonData['message'];
                tipShow($("#savePop"), msg);
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}