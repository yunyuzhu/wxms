<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
				<h2 class="tnpage-tit">用户注册</h2>
				<div class="tnpage-body">
					<!--输入-->
					<div class="weui-cells weui-cells_form">
						<div class="weui-cell mustfill">
							<div class="weui-cell__hd">
								<label for="userAccount" class="weui-label">账户：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="text" id="userAccount" placeholder="请输入账户">
							</div>
						</div>
						<div class="weui-cell mustfill">
							<div class="weui-cell__hd">
								<label for="userPassword" class="weui-label">密码：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="password" id="userPassword" placeholder="请输入密码">
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="name" class="weui-label">姓名：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="text" id="name" placeholder="请输入姓名">
							</div>
						</div>
						<div class="weui-cell weui-cell_select weui-cell_select-after">
							<div class="weui-cell__hd">
								<label for="sex" class="weui-label">性别：</label>
							</div>
							<div class="weui-cell__bd">
								<select class="weui-select" name="sex" id="sex">
									<option value="0">男</option>
									<option value="1">女</option>
								</select>
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="age" class="weui-label">年龄：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="text" id="age" placeholder="请输入年龄">
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="phone" class="weui-label">电话：</label>
							</div>
							<div class="weui-cell__bd">
								<input class="weui-input" type="tel" id="phone" placeholder="请输入电话">
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label for="remark" class="weui-label">备注：</label>
							</div>
							<div class="weui-cell__bd">
								<textarea class="weui-textarea" id="remark" placeholder="备注" rows="2"></textarea>
							</div>
						</div>
					</div>
					<div class="weui-btn-area tn-handle">
						<a class="weui-btn weui-btn_primary" id="inSubmit">注册</a>
						<div class="login-more clearfix">
							<a href="${ctx}/mlogin" class="alink fl">立即登录</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mreg.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>