<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!--头部-->
<header class="main-header hxheader">
    <nav class="navbar hxheader-body clearfix" role="navigation">
        <div class="header-left">
           <div class="nav-zoom">
                <span class="zoom-btn">
                    <i class="zoom-line"></i>
                    <i class="zoom-line"></i>
                    <i class="zoom-line"></i>
                </span>
           </div>
        </div>
        <div class="header-right">
            <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="assets/img/user2-160x160.jpg" class="user-image" alt="User Image"/>
                        <span class="hidden-md">${userFormMap.accountName}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- myself info-->
                        <li class="dropdown-li">
                            <a href="" class="btn"><i class="fa fa-user"></i>个人资料</a>
                        </li>
                        <!-- logout-->
                        <li class="dropdown-li">
                            <a href="logout" class="btn"><i class="fa fa-power-off"></i>注销</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header>
