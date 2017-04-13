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
	<title>消费记录</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<a href="${ctx}/mcenter" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">消费记录</div>
			</div>
			<div class="weui-tab__panel">
				<div class="weui-cells__title">消费流水</div>
				<div class="weui-panel">
					<div class="weui-panel__bd" id="streamList" v-show="show">
						<div class="weui-media-box weui-media-box_text" v-for="item in items">
							<h4 class="weui-media-box__title"><p>{{item.name}}&nbsp;&nbsp;消费&nbsp;{{item.money}}元</p></h4>
							<p class="weui-media-box__desc text-right">
								<span class="text-state">{{item.time}}&nbsp;<span class="flag-state">{{item.flag}}</span></span>
							</p>
						</div>
					</div>
				</div>
				<%--<div class="weui-cells" id="streamList" v-show="show">
					<div class="weui-cell" v-for="item in items">
						<div class="weui-cell__bd">
							<p>{{item.name}}&nbsp;{{item.money}}元</p>
						</div>
						<div class="weui-cell__ft"><span class="home-price">{{item.time}}&nbsp;{{item.flag}}</span></div>
					</div>
				</div>--%>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mstream.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>