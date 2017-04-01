<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<section class="sidebar">
	<div class="ctside-hd">
		<!-- logo -->
		<div class="ctside-logo">
			<img class="logo-max" src="assets/img/dmsslogomax.png" alt="logo"/>
			<img class="logo-min" src="assets/img/dmsslogomin.png" alt="logo"/>
		</div>
		<!-- 用户-->
		<div class="ctside-user clearfix">
			<div class="userinfo fl">
				<div class="user-center dropdown">
					<a href="javascript:void(0);" class="dropdown-toggle user-link" data-toggle="dropdown">
						<img src="assets/img/appuserimg.jpg" class="user-image ctradius" alt="User Image"/>
						<span class="user-name">${userFormMap.userName}</span>
						<i class="arrow-down"></i>
					</a>
					<ul class="dropdown-menu ctfadeInRight">
						<!-- logout-->
						<li class="dropdown-li">
							<a href="logout" class="btn"><i class="fa fa-power-off"></i>安全退出</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="ctside-zoom fr" id="toggle_site">
				<span class="zoom-btn">
					<i class="zoom-line"></i>
					<i class="zoom-line"></i>
					<i class="zoom-line"></i>
				</span>
			</div>
		</div>
	</div>
	<!-- 菜单栏-->
	<ul class="sidebar-menu" id="menuId">
		<c:forEach var="key" items="${list}" varStatus="s">
			<li class="treeview">
				<c:if test="${key.children.size() == 0}">
					<a href="javascript:void(0)" class="active"
					   menus-array="${key.name},${key.name},${key.resUrl},${key.id}">
						<i class="fa fa-home"></i>
						<span>${key.name}</span>
					</a>
				</c:if>
				<c:if test="${key.children.size() > 0}">
					<a href="javascript:void(0)">
						<c:if test="${s.index==0}">
							<i class="fa fa-th"></i>
						</c:if>
						<c:if test="${s.index==1}">
							<i class="fa fa-table"></i>
						</c:if>
						<c:if test="${s.index==2}">
							<i class="fa fa-laptop"></i>
						</c:if>
						<c:if test="${s.index==3}">
							<i class="fa fa-dashboard"></i>
						</c:if>
						<c:if test="${s.index==4}">
							<i class="fa fa-pie-chart"></i>
						</c:if>
						<c:if test="${s.index==5}">
							<i class="fa fa-laptop"></i>
						</c:if>
						<c:if test="${s.index==6}">
							<i class="fa fa-table"></i>
						</c:if>
						<c:if test="${s.index==7}">
							<i class="fa fa-dashboard"></i>
						</c:if>

						<span>${key.name}</span>
						<c:if test="${key.children.size() > 0}">
							<i class="fa fa-angle-left pull-right"></i>
						</c:if>
					</a>
				</c:if>
				<ul class="treeview-menu">
					<c:forEach var="ks" items="${key.children}">
						<li id="${ks.id}">
							<c:if test="${ks.children.size() > 0}">
								<a href="javascript:void(0)">
									<i class="fa fa-book"></i>
									<span>${ks.name}</span>
									<i class="fa fa-angle-left pull-right"></i>
								</a>
								<ul class="treeview-menu">
									<c:forEach var="kc" items="${ks.children}">
										<li id="${kc.id}">
											<a href="javascript:void(0)" class="active" menus-array="${ks.name},${kc.name},${kc.resUrl}?id=${kc.id},${kc.id}">
												<%--<i class="fa fa-circle-o"></i>--%>
												<span>${kc.name}</span>
											</a>
										</li>
									</c:forEach>
								</ul>
							</c:if>
							<c:if test="${ks.children.size() == 0}">
								<a href="javascript:void(0)" class="active" menus-array="${key.name},${ks.name},${ks.resUrl},${ks.id}">
									<span>${ks.name}</span>
								</a>
							</c:if>
						</li>
					</c:forEach>
				</ul>
			</li>
		</c:forEach>
	</ul>
</section>