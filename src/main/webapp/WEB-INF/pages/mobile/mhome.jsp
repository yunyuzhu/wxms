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
	<title>首页</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="weui-tab__panel">
				<div class="page">
					<div class="page__hd text-center page_hd-info">
						<div class="mhd-info vert-center" id="homehdBox">
							<a href="${ctx}/mlogin" class="info-item vert-cell before">
								<p class="hdface"><i class="icon-user3"></i></p>
								<span>登录/注册</span>
							</a>
							<a href="${ctx}/mmoney" class="info-item vert-cell after">
								<p><i class="icon-coin-yen"></i>余额</p>
								<p class="mygold">¥ <span id="homeGold"></span></p>
							</a>
						</div>
					</div>
					<div class="page__bd">
						<div class="weui-cells__title">商品列表</div>
						<div class="weui-cells" id="goodsList" v-show="show">
							<a class="weui-cell weui-cell_access" v-for="item in items" v-bind:href="item.href">
								<div class="weui-cell__bd">
									<p>{{item.name}}</p>
								</div>
								<div class="weui-cell__ft"><span class="home-price">{{item.price}} 金币</span></div>
							</a>
						</div>
						<div class="weui-cells__title">最新活动</div>
						<div class="weui-panel">
							<div class="weui-panel__bd" id="actList" v-show="show">
								<a class="weui-media-box weui-media-box_appmsg" v-for="item in items" v-bind:href="item.href">
									<div class="weui-media-box__bd">
										<h4 class="weui-media-box__title">{{item.title}}</h4>
										<p class="weui-media-box__desc">{{item.abstract}}</p>
										<ul class="weui-media-box__info">
											<li class="weui-media-box__info__meta">{{item.time}}</li>
											<li class="weui-media-box__info__meta"><i class="icon-eye"></i><span>{{item.count}}</span></li>
										</ul>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<script src="${ctx}/mobile/js/mhome.js" type="text/javascript" charset="UTF-8"></script>
	</body>
</html>