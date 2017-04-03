<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkruleapply.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">选择待设置规则目标</h3>
        </div>
        <div class="box-body">
            <div class="bstable-tool" id="toolbar">
                <div class="menutabs" id="applyType">
                    <a class="menutab on">行业应用</a>
                    <a class="menutab">批量应用</a>
                    <a class="menutab">单独应用</a>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="navcons" id="applyList">
                        <!--行业列表-->
                        <div class="navcon on">
                            <h5>行业列表</h5>
                            <div class="tradeList">
                                <form class="form-horizontal" role="form">
                                    <div class="row">
                                        <div class="col-xs-5">
                                            <div class="form-group">
                                                <label for="trade" class="col-sm-2 control-label">行业</label>
                                                <div class="col-sm-7">
                                                    <div class="ct-input-frame">
                                                        <select id="tradeTab" class="form-control"></select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!--商户列表-->
                        <div class="navcon">
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
                                    <a class="btn ctbtn" id="shopSubmit">查询商户</a>
                                </div>
                            </div>
                            <h5>商户列表</h5>
                            <table class="table" id="listTable">
                                <thead>
                                <tr>
                                    <th class="col0"></th>
                                    <th class="col1">序号</th>
                                    <th class="col2">商户名称</th>
                                    <th class="col3">行业</th>
                                    <th class="col4">联系人</th>
                                    <th class="col5">联系人电话</th>
                                </tr>
                                </thead>
                                <tbody class="listbody"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--规则列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">选择待应用规则</h3>
        </div>
        <div class="box-body">
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
                    <a class="btn ctbtn" id="ruleSubmit">查询规则</a>
                </div>
            </div>
            <h5>规则列表</h5>
            <table class="table" id="ruleTable">
                <thead>
                <tr>
                    <th class="col0"></th>
                    <th class="col1">序号</th>
                    <th class="col2">规则名称</th>
                    <th class="col3">兑换率</th>
                    <th class="col4">备注</th>
                    <th class="col5">创建时间</th>
                </tr>
                </thead>
                <tbody class="listbody"></tbody>
            </table>
        </div>
        <!--应用规则-->
        <div class="box-footer no-border">
            <a id="ruleApply" class="btn btn-primary">应用规则</a>
        </div>
    </div>
</div>
