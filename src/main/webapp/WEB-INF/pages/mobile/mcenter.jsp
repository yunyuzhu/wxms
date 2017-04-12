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
	<title>账户</title>
    <base href="<%=basePath%>">
    <%@ include file="base.jsp"%>
</head>
	<body>
	<div class="ls-wrap tnwrap">
		<div class="weui-tab">
			<div class="weui-tab__panel">
				<div class="page" id="centerPage">
					<div class="page__hd centerhd">
						<div class="centerhd-face">
							<i class="icon-user3"></i>
						</div>
						<div class="centerhd-txt">
							<div class="before">
								<a href="${ctx}/mlogin" class="alink weui-btn weui-btn_mini">登录/注册</a>
							</div>
							<div class="after">
								<span class="name">yh</span>
							</div>
						</div>
					</div>
					<div class="page__bd centerbd">
						<div class="weui-cells">
							<a class="weui-cell weui-cell_access" href="${ctx}/maccount">
								<div class="weui-cell__hd">
									<i class="icon-user3"></i>
								</div>
								<div class="weui-cell__bd">
									<p>我的账户</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
						<div class="weui-cells">
							<a class="weui-cell weui-cell_access" href="${ctx}/mmoney">
								<div class="weui-cell__hd">
									<i class="icon-coin-yen"></i>
								</div>
								<div class="weui-cell__bd">
									<p>我的金币</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
						<div class="weui-cells">
							<a class="weui-cell weui-cell_access" href="${ctx}/mapplystream">
								<div class="weui-cell__hd">
									<i class="icon-th-list"></i>
								</div>
								<div class="weui-cell__bd">
									<p>兑换申请</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
						<div class="weui-cells">
							<a class="weui-cell weui-cell_access" href="${ctx}/mstream">
								<div class="weui-cell__hd">
									<i class="icon-th-list"></i>
								</div>
								<div class="weui-cell__bd">
									<p>消费记录</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
						<div class="weui-cells">
							<a class="weui-cell weui-cell_access" href="${ctx}/mabout">
								<div class="weui-cell__hd">
									<i class="icon-th-list"></i>
								</div>
								<div class="weui-cell__bd">
									<p>关于</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
						<div class="button-sp-area">
							<a href="${ctx}/logout" class="weui-btn weui-btn_warn">退出登录</a>
						</div>
					</div>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<script type="text/javascript" charset="UTF-8">
		mTabbarStyleGo(3);
        var session_value = '<%=session.getAttribute("userSession")%>';
        var $centerPage = $("#centerPage");
        var flag = (session_value == null || session_value == "null");
        if(!flag){
            $centerPage.addClass("haslogin");
		}
		else{
            $centerPage.removeClass("haslogin");
		}
	</script>
	</body>
</html>