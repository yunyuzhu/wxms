/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //注册提交按钮
    $("#inSubmit").on('click', function(){
        inSubmit();
    });
}
$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    var $userAccount = $("#userAccount");
    var $userPassword = $("#userPassword");
    var $name = $("#name");
    var $sex = $("#sex");
    var $age = $("#age");
    var $phone = $("#phone");
    var $email = $("#email");
    var $wx = $("#wx");
    var $remark = $("#remark");
    var inData = {
        userName: $userAccount.val(),
        password: $userPassword.val(),
        name: $name.val(),
        sex: $sex.val(),
        age: $age.val(),
        phone: $phone.val(),
        email: $email.val(),
        wx: $wx.val(),
        remark: $remark.val()
    };
    //删除前后的空白字符
    /*for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }*/
    //输入校验
    do{
        if(!EmptyCheck($userAccount, inData.username, "账户不能为空")){
            break;
        }
        if(!PasswordCheck($userPassword, inData.password)){
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: mUrlBase + "/portalAccount/register",
            dataType: "json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = jsonData['msg'];
                layer.msg(msg);
                if(msg == "注册成功"){
                    window.location.href = mUrlBase + "/mlogin";
                }
            },
            error:function(error){
                console.log(error);
                layer.msg("注册失败");
            }
        });
    }while(0);
}