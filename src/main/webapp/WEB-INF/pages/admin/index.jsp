<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>首发创业平台</title>
	<meta charset="UTF-8"/>
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<base href="<%=basePath%>">
	<%@ include file="../common.jsp"%>
	<script type="text/javascript">
		var rootPath = "${ctx}";
	</script>
	</head>
	<body class="hold-transition skin-green sidebar-mini">
		<div class="wrapper">
			<!--头部-->
			<%--<header class="main-header"></header>--%>
			<!--左边栏-->
			<aside class="main-sidebar">
				<%@ include file="aside.jsp"%>
			</aside>
			<!--内容区-->
			<div class="content-wrapper">
				<div class="content-header ctcon-hd">
					<h1 id="contentTitle"></h1>
					<ol class="breadcrumb">
						<li><a id="crumbPathMain"></a></li>
						<li class="active" id="crumbPathSub"></li>
					</ol>
				</div>
				<div class="content">
					<div id="loadhtml" class="content-body ctcon-body"></div>
				</div>
			</div>
			<!-- 底部 -->
			<footer class="main-footer ct-ft">
				<%@ include file="footer.jsp"%>
			</footer>
		</div>
	</body>
</html>