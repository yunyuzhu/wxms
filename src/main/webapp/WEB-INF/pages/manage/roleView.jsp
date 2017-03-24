<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="assets/plugin/jstree/jstree.min.js" type="text/javascript" charset="UTF-8"></script>
<script src="app/js/manage/roleview.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">角色列表</h3>
        </div>
        <div class="box-body">
            <table class="table" id="roleListTable">
                <thead>
                <tr>
                    <th class="col0">序号</th>
                    <th class="col1">角色</th>
                    <th class="col2">描述</th>
                    <th class="col3">操作</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <!--弹窗-->
    <div class="khpop-wrap fadeIn" id="khpopWrap">
        <div class="khpop popsize1 fadeInDownBig" id="khpop">
            <span class="popclose" id="khpopClose">&times;</span>
            <div class="pophd">
                <h5>权限配置</h5>
            </div>
            <div class="popbody">
                <div class="poplabel">当前角色：<span id="popLabel" class="txtmark"></span></div>
                <div class="popcon">
                    <div class="ztree roleauth-tree" id="roleAuthTree"></div>
                </div>
                <div class="pophandle">
                    <div class="row">
                        <div class="col-xs-8 col-xs-offset-2">
                            <div class="row">
                                <div class="col-xs-9 col-xs-offset-2">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <a class="btn khbtn handle-save" id="savePop">保存</a>
                                        </div>
                                        <div class="col-xs-6">
                                            <a class="btn khbtn handle-cancle" id="canclePop">取消</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
