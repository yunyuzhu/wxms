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
	<title>DRGs医疗服务评价系统</title>
    <base href="<%=basePath%>">
    <%@ include file="../common.jsp"%>
	<link rel="stylesheet" href="${ctx}/assets/css/ctlogin.css"  type="text/css"/>
    <script type="text/javascript">
		var rootPath = "${ctx}";
	</script>
</head>
<body>
<div class="hxlogin">
	<div class="hxlogin-body">
		<div class="hxlogin-con" id="loginbox">
			<div class="hxlogin-title">
				<h2>DRGs医疗服务评价系统</h2>
				<div class="title-tria"></div>
			</div>
			<div class="hxlogin-main">
				<form action="" method="post" name="loginForm" id="loginForm">
					<div class="hxlogin-logo">
						<img src="assets/img/dmsslogomax.png" alt="logo">
					</div>
					<div class="fill-frame">
						<em class="fill-icon icon-user"></em>
						<input type="text" name="loginname" id="loginname" class="fill-input input-size1" placeholder="用户名"/>
					</div>
					<div class="fill-frame">
						<em class="fill-icon icon-passwd"></em>
						<input type="password" name="password" id="password" class="fill-input input-size1" placeholder="密码"/>
					</div>
					<div class="fill-frame">
						<input type="text" name="code" id="code" class="fill-input input-size2 input-code" placeholder="验证码"/>
						<img src="" class="code-img" id="codeImg" alt="点击更换" title="点击更换">
					</div>
					<div class="login-handle">
						<a href="javascript:void(0);" class="login-btn btn-sign" id="to-recover" onclick="login();">登&nbsp;录</a>
						<a href="javascript:void(0);" class="login-btn btn-reset" onclick="cancel();">重&nbsp;置</a>
					</div>
				</form>
			</div>
		</div>
		<div class="hxlogin-copy">
			Copyright &copy; 2014-<span id="copyToYear">2016</span> 电科软信
		</div>
	</div>
</div>
    <script  type="text/javascript">
  	//客户端校验
	function check(){
		var $loginname = $("#loginname");
		var nameVal = $loginname.val();
		var $password = $("#password");
		var passwdVal = $password.val();
		var $code = $("#code");
		var codeVal = $code.val();

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
		//验证码判断
		if (codeVal == "") {
			$code.tips({
				side : 1,
				msg : '验证码不得为空',
				bg : '#AE81FF',
				time : 3
			});
			$code.focus();
			return false;
		}
		return true;
	}
  
	function login(){
		if(check()){
			var $loginname = $("#loginname");
			var nameVal = $loginname.val();
			var $password = $("#password");
			var passwdVal = $password.val();
			var $code = $("#code");
			var codeVal = $code.val();
			var $loginbox = $("#loginbox");

			$.ajax({
				type: "POST",
				url: '${ctx}/login',
		    	data: {username:nameVal, password:passwdVal, code:codeVal},
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
					}else if("codeerror" == data.result){
						$code.tips({
							side : 1,
							msg : "验证码输入有误",
							bg : '#FF5080',
							time : 15
						});
						$code.focus();
					}else if("locked" == data.result){
						$code.tips({
							side : 1,
							msg : "用户已经被锁定不能登录，请与管理员联系！",
							bg : '#FF5080',
							time : 15
						});
						$loginname.focus();
					}else if("userwarning" == data.result){
						$code.tips({
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
			$("#to-recover").trigger("click");
		}
	});

	function genTimestamp() {
		var time = new Date();
		return time.getTime();
	}
	//点击验证码图片
	function changeCode() {
		$("#codeImg").attr("src", "code?t=" + genTimestamp());
	}
    //重置输入信息
	function cancel() {
		$("#loginname").val('');
		$("#password").val('');
		$("#code").val('');
	}

	$(document).ready(function() {
		var nowYear = (new Date()).getFullYear();
		$("#copyToYear").text(nowYear);

		changeCode();
		$("#codeImg").bind("click", changeCode);
	});
    </script>
  </body>
</html>