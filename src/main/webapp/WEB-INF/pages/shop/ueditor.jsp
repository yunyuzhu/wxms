<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- 配置文件 -->
<script type="text/javascript" src="ueditor/ueditor.config.js" charset="UTF-8"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="ueditor/ueditor.all.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="ueditor/ueditor.all.js" charset="UTF-8"></script>
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" src="ueditor/lang/zh-cn/zh-cn.js" charset="UTF-8" ></script>

<!-- 实例化编辑器 -->
<style type="text/css">
	div{
            width:100%;
        }

</style>

<div class="ct-page">
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="form-group">
                            <label for="startTime" class="col-sm-3 control-label">开始时间</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="startTime" value="" placeholder="输入开始时间">
                                    <i class="fa fa-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <div class="form-group">
                            <label for="endTime" class="col-sm-3 control-label">结束时间</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="endTime" value="" placeholder="输入结束时间">
                                    <i class="fa fa-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="box-footer no-border">
            <a class="btn ctbtn" id="inSubmit">查&nbsp;询</a>
        </div>
    </div>
    <div>
    	<h1>完整demo</h1>
		<script id="editor" style="width:1024px;height:200px;" type="text/plain"></script>
		<div data-options="region:center;">
			<textarea id="editor" style="width:95%;height:95%;"></textarea>
		</div>
	</div>
</div>

<script type="text/javascript">
var ue = UE.getEditor('editor');
</script> 
