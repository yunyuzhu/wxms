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
	<title>活动详情-首发创业</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<div class="mhd-title">消费</div>
			</div>
			<div class="weui-tab__panel">
				<div class="button-sp-area">
					<a href="javascript:void(0);" class="weui-btn weui-btn_primary costscan-btn" id="costScan">消费扫描</a>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<!--弹窗-->
	<div class="cthide" id="editPop">
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for="costNum" class="weui-label">消费数</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" id="costNum" placeholder="输入金额数">
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" charset="UTF-8">
        //是否登陆判断
        var session_value = '<%=session.getAttribute("userSession")%>';
        var isLogin = (session_value == null || session_value == "null");
	</script>
	<script src="${ctx}/mobile/js/mcost.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>