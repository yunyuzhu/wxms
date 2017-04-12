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
	<title>兑换申请</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<a href="javascript:history.go(-1);" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">兑换申请</div>
			</div>
			<div class="weui-tab__panel">
				<div class="weui-cells__title">申请流水</div>
				<div class="weui-cells" id="streamList" v-show="show">
					<div class="weui-cell" v-for="item in items">
						<div class="weui-cell__bd">
							<p>{{item.goodsName}}&nbsp;&nbsp;价格:{{item.price}}</p>
						</div>
						<div class="weui-cell__ft"><span class="home-price">{{item.time}}</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mapplystream.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>