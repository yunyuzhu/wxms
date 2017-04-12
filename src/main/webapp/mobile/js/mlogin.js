/**
 * Created by chun
 */
//加载页面
function loadhtml(){
    //验证码点击
    $("#verCodeImg").on('click', function(){
        getVerCodeImg();
    });
    getVerCodeImg();
    //注册提交按钮
    $("#inSubmit").on('click', function(){
        inSubmit();
    });
}
$(document).ready(function(){
    loadhtml();
});
//获取验证码图片
function getVerCodeImg(){
    $("#verCodeImg").attr("src", "code?t=" + (new Date()).getTime());
}
//提交
function inSubmit(){
    var $userAccount = $("#userAccount");
    var $userPassword = $("#userPassword");
    var $verCode = $("#verCode");
    var inData = {
        username: $userAccount.val(),
        password: $userPassword.val(),
        code: $verCode.val()
    };
    //删除前后的空白字符
    for(var para in inData){
        inData[para] = jQuery.trim(inData[para]);
    }
    //输入校验
    do{
        if(!EmptyCheck($userAccount, inData.username, "用户账户不能为空")){
            break;
        }
        if(!PasswordCheck($userPassword, inData.password)){
            break;
        }
        if(!EmptyCheck($verCode, inData.code, "验证码不能为空")){
            break;
        }
        //发送服务器
        $.ajax({
            type: "post",
            url: mUrlBase + "/login",
            dataType: "json",
            data: inData,
            async: false,
            jsonp: "callback",
            success:function(data){
                var jsonData = eval(data);
                var msg = '';
                var res = jsonData['result'];
                switch(res){
                    case 'success' :
                        layer.msg('正在登录，请稍后...', {icon: 1, time: 1000});
                        window.location.href = mUrlBase + "/mhome";
                        return ;
                        break;
                    case 'usererror' :
                        msg = "用户名或密码有误";
                        $userAccount.focus();
                        break;
                    case 'codeerror' :
                        msg = "验证码输入有误";
                        $verCode.focus();
                        break;
                    case 'userwarning' :
                        msg = "登录失败次数过多,锁定10分钟!";
                        $userAccount.focus();
                        break;
                    default:
                        msg = "登录异常，请联系管理员！";
                        $userAccount.focus();
                }
                layer.msg(msg);
            },
            error:function(error){
                console.log(error);
                layer.msg("登录失败");
            }
        });
    }while(0);
}