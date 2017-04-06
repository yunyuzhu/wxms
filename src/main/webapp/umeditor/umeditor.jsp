<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<script type="text/javascript" src="umeditor/third-party/template.min.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/umeditor.config.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/umeditor.min.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/lang/zh-cn/zh-cn.js" charset="utf-8"></script>

<script type="text/plain" id="myEditor" style="width:600px;height:240px;"></script>
<!-- 实例化编辑器 -->
<script type="text/javascript">
    var um = UM.getEditor('myEditor',{
        toolbars: [
            ['fullscreen', 'source', 'undo', 'redo', 'bold']
        ],
        autoHeightEnabled: true,
        autoFloatEnabled: true
    });
</script>
