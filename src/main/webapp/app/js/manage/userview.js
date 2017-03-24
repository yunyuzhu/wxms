/**
 * Created by chun on 2016/9/22.
 */

var editUserId;
//加载页面
function loadhtml(){

    //角色列表加载
    roleInit($("#role"));

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
        var isedit = $("#khpopWrap").hasClass("isedit");
        if(isedit){
            userEditSave();
        }
        else{
            userAddSave();
        }
    });
    //新增用户
    $("#userAdd").on('click', function(){
        khpopShow(true);
        userAddShow();
    });
    //删除用户
    $("#userDel").on('click', function(){
        userDelList();
    });

    //窗口大小调整
    $(window).on('resize', function(){
        setTimeout(function(){
            $("#userListTable").bootstrapTable('resetView');
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

//获取输入参数
function getInData(){
    var inputData = {};
    inputData.roleId = $("#role").val();
    inputData.userName = $("#user").val();
    return inputData;
}
//提交
function inSubmit(){
    userListTableDraw();
}

// 用户列表 表格
function userListTableDraw(){
    var classes = 'table table-hover tableStyle';
    var $curTable = $("#userListTable");

    //table 返回的数据
    function resHandler(res) {
        var jsonData = eval(res);

        var dataRows = jsonData.rows;
        var dataTotal = jsonData.total;

        if(dataTotal > 0) {
            var docNameArr = [];
            var pageSize = dataRows.length;
            for(var i=0; i<pageSize; i++){
                var curObj = dataRows[i];
                var curArr = [];
                curArr[1] = curObj['orderId'];
                curArr[2] = curObj['userName'];
                curArr[3] = curObj['roleName'];
                curArr[4] = curObj['createTime'];
                curArr[5] = curObj['remark'];
                curArr[6] = curObj['id'];
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
        var inputData = new getInData();
        return {
            pageSize: params.limit,
            pageStart: params.offset,
            roleId: inputData.roleId,
            userName: inputData.userName
        };
    }

    //点击事件
    window.handleEvents = {
        'click .like': function (e, value, row, index) {
            var userId = $(this).attr("data-userid");
            userEditShow(userId);
        }
    };
    //格式化显示
    function handleFat(value, row, index) {
        var resTemp = '';
        resTemp = value;
        return [
            '<a class="like btn handlebtn" '+ ' data-userid='+resTemp+ ' title="请点击">'+"编辑"+'</a>'
        ];
    }

    $curTable.bootstrapTable('destroy');
    $curTable.bootstrapTable({
        method: 'post',
        contentType: "application/x-www-form-urlencoded",
        url: "manageUser/userPage",
        cache: false,
        dataType : 'json',
        queryParams: queryParams,//参数
        toolbar: "#toolbar",
        classes: classes,
        sortOrder: 'asc',
        striped: true,
        pagination: true,
        pageSize: 10,
        pageList: [10, 25, 50, 100, 200],
        search: false,
        showToggle : false,
        singleSelect : false,
        sidePagination:'server',//设置为服务器端分页
        showColumns: false,//设置为True可显示表格显示/隐藏列表
        showRefresh: false,//设置为True可显示刷新按钮
        minimumCountColumns: 2,//表格显示/隐藏列表时可设置最小隐藏的列数
        clickToSelect: false,//设置为True时点击行即可选中单选/复选框
        smartDisplay:true,//设置为True智能显示分页或者Card View
        responseHandler: resHandler,//在加载数据前，可以对返回的数据进行处理，参数包含：res: 返回的数据。
        columns: [
            {
                field: "0",
                width: "5%",
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false,
                checkbox: true
            },
            {
                field: 1,
                width: "10%",
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
                sortable: false
            },
            {
                field: 4,
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false
            },
            {
                field: 5,
                align: 'center',
                valign: 'middle',
                halign: 'center',
                sortable: false
            },
            {
                field: 6,
                width: "10%",
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

//弹窗
function khpopShow(flag){
    var $khpopWrap = $("#khpopWrap");
    if(flag){
        $khpopWrap.show();
    }
    else{
        $("#role").off('change');
        //关闭提示框
        tipHide();
        $khpopWrap.hide();
    }
}

//添加用户
function userAddShow(){
    $("#khpopWrap").removeClass("isedit");

    var $user = $("#userPop");
    var $account = $("#accountPop");
    var $passwd = $("#passwd");
    var $role = $("#rolePop");
    var $depa = $("#depa");
    var $useflag = $("#useflagPop");
    var $remark = $("#remarkPop");

    //显示密码行
    $("#passwdRow").show();

    // 设置默认值
    $user.removeAttr('disabled').val('');
    $account.val('');
    $passwd.val('');

    //角色
    $role.off('change');
    roleInit($role,{roleAll: false});
    //部门
    /*$role.on('change', function(){
        var roleVal = $role.val();
        switch(roleVal){
            case '1':
            case '2':
            case '3':
                depaListInit($depa,{defId: '-1'});
                $depa.attr('disabled','disabled');
                break;
            case '4':
                $depa.removeAttr('disabled');
                depaListInit($depa,{hasAll:false});
                break;
        }
    });
    $role.trigger('change');*/
    $depa.val("");

    $useflag.val("1").select2({minimumResultsForSearch: -1});
    $remark.val('');
}

//删除用户
function userDelList(){
    var $curTable = $("#userListTable");
    var $userList = $curTable.find("tbody tr");
    var userIdArr = [];
    var userListSize = $userList.size();
    for(var i=0;i<userListSize; i++){
        var $curUser = $userList.eq(i);
        var $checkbox = $curUser.find('input[type="checkbox"]');
        if($checkbox.is(':checked')){
            var curUserId = $curUser.find(".like").attr("data-userid");
            userIdArr.push(curUserId);
        }
    }
    if(userIdArr.length == 0){
        layer.msg('请选择要删除的用户！', {icon:0,skin:'layui-layer-lan',title:'提示',time: 1500});
        return ;
    }

    layer.confirm('确定要删除选中的用户？', {
        icon: 3,
        title: ['提示',"color:#FFF;background:#4376a7;"],
        btn: ['删除','取消']
    }, function(){
        //删除操作
        var inData = {userIds: userIdArr.join(',')};
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

//编辑用户
function userEditShow(userId){
    $("#khpopWrap").addClass("isedit");
    editUserId = userId;

    var $user = $("#userPop");
    var $account = $("#accountPop");
    var $passwd = $("#passwd");
    var $role = $("#rolePop");
    var $depa = $("#depa");
    var $useflag = $("#useflagPop");
    var $remark = $("#remarkPop");

    //隐藏密码行
    $("#passwdRow").hide();

    var inData = {userId: userId};
    //发送服务器
    $.ajax({
        type: "post",
        url: "manageUser/viewUser",
        dataType:"json",
        data: inData,
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);

            khpopShow(true);
            //更新信息
            $user.val(jsonData['userName']).attr('disabled','disabled');
            $account.val(jsonData['accountName']);

            //角色
            $role.off('change');
            roleInit($role,{roleAll: false, roleId: jsonData['roleId']});
            //部门
            /*$role.on('change', function(){
                var roleVal = $role.val();
                switch(roleVal){
                    case '1':
                    case '2':
                    case '3':
                        depaListInit($depa,{defId: "-1"});
                        $depa.attr('disabled','disabled');
                        break;
                    case '4':
                        $depa.removeAttr('disabled');
                        if(jsonData['roleId'] == 4){
                            depaListInit($depa,{hasAll:false, defId: jsonData['depaId']});
                        }
                        else{
                            depaListInit($depa,{hasAll:false});
                        }
                        break;
                }
            });
            $role.trigger('change');*/
            $depa.val("");

            $useflag.val(jsonData['useFlag']).select2({minimumResultsForSearch: -1});
            $remark.val(jsonData['remark']);
        },
        error:function(error){
            console.log(error);
        }
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

//账户校验
function userCheck(userName, $user){
    var res = true;
    if(userName == ''){
        tipShow($user, '账户不能为空');
        res = false;
    }
    return res;
}
// 昵称校验
function accountCheck(accountName, $account){
    var res = true;
    if(accountName == ''){
        tipShow($account, '昵称不能为空');
        res = false;
    }
    return res;
}
//密码校验
function passwdCheck(password, $passwd){
    var res = true;
    if(password == ''){
        tipShow($passwd, '密码不能为空');
        res = false;
    }else{
        var strLength = password.length;
        if(strLength < 6){
            tipShow($passwd, '密码不能少于6个字符');
            res = false;
        }
    }
    return res;
}
//保存用户
function userAddSave(){
    var $user = $("#userPop");
    var $account = $("#accountPop");
    var $passwd = $("#passwd");
    var $role = $("#rolePop");
    var $depa = $("#depa");
    var $useflag = $("#useflagPop");
    var $remark = $("#remarkPop");

    var inData = {};
    inData.userName = $user.val();
    inData.accountName = $account.val();
    inData.password = $passwd.val();
    inData.roleId = $role.val();
    inData.depaId = "-1";//没有部门
    inData.useFlag = $useflag.val();
    inData.remark = $remark.val();
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        var userRes = userCheck(inData.userName, $user);
        if(!userRes){
            break;
        }
        var accountRes = accountCheck(inData.accountName, $account);
        if(!accountRes){
            break;
        }
        var passwdRes = passwdCheck(inData.password, $passwd);
        if(!passwdRes){
            break;
        }
    }while(0);

    if(userRes&&accountRes&&passwdRes){
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
                    khpopShow(false);
                    console.log('保存用户成功');
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    tipShow($("#khpop"), msg);
                }
            },
            error:function(error){
                console.log(error);
            }
        });
        return true;
    }
    else{
        return false;
    }
}

//编辑更新用户
function userEditSave(){
    var $user = $("#userPop");
    var $account = $("#accountPop");
    var $role = $("#rolePop");
    var $depa = $("#depa");
    var $useflag = $("#useflagPop");
    var $remark = $("#remarkPop");

    var inData = {};
    inData.userId = editUserId;
    inData.accountName = $account.val();
    inData.roleId = $role.val();
    inData.depaId = "-1";//没有部门
    inData.useFlag = $useflag.val();
    inData.remark = $remark.val();
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    // 输入校验
    do{
        var accountRes = accountCheck(inData.accountName, $account);
        if(!accountRes){
            break;
        }
    }while(0);

    if(accountRes){
        //发送服务器
        $.ajax({
            type: "post",
            url: "manageUser/updateUser",
            dataType:"json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var res = jsonData['success'];
                if(res){
                    khpopShow(false);
                    layer.msg('更新用户信息成功！', {icon: 1, time: 1000});
                    //提交查询
                    inSubmit();
                }
                else{
                    var msg = jsonData['message'];
                    tipShow($("#khpop"), msg);
                }
            },
            error:function(error){
                console.log(error);
            }
        });
        return true;
    }
    else{
        return false;
    }
}