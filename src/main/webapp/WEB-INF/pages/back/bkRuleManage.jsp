<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkrulemanage.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-4">
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
                    <div class="col-xs-4">
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

    <!--列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">规则列表</h3>
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
                        <th class="col2">规则名称</th>
                        <th class="col3">兑换率</th>
                        <th class="col4">备注</th>
                        <th class="col5">创建时间</th>
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
                        <div class="col-xs-12">
                            <div class="form-group mustfill">
                                <label for="namePop" class="col-sm-2 control-label"><i>*</i>规则名称</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="namePop" value="" placeholder="输入规则名称">
                                </div>
                            </div>
                            <div class="form-group mustfill">
                                <label for="ratePop" class="col-sm-2 control-label"><i>*</i>规则内容</label>
                                <div class="col-sm-9">
                                    <span class="form-control-static">兑换率为</span>
                                    <input type="text" class="form-control" id="ratePop" value="" placeholder="输入规则内容">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="remarkPop" class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" id="remarkPop" placeholder="输入备注"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
