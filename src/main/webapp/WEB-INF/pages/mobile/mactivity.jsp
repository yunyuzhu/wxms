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
	<title>首页-首发创业</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<div class="mhd-title">首页</div>
			</div>
			<div class="weui-tab__panel" id="mActivityPanel">
				<article class="weui-article">
					<div>
						<h2 class="title">介绍</h2>
						<p>首发创业是可提供给用户用于金币消费的互联网平台系统，操作简单方便。</p>
					</div>
				</article>
				<div class="weui-cells__title">活动列表</div>
				<div class="weui-cells">
					<a class="weui-cell weui-cell_access" v-for="item in items" v-bind:href="item.href">
						<div class="weui-cell__bd">
							<p>{{item.title}}</p>
						</div>
						<div class="weui-cell__ft"></div>
					</a>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mactivity.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>