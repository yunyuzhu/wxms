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
	<title>首发创业</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="weui-tab__panel">
				<!--标题-->
				<h2 class="tnpage-tit">忘记密码</h2>
				<div class="tnpage-body">
					<!--输入-->
					<div class="weui-cells weui-cells_form">
						<div class="weui-cell weui-cell_vcode">
							<div class="weui-cell__hd">
								<label for="phone" class="weui-label">手机号：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="tel" id="phone" placeholder="请输入手机号">
							</div>
							<div class="weui-cell__ft vcodebox" id="vcodeBox">
								<a href="javascript:void(0);" class="weui-vcode-btn get" id="getVcode">获取验证码</a>
								<span class="vcode-no-btn no" id="vcodeNo">90秒后重取</span>
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="vcode" class="weui-label">验证码：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="text" id="vcode" placeholder="请输入验证码">
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="password" class="weui-label">新密码：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="password" id="password" placeholder="请输入新密码">
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="password2" class="weui-label">确认密码：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="password" id="password2" placeholder="请确认新密码">
							</div>
						</div>
					</div>
					<div class="weui-btn-area tn-handle">
						<a class="weui-btn weui-btn_primary" id="inSubmit">修改</a>
						<div class="login-more clearfix">
							<a href="${ctx}/mlogin" class="alink fl">立即登录</a>
							<a href="${ctx}/mreg" class="alink fr">立即注册</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mforgetpwd.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>