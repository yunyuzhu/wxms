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
	<title>更换头像</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="mtab-hd">
				<a href="${ctx}/mcenter" class="mhd-back"><i class="icon-arrow-left2"></i></a>
				<div class="mhd-title">更换头像</div>
			</div>
			<div class="weui-tab__panel">
				<div class="page__hd text-center">
					<div class="mhd-info vert-center">
						<div class="info-item vert-cell hdinfo-face">
							<p>
								<img id="faceImg" class="faceimg" src="${ctx}/mobile/img/face.jpg" alt="头像">
							</p>
						</div>
					</div>
				</div>
				<div class="page__bd">
					<div class="button-sp-area text-center">
						<label class="face-up">
							<a class="weui-btn weui-btn_mini weui-btn_primary">选择图片</a>
							<input id="faceInput" name="photoInfo" class="cthide" type="file" accept="image/*"/>
						</label>
						<div class="cthide" id="facePrev">
							<img id="facePrevImg" class="faceimg-prev" src="" alt="图片预览">
						</div>
					</div>
					<div class="accinfo-btn cthide" id="faceHandle">
						<div class="weui-btn-area text-center">
							<a id="faceSave" class="weui-btn weui-btn_mini weui-btn_primary btn-save">保存</a>
							<a id="faceCancle" class="weui-btn weui-btn_mini weui-btn_primary btn-cancle">取消</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/mobile/vendor/plugin/ajaxfileupload.js" type="text/javascript" charset="UTF-8"></script>
	<script src="${ctx}/mobile/js/mfacepic.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>