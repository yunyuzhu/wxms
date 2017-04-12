<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<!--------------- CSS文件 ---------------->
<!-- ico网页标签图标 -->
<link rel="shortcut icon" href="${ctx}/assets/img/ctapp.ico" type="image/x-icon"/>
<!-- weui -->
<link rel="stylesheet" href="${ctx}/mobile/vendor/weui/css/weui.min.css" type="text/css"/>
<!-- icomoon -->
<link rel="stylesheet" href="${ctx}/mobile/vendor/icomoon/style.css" type="text/css"/>
<!-- my style -->
<link rel="stylesheet" href="${ctx}/mobile/css/bass.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/mobile/css/style.css" type="text/css"/>
<!------------ Javascript文件 ----------->
<script type="text/javascript">
    var rootPath = "${ctx}";
    //是否登录
    function isLogin(){
        var session_value = '<%=session.getAttribute("userSession")%>';
        console.log("session="+session_value);
        return !(session_value == null || session_value == "null");
    }
</script>
<!-- jQuery -->
<script src="${ctx}/mobile/vendor/plugin/jquery-1.9.1.min.js" type="text/javascript"></script>
<!-- tips -->
<script src="${ctx}/mobile/vendor/plugin/jquery.tips.js" type="text/javascript"></script>
<!-- weui -->
<script src="${ctx}/mobile/vendor/weui/js/weui.min.js" type="text/javascript"></script>
<!-- Layer -->
<script src="${ctx}/assets/plugin/layer/layer.js" type="text/javascript"></script>
<!-- Vue.js -->
<script src="${ctx}/assets/vendor/vue/vue.min.js" type="text/javascript"></script>
<!-- my js -->
<script src="${ctx}/mobile/js/common.js" type="text/javascript"></script>
