/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //允许获取验证码
    allowGetVcode(true);
    //获取验证码
    $("#getVcode").on('click', function(){
        getVcode();
    });

    //注册提交按钮
    $("#inSubmit").on('click', function(){
        inSubmit();
    });
}
$(document).ready(function(){
    loadhtml();
});
//获取验证码
function getVcode(){
    var $phone = $("#phone");
    var inData = {
        phone: $phone.val()
    };
    //输入校验
    do{
        if(!telCheck($phone, inData.phone)){
            break;
        }
        //禁止频繁获取验证码，显示倒计时
        allowGetVcode(false);
        //发送服务器
        $.ajax({
            type: "get",
            url: mUrlBase + "/portalAccount/verifyCode",
            dataType: "json",
            data: inData,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = jsonData['msg'];
                layer.msg(msg);
            },
            error:function(error){
                console.log(error);
                layer.msg("验证码获取失败");
            }
        });
    }while(0);
}
//提交
function inSubmit(){
    var $phone = $("#phone");
    var $vcode = $("#vcode");
    var $password = $("#password");
    var $password2 = $("#password2");
    var inData = {
        phone: $phone.val(),
        verifyCode: $vcode.val(),
        password: $password.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    var password2 = jQuery.trim($password2.val());
    //输入校验
    do{
        if(!telCheck($phone, inData.phone)){
            break;
        }
        if(!EmptyCheck($vcode, inData.verifyCode, "验证码不能为空")){
            break;
        }
        if(!PasswordCheck($password, inData.password)){
            break;
        }
        if(!Password2Check($password2, password2, inData.password)){
            break;
        }
        //发送服务器
        $.ajax({
            type: "get",
            url: mUrlBase + "/portalAccount/modifyPassword",
            dataType: "json",
            data: inData,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = jsonData['msg'];
                layer.msg(msg);
                jsonData.success = true;
                if(typeof(jsonData['success'] != 'undefined') && jsonData['success']){
                    window.location.href = mUrlBase + "/mlogin";
                }
            },
            error:function(error){
                console.log(error);
                layer.msg("修改密码失败");
            }
        });
    }while(0);
}