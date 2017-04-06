<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<script type="text/javascript" charset="utf-8">
    window.UMEDITOR_HOME_URL = "${ctx}/umeditor/";
</script>
<script type="text/javascript" src="umeditor/third-party/template.min.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/umeditor.config.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/umeditor.min.js" charset="utf-8"></script>
<script type="text/javascript" src="umeditor/lang/zh-cn/zh-cn.js" charset="utf-8"></script>
<script type="text/plain" id="actContentPop" style="width:760px;height:300px;"></script>
<script type="text/javascript">
    var myUM = null;
    //创建编辑器
    function UMCreate(){
        if(!isNull(myUM)){
            UM.getEditor('actContentPop').destroy();
        }
        myUM = UM.getEditor('actContentPop',{
            autoHeightEnabled: true,
            autoFloatEnabled: true,
            toolbar:[
            'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
            '| justifyleft justifycenter justifyright justifyjustify |',
            'link unlink | emotion image video  | map',
            '| horizontal print preview', 'drafts', 'formula'
            ]
        });
    }
    UMCreate();
    //销毁编辑器
    function UMDelete(){
        UM.getEditor('actContentPop').destroy();
    }
    //获取内容
    function UMGetContent(){
        return UM.getEditor('actContentPop').getContent();
    }
    //设置内容
    function UMSetContent(content){
        UM.getEditor('actContentPop').setContent(content);
    }
</script>
