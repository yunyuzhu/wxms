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
	<title>商品兑换</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body class="body-googapply">
	<div class="ls-wrap tnwrap">
		<div class="weui-tab" id="tabPage">
			<div class="mtab-hd">
				<a href="javascript:history.go(-1);" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">商品兑换</div>
			</div>
			<div class="weui-tab__panel" id="goodsList">
				<div class="dropwrap" id="dropWrap">
					<div class="weui-cells__title"><i class="icon-ct-good"></i>商品列表</div>
					<div class="weui-cells weui-cells_checkbox">
						<label class="weui-cell weui-check__label" v-bind:for="item.id"  v-for="item in items">
							<div class="weui-cell__hd">
								<input type="checkbox" class="weui-check" name="goodsapply" v-bind:id="item.id" v-bind:data-price="item.price">
								<i class="weui-icon-checked"></i>
							</div>
							<div class="weui-cell__bd"><p>{{item.name}}</p></div>
							<div class="weui-cell__ft"><span class="home-price">{{item.price}}<i class="icon-ct-gold3"></i></span></div>
						</label>
					</div>
				</div>
			</div>
			<div class="mtab-ft clearfix">
				<span>总计：<span id="totalGold" class="apply-total"></span><span class="home-price"><i class="icon-ct-gold3"></i></span>
				<a class="weui-btn weui-btn_mini weui-btn_primary mhd-btnr" id="inSubmit">提交申请</a>
			</div>
		</div>
		<%--操作成功--%>
		<div class="page msg cthide" id="successPage">
			<div class="weui-msg">
				<div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
				<div class="weui-msg__text-area">
					<h2 class="weui-msg__title">申请成功</h2>
					<p class="weui-msg__desc">请赖心等待，我们会尽快为你处理兑换申请</p>
				</div>
				<div class="weui-msg__opr-area">
					<p class="weui-btn-area">
						<a href="${ctx}/mhome" class="weui-btn weui-btn_primary">完成，返回首页</a>
						<a href="${ctx}/mapplystream" class="weui-btn weui-btn_default">查看申请流水</a>
					</p>
				</div>
			</div>
		</div>
		<%--加载提示--%>
		<div id="loadingToast" class="cthide" style="display:none;">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">正在提交</p>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mgoodapply.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>