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
	<title>活动内容-首发创业</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<a href="javascript:history.go(-1);" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">活动内容</div>
			</div>
			<div class="weui-tab__panel" id="mActInfoPanel">
				<article class="weui-article">
					<h1 class="title">{{title}}</h1>
					<div class="weui-footer__text">
						<span>阅读量：{{count}}</span><br/>
						<span>创建时间：{{time}}</span>
					</div>
					<section>
						<p>{{content}}</p>
					</section>
				</article>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mactinfo.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>