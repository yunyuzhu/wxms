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
					<div class="page__hd text-center centerhd">
						<div class="centerhd-info">
							<div class="mhd-info vert-center">
								<a href="${ctx}/mlogin" class="info-item vert-cell before">
									<p class="hdface"><i class="icon-ct-myacc2"></i></p>
									<span>登录/注册</span>
								</a>
								<div class="info-item vert-cell after hdinfo-face">
									<a href="${ctx}/mfacepic">
										<img class="faceimg" src="${ctx}/mobile/img/face.jpg" alt="头像">
									</a><br/>
									<span class="name">yh</span>
								</div>
							</div>
						</div>
					</div>
					<div class="page__bd centerbd">
						<div class="center-nav">
							<div class="weui-grids">
								<a href="${ctx}/mmoney" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-gold"></i>
									</div>
									<p class="weui-grid__label">我的金币</p>
								</a>
								<a href="${ctx}/mapplystream" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-duihuan"></i>
									</div>
									<p class="weui-grid__label">兑换申请</p>
								</a>
								<a href="${ctx}/mstream" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-cost"></i>
									</div>
									<p class="weui-grid__label">消费记录</p>
								</a>
								<a href="${ctx}/maccount" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-myacc1"></i>
									</div>
									<p class="weui-grid__label">我的账户</p>
								</a>
								<a href="${ctx}/maccount?isedit=true" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-myaccmod"></i>
									</div>
									<p class="weui-grid__label">修改资料</p>
								</a>
								<a href="${ctx}/mabout" class="weui-grid">
									<div class="weui-grid__icon">
										<i class="icon-ct-about"></i>
									</div>
									<p class="weui-grid__label">关于</p>
								</a>
							</div>
						</div>
						<%--<div class="weui-cells">
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
						</div>--%>
						<div class="button-sp-area">
							<a href="${ctx}/mlogout" class="weui-btn weui-btn_warn">退出登录</a>
						</div>
					</div>
				</div>
			</div>
			<!--底部导航-->
			<%@ include file="mtabbar.jsp"%>
		</div>
	</div>
	<script type="text/javascript" charset="UTF-8">
        //加载页面
        function loadhtml(){
            var $centerPage = $("#centerPage");
            if(isLogin()){
                $centerPage.addClass("cthas");
            }
            else{
                $centerPage.removeClass("cthas");
            }
        }
        mTabbarStyleGo(3);
        loadhtml();
	</script>
	</body>
</html>