<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkusermanage.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="userName" class="col-sm-3 control-label">用户名</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="userName" value="" placeholder="输入用户名">
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
            <h3 class="boxhd-title">微信用户列表</h3>
        </div>
        <div class="box-body">
            <div class="bstable-tool" id="toolbar">
                <a id="listDel" class="btn btn-danger">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;删除
                </a>
            </div>
            <table class="table" id="listTable">
                <thead>
                    <tr>
                        <th class="col0"></th>
                        <th class="col1">序号</th>
                        <th class="col2">用户名</th>
                        <th class="col3">金额(元)</th>
                        <th class="col4">电话</th>
                        <th class="col5">创建时间</th>
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
                                <label for="userPop" class="col-sm-2 control-label">用户名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="userPop" value="" placeholder="输入用户名">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="rowPasswordPop">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="passwordPop" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="passwordPop" value="" placeholder="输入密码">
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="useFlagPop" class="col-sm-2 control-label">启用状态</label>
                                <div class="col-sm-9">
                                    <select id="useFlagPop" class="form-control"></select>
                                </div>
                                <span class="fillmark">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="namePop" class="col-sm-2 control-label">姓名</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="namePop" value="" placeholder="输入用户姓名">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="sexPop" class="col-sm-2 control-label">性别</label>
                                <div class="col-sm-9">
                                    <select id="sexPop" class="form-control"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="agePop" class="col-sm-2 control-label">年龄</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="agePop" value="" placeholder="输入用户年龄">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="telPop" class="col-sm-2 control-label">电话</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="telPop" value="" placeholder="输入用户电话">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="remarkPop" class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" id="remarkPop" placeholder="输入备注信息"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
