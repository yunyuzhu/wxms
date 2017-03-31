<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkcoststream.js" type="text/javascript" charset="UTF-8"></script>

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
            <h3 class="boxhd-title">消费流水</h3>
        </div>
        <div class="box-body">
            <table class="table" id="listTable">
                <thead>
                <tr>
                    <th class="col0">序号</th>
                    <th class="col1">商户</th>
                    <th class="col2">行业</th>
                    <th class="col3">消费金额(元)</th>
                    <th class="col4">电话</th>
                    <th class="col5">确认消费时间</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>
