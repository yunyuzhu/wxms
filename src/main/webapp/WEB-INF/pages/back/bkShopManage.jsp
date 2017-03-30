<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkshopmanage.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="trade" class="col-sm-3 control-label">行业</label>
                            <div class="col-sm-9">
                                <select id="trade" class="form-control">
                                    <option>全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <div class="form-group">
                            <label for="name" class="col-sm-2 control-label">商户名称</label>
                            <div class="col-sm-8">
                                <div class="kh-icon-frame">
                                    <input type="text" class="form-control" id="name" value="" placeholder="输入商户名称">
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
    <!--列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">商户列表</h3>
        </div>
        <div class="box-body">
            <div class="bstable-tool" id="toolbar">
                <a id="listAdd" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;新增
                </a>
                <a id="listDel" class="btn btn-danger">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;删除
                </a>
            </div>
            <table class="table" id="listTable">
                <thead>
                    <tr>
                        <th class="col0"></th>
                        <th class="col1">名称</th>
                        <th class="col2">行业</th>
                        <th class="col3">地址</th>
                        <th class="col4">联系方式</th>
                        <th class="col5">联系人</th>
                        <th class="col6">联系人信息</th>
                        <th class="col7">操作</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <!--弹窗-->
    <div class="cthide" id="editPop">
        <div class="box no-border boxpop">
            <div class="box-body">
                <form class="form-horizontal" role="form">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="namePop" class="col-sm-2 control-label">名称</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="namePop" value="" placeholder="输入商户名称">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="tradePop" class="col-sm-2 control-label">行业</label>
                                <div class="col-sm-9">
                                    <select id="tradePop" class="form-control">
                                        <option>全部</option>
                                    </select>
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="addrPop" class="col-sm-2 control-label">地址</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="addrPop" value="" placeholder="输入地址">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="telPop" class="col-sm-2 control-label">联系方式</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="telPop" value="" placeholder="输入联系方式">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="linkNamePop" class="col-sm-2 control-label">联系人</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="linkNamePop" value="" placeholder="输入联系人">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="linkTelPop" class="col-sm-2 control-label">联系人信息</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="linkTelPop" value="" placeholder="输入联系人信息">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <%--<div class="box-footer no-border">
                <a class="btn ctbtn" id="saveBtn">保存</a>
                <a class="btn ctbtn" id="cancleBtn">取消</a>
            </div>--%>
        </div>
    </div>

    <!--弹窗-->
    <div class="khpop-wrap fadeIn" id="khpopWrap">
        <div class="khpop popsize1 fadeInDownBig" id="khpop">
            <span class="popclose" id="khpopClose">&times;</span>
            <div class="pophd">
                <h5>商户信息</h5>
            </div>
            <div class="popbody">
                <div class="popcon">
                    <form class="form-horizontal" role="form">
                        <div class="row">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="userPop" class="col-sm-2 control-label">名称</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="userPop" value="" placeholder="输入账户">
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="passwdRow">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="passwd" class="col-sm-2 control-label">密码</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control" id="passwd" value="" placeholder="输入密码">
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="accountPop" class="col-sm-2 control-label">昵称</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="accountPop" value="" placeholder="输入昵称">
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="rolePop" class="col-sm-2 control-label">角色</label>
                                    <div class="col-sm-9">
                                        <select id="rolePop" class="form-control">
                                            <option>全部</option>
                                        </select>
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="display:none;">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="depa" class="col-sm-2 control-label">部门</label>
                                    <div class="col-sm-9">
                                        <select id="depa" class="form-control">
                                            <option value="">全部</option>
                                        </select>
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group mustfill">
                                    <label for="useflagPop" class="col-sm-2 control-label">状态</label>
                                    <div class="col-sm-9">
                                        <select id="useflagPop" class="form-control">
                                            <option value="1">启用</option>
                                            <option value="0">禁用</option>
                                        </select>
                                    </div>
                                    <span class="fillmark">*</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-xs-offset-2">
                                <div class="form-group">
                                    <label for="remarkPop" class="col-sm-2 control-label">备注</label>
                                    <div class="col-sm-9">
                                        <textarea id="remarkPop" class="form-control remark-txt"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
