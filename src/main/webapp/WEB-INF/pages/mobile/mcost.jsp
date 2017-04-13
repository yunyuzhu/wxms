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
	<title>扫描</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
	<script src="${ctx}/mobile/vendor/webcam/webcam.js" type="text/javascript" charset="UTF-8"></script>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab" id="tabPage">
			<div class="mtab-hd">
				<div class="mhd-title">扫描</div>
			</div>
			<div class="weui-tab__panel">
				<!--扫描框-->
				<div class="scan-box">
					<div class="scan-bd scan-screen" id="screenDiv"></div>
					<p class="text-des">将摄像头对准二维码，系统会自动识别</p>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
		<%--扫描成功--%>
		<div class="page cthide" id="scanPage">
			<div class="page__hd">
				<div class="scan-bd scaninfo">
					<div class="weui-cells">
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label class="weui-label">商户：</label>
							</div>
							<div class="weui-cell__bd">
								<span id="tenantName"></span>
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label class="weui-label">电话：</label>
							</div>
							<div class="weui-cell__bd">
								<span id="telephone"></span>
							</div>
						</div>
						<div class="weui-cell">
							<div class="weui-cell__hd">
								<label class="weui-label">地址：</label>
							</div>
							<div class="weui-cell__bd">
								<span id="address"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="page__bd page__bd_spacing">
				<div class="scan-form">
					<div>
						<input type="text" class="scan-in" id="costNum" placeholder="输入消费金额">
						<p class="text-center">输入消费金额</p>
						<div class="weui-btn-area tn-handle text-center">
							<a class="weui-btn weui-btn_primary" id="costSubmit">完成</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%--操作成功--%>
		<div class="page msg cthide" id="successPage">
			<div class="weui-msg">
				<div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
				<div class="weui-msg__text-area">
					<h2 class="weui-msg__title">完成</h2>
					<p class="weui-msg__desc">请提醒商家确定金额，商家确定金额后您能收到对应的消费金币</p>
				</div>
				<div class="weui-msg__opr-area">
					<p class="weui-btn-area">
						<a href="${ctx}/mhome" class="weui-btn weui-btn_primary">完成，返回首页</a>
						<a href="${ctx}/mstream" class="weui-btn weui-btn_default">查看消费记录</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/vendor/qcode-decoder/qcode-decoder.min.js" type="text/javascript" charset="UTF-8"></script>
	<script src="${ctx}/mobile/js/mcost.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>