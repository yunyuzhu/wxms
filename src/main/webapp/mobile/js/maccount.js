/**
 * Created by chun
 */
//操作按钮切换
function modifyBtnShow(flag){
    var $accinfoBtn = $("#accinfoBtn");
    var ismodify = "ismodify";
    if(flag){
        $accinfoBtn.removeClass(ismodify);
        accTextShow(true);
    }else{
        $accinfoBtn.addClass(ismodify);
        accTextShow(false);
    }
}
//加载页面
function loadhtml(){
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    accLoad();
    //修改
    $("#accModify").on('click', function(){
        accModify();
    });
    //保存
    $("#accSave").on('click', function(){
        accSave();
    });
    //取消
    $("#accCancle").on('click', function(){
        accLoad();
    });
}
//文本显示,阻止修改
function accTextShow(flag){
    var $accountInfo = $("#accountInfo");
    var $wx = $("#wx");
    if(flag){
        $accountInfo.find('input').attr('disabled', 'disabled');
        $accountInfo.find('select').attr('disabled', 'disabled');
        $accountInfo.find('textarea').attr('disabled', 'disabled');
    }
    else{
        $accountInfo.find('input').removeAttr('disabled');
        $accountInfo.find('select').removeAttr('disabled');
        $accountInfo.find('textarea').removeAttr('disabled');
        $wx.attr('disabled', 'disabled');
    }
}
//加载个人信息
function accLoad(){
    modifyBtnShow(true);
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/myAccount",
        dataType: "json",
        data: '',
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            document.getElementById("name").value = jsonData["name"];
            document.getElementById("sex").value = sexVal(jsonData["sex"]);
            document.getElementById("age").value = jsonData["age"];
            document.getElementById("phone").value = jsonData["phone"];
            document.getElementById("email").value = jsonData["email"];
            document.getElementById("wx").value = jsonData["wx"];
        },
        error:function(error){
            console.log(error);
            layer.msg("加载失败");
        }
    });
}
//修改个人信息
function accModify(){
    //隐藏修改按钮
    modifyBtnShow(false);
}
//保存个人信息
function accSave(){
    var $name = $("#name");
    var $sex = $("#sex");
    var $age = $("#age");
    var $phone = $("#phone");
    var $email = $("#email");
    var $wx = $("#wx");
    var inData = {
        name: $name.val(),
        sex: $sex.val(),
        age: $age.val(),
        phone: $phone.val(),
        email: $email.val(),
        wx: $wx.val()
    };
    //输入校验
    do{
        //发送服务器
        $.ajax({
            type: "get",
            url: mUrlBase + "/portalAccount/update",
            dataType: "json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = jsonData['msg'];
                layer.msg(msg);
                if(msg == "修改成功"){
                    accLoad();
                }
            },
            error:function(error){
                console.log(error);
                layer.msg("修改失败");
            }
        });
    }while(0);
}