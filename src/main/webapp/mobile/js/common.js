/**
 * Created by chun on 2016/12/24.
 */

var mUrlBase = rootPath;
//项目定义
var ajaxUrlBase = "";
//网页地址
var loginUrl = "login.html";    //登录页面

/* 取消事件的默认行为(兼容IE) */
function stopDefault(e) {
    if (e && e.preventDefault){
        e.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

$(document).ready(function(){

});

//登录判断
function checkLogin(){
    //发送服务器
    $.ajax({
        type: 'get',
        url: ajaxUrlBase+'/user/login/valid.do',
        async: true,
        data: '',
        dataType: 'jsonp',
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            if(jsonData['isLogined'] == false){
                window.location.href = loginUrl;
            }
        },
        error:function(res){
        }
    });
}

//退出登录
function loginOut(){
    //发送服务器
    $.ajax({
        type: 'get',
        url: ajaxUrlBase+'/user/logout.do',
        async: true,
        data: '',
        dataType: 'jsonp',
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var res = Number(jsonData['code']);
            if(res == 1){
                window.location.href = loginUrl;
            }else{
                tipShow($("#loginOutObj"), "退出登录失败！");
            }
        },
        error:function(res){
        }
    });
}

//性别字符串转换
function sexFat(sex){
    var sexStr = "男";
    if(sex == "1"){
        sexStr = "女";
    }
    return sexStr;
}
//出生日期字符串转换
function birthFat(birth){
    return (birth.split('-')).join('.');
}

//校验相关函数

//手机号码校验
function telCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "手机号不能为空");
        return false;
    } else if (curVal.length != 11) {
        tipShow($elem, "请输入有效手机号");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}
//密码校验
function passwdCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "密码不能为空");
        return false;
    } else if (curVal.length < 6) {
        tipShow($elem, "密码长度不能小于6位");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}

//验证码校验
function vcodeCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "验证码不能为空");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}
//姓名校验
function nameCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "姓名不能为空");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}
//性别校验
function sexCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "性别不能为空");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}
//生日校验
function birthCheck($elem){
    var curVal = $elem.val();
    if (curVal == "") {
        tipShow($elem, "生日不能为空");
        return false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
        return true;
    }
}

//是否允许获取短信验证码 flag : true->允许; fasle->禁止，显示倒计时
function allowGetVcode(flag){
    var invalid = "invalid";
    var secNum = 90;
    var secTxt = "秒后重取";
    var noTimer;
    var $vcodeBox = $("#vcodeBox");
    var $vcodeNo = $("#vcodeNo");
    if(!flag){
        $vcodeNo.text(secNum+secTxt);
        $vcodeBox.addClass(invalid);
        noTimer = setInterval(function(){
            secNum--;
            $vcodeNo.text(secNum+secTxt);
            if(secNum < 0){
                clearInterval(noTimer);
                $vcodeBox.removeClass(invalid);
            }
        },1000);
    }
    else{
        if(noTimer){
            clearInterval(noTimer);
        }
        $vcodeBox.removeClass(invalid);
    }
}

/*
 * 校验
 * */
//提示框关闭
function tipHide(){
    $(".jq_tips_box").hide().remove();
}
//提示框显示信息
function tipShow($elem, msgStr){
    tipHide();
    $elem.tips({
        side: 1,
        msg: msgStr,
        color: '#FFF',
        bg: '#307FC1',
        time: 3
    });
}
/****  校验函数 ****/
//校验是否为空
function EmptyCheck($elem, value, msg){
    var res = true;
    if(value == ''){
        tipShow($elem, msg);
        res = false;
    }
    else{
        tipHide();
    }
    if(!res){
        $elem.focus();
    }
    return res;
}
//密码校验
function PasswordCheck($elem, value){
    var res = true;
    if (value == "") {
        tipShow($elem, "密码不能为空");
        res = false;
    } else if (value.length < 6) {
        tipShow($elem, "密码长度不能小于6位");
        res = false;
    } else {
        $elem.val(jQuery.trim(value));
        tipHide();
    }
    if(!res){
        $elem.focus();
    }
    return res;
}

//确认密码校验
function Password2Check($elem, value, oldval){
    var res = true;
    var curVal = value;
    if (curVal == "") {
        tipShow($elem, "密码不能为空");
        res = false;
    } else if (curVal != oldval) {
        tipShow($elem, "两次输入密码不一致");
        res = false;
    } else {
        $elem.val(jQuery.trim(curVal));
        tipHide();
    }
    if(!res){
        $elem.focus();
    }
    return res;
}
//小于10的数值前面增加0
function addZero(val){
    var value = (val < 10)? ("0"+val) : val;
    return value.toString();
}
//获取时间的 年、月、日
function getDate(time){
    var date;
    if(time){
        date = new Date(time);
    }else{
        date = new Date();
    }
    return {
        year : date.getFullYear(),
        month: addZero(date.getMonth()+1),
        day: addZero(date.getDate())
    };
}

//格式化时间
function fatDate(option){
    var setting = {time: null, fat: 'yymmdd'};
    if(typeof(option) == 'undefined'){var option={};}
    if(typeof(option) == 'object'){
        for(var key in option){
            setting[key] = option[key];
        }
    }
    var date;
    var time = setting.time;
    if((time == null || time == "null")){
        date = new Date(time);
    }else{
        date = new Date();
    }
    var dataObj =  {
        year : date.getFullYear(),
        month: addZero(date.getMonth()+1),
        day: addZero(date.getDate())
    };
    var dataStr = '';
    switch(setting.fat){
        case 'yymmdd':
            dataStr = dataObj.year+'-'+dataObj.month+'-'+dataObj.day;
            break;
        case 'yymm':
            dataStr = dataObj.year+'-'+dataObj.month;
            break;
        case 'mmdd':
            dataStr = dataObj.month+'-'+dataObj.day;
            break;
    }
    return {
        obj: dataObj,
        str: dataStr
    };
}

//获取请求参数
function GetRequest(){
    var url = decodeURI(location.search);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            var paraItem = strs[i].split("=");
            theRequest[paraItem[0]]=(paraItem[1]);
        }
    }
    return theRequest;
}
//判断是否为数组类型
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
}
//layer弹窗
function layerPopShow(options){
    var layerOpt = {
        type: 1,
        title: [''],
        skin: 'demo-class',
        area: ['240px', 'auto'], //宽高
        anim: 0,
        shadeClose: false, //开启遮罩关闭
        btn: ['确定', '取消'],
        yes: function(){layer.close("page");},
        btn2: function(){layer.closeAll(); tipHide();},
        btnAlign: 'c',
        content: $("#editPop")
    };
    if (typeof(options) === 'undefined'){options = {};}
    if (typeof(options) === "object") {
        for(var para in options){
            var curVal = options[para];
            if(isArray(curVal)){
                for(var i=0,size=curVal.length; i<size; i++){
                    layerOpt[para][i] = curVal[i];
                }
            }
            else{
                layerOpt[para] = curVal;
            }
        }
    }
    //弹窗
    layer.open(layerOpt);
}
