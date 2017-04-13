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
	<title>我的账户</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<a href="javascript:history.go(-1);" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">我的账户</div>
			</div>
			<div class="weui-tab__panel">
				<div class="weui-cells account-info" id="accountInfo">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">昵称：</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" id="name">
						</div>
					</div>
					<div class="weui-cell weui-cell_select weui-cell_select-after">
						<div class="weui-cell__hd">
							<label class="weui-label">性别：</label>
						</div>
						<div class="weui-cell__bd">
							<select class="weui-select" name="sex" id="sex">
								<option value="1">男</option>
								<option value="0">女</option>
							</select>
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">年龄：</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="number" id="age">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">电话：</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="tel" id="phone">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">邮箱：</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="email" id="email">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">微信：</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" id="wx">
						</div>
					</div>
					<%--<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">备注：</label>
						</div>
						<div class="weui-cell__bd">
							<textarea class="weui-textarea" id="remark" rows="2"></textarea>
						</div>
					</div>--%>
				</div>
				<div class="accinfo-btn" id="accinfoBtn">
					<div class="weui-btn-area text-center before">
						<a id="accModify" class="weui-btn weui-btn_mini weui-btn_primary">修改</a>
					</div>
					<div class="weui-btn-area text-center after">
						<a id="accSave" class="weui-btn weui-btn_mini weui-btn_primary btn-save">保存</a>
						<a id="accCancle" class="weui-btn weui-btn_mini weui-btn_warn btn-cancle">取消</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/maccount.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>