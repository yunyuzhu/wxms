<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>首发创业平台</title>
    <base href="<%=basePath%>">
	<script type="text/javascript">
		/*设备检查*/
		function DeviceCheck(){
			var sUserAgent = navigator.userAgent.toLowerCase();
			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			var bIsMidp = sUserAgent.match(/midp/i) == "midp";
			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			var bIsAndroid = sUserAgent.match(/android/i) == "android";
			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			var curDevice = "pc";
			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
				curDevice = "phone";
			}
			return curDevice;
		}
		if(DeviceCheck() == 'phone'){
			window.location.replace("${ctx}/mlogin");
		}
	</script>
    <%@ include file="../common.jsp"%>
	<link rel="stylesheet" href="${ctx}/assets/css/ctlogin.css"  type="text/css"/>
    <script type="text/javascript">
		var rootPath = "${ctx}";
	</script>
</head>
<body>
<div class="ctlogin">
	<div class="loginlayer"></div>
	<div class="hxlogin-body">
		<div class="login-left">
			<div class="hxlogin-title">
				<div class="hxlogin-logo">
					<img src="assets/img/dmsslogomax.png" alt="logo">
				</div>
				<h2>首发创业平台</h2>
			</div>
		</div>
		<div class="login-right">
			<div class="hxlogin-con" id="loginbox">
				<h3>登&nbsp;录</h3>
				<div class="hxlogin-main">
					<div class="input-frame login-frame">
						<div class="input-row">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-user"></i></span>
								<input type="text" class="form-control" id="loginname" name="loginname" placeholder="输入用户名" autocomplete="off">
							</div>
						</div>
						<div class="input-row">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-lock"></i></span>
								<input type="password" class="form-control" id="password" name="password" placeholder="输入密码" autocomplete="off">
							</div>
						</div>
					</div>
				</div>
				<div class="input-handle login-handle">
					<a class="btn btn-block ctbtn" id="inSubmit" onclick="login();">登&nbsp;录</a>
				</div>
			</div>
			<div class="hxlogin-copy">
				Copyright &copy; 2016-<span id="copyToYear">2017</span> 首发创业平台
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	//关闭提示信息
	function tipHide(){
		$(".jq_tips_box").hide();
	}
  	//客户端校验
	function check(){
		var $loginname = $("#loginname");
		var nameVal = $loginname.val();
		var $password = $("#password");
		var passwdVal = $password.val();
		//用户名判断
		if(nameVal == ""){
			$loginname.tips({
				side : 2,
				msg : '用户名不得为空',
				bg : '#AE81FF',
				time : 3
			});
			$loginname.focus();
			return false;
		} else {
			$loginname.val(jQuery.trim(nameVal));
		}
		//密码判断
		if(passwdVal == "") {
			$password.tips({
				side : 2,
				msg : '密码不得为空',
				bg : '#AE81FF',
				time : 3
			});
			$password.focus();
			return false;
		}
		tipHide();
		return true;
	}
  
	function login(){
		if(check()){
			var $loginname = $("#loginname");
			var nameVal = $loginname.val();
			var $password = $("#password");
			var passwdVal = $password.val();
			var $loginbox = $("#loginbox");

			$.ajax({
				type: "POST",
				url: '${ctx}/login',
		    	data: {username:nameVal, password:passwdVal},
				dataType:'json',
				cache: false,
				success: function(data){
					if("success" == data.result){
						$loginbox.tips({
							side : 1,
							msg : '正在登录 , 请稍后 ...',
							bg : '#68B500',
							time : 10
						});
						window.location.href="${ctx}/index";
					}
					else if("usererror" == data.result){
						$loginname.tips({
							side : 1,
							msg : "用户名或密码有误",
							bg : '#FF5080',
							time : 15
						});
						$loginname.focus();
					}else if("locked" == data.result){
                        $loginbox.tips({
							side : 1,
							msg : "用户已经被锁定不能登录，请与管理员联系！",
							bg : '#FF5080',
							time : 15
						});
						$loginname.focus();
					}else if("userwarning" == data.result){
                        $loginbox.tips({
							side : 1,
							msg : "登录失败次数过多,锁定10分钟!",
							bg : '#FF5080',
							time : 15
						});
						$loginname.focus();
					}else{
						$loginname.tips({
							side : 1,
							msg : "登录异常，请联系管理员！",
							bg : '#FF5080',
							time : 15
						});
						$loginname.focus();
					}
				}
			});
		}
	}

	//键盘 enter 事件
	$(document).keyup(function(event) {
		if (event.keyCode == 13) {
			$("#inSubmit").trigger("click");
		}
	});

	function genTimestamp() {
		var time = new Date();
		return time.getTime();
	}
    //重置输入信息
	function cancel() {
		$("#loginname").val('');
		$("#password").val('');
	}

	$(document).ready(function() {
		var nowYear = (new Date()).getFullYear();
		$("#copyToYear").text(nowYear);
	});
    </script>
  </body>
</html>