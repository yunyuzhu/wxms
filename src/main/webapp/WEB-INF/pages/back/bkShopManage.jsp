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
                            <label for="trade" class="col-sm-2 control-label">行业</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <select id="trade" class="form-control"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="name" class="col-sm-3 control-label">商户名称</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
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
                        <th class="col1">序号</th>
                        <th class="col2">商户名称</th>
                        <th class="col3">行业</th>
                        <th class="col4">联系人</th>
                        <th class="col5">联系人电话</th>
                        <th class="col6">操作</th>
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
                        <!--左边-->
                        <div class="col-xs-6">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group mustfill">
                                        <label for="userPop" class="col-sm-2 control-label"><i>*</i>用户名</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="userPop" value="" placeholder="输入用户名">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="rowPasswordPop">
                                <div class="col-xs-12">
                                    <div class="form-group mustfill">
                                        <label for="passwordPop" class="col-sm-2 control-label"><i>*</i>密码</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="passwordPop" value="" placeholder="输入密码">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group mustfill">
                                        <label for="useFlagPop" class="col-sm-2 control-label"><i>*</i>启用状态</label>
                                        <div class="col-sm-9">
                                            <select id="useFlagPop" class="form-control"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="namePop" class="col-sm-2 control-label">商户名称</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="namePop" value="" placeholder="输入商户名称">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="tradePop" class="col-sm-2 control-label">行业</label>
                                        <div class="col-sm-9">
                                            <select id="tradePop" class="form-control"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="telPop" class="col-sm-2 control-label">商户电话</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="telPop" value="" placeholder="输入商户电话">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--右边-->
                        <div class="col-xs-6 pop-cutline">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="addrPop" class="col-sm-2 control-label">商户地址</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" id="addrPop" placeholder="输入地址"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="linkNamePop" class="col-sm-2 control-label">联系人</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="linkNamePop" value="" placeholder="输入联系人">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="linkTelPop" class="col-sm-2 control-label">联系人电话</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="linkTelPop" value="" placeholder="输入联系人电话">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label for="remarkPop" class="col-sm-2 control-label">备注</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" id="remarkPop" placeholder="输入备注信息"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
