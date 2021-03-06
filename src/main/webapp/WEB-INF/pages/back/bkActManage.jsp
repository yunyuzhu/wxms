﻿<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="ct-page">
    <p>
        <a id="listAdd" class="btn btn-primary">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;发布活动
        </a>
    </p>
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">活动查询</h3>
        </div>
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
                <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="title" class="col-sm-3 control-label">标题</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="title" value="" placeholder="输入标题">
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
            <h3 class="boxhd-title">活动列表</h3>
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
                        <th class="col2">标题</th>
                        <th class="col3">内容摘要</th>
                        <th class="col4">发布时间</th>
                        <th class="col5">阅读量</th>
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
                            <div class="actinfo-hd">
                                <div class="form-group mustfill">
                                    <label for="actTitlePop" class="col-sm-1 control-label"><i>*</i>活动标题</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="actTitlePop" value="" placeholder="输入活动标题">
                                    </div>
                                </div>
                            </div>
                            <div class="actinfo-body">
                                <div class="form-group mustfill">
                                    <label for="abstractPop" class="col-sm-1 control-label"><i>*</i>内容摘要</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="abstractPop" value="" placeholder="输入内容摘要">
                                    </div>
                                </div>
                                <div class="form-group mustfill">
                                    <label for="actContentPop" class="col-sm-1 control-label"><i>*</i>活动内容</label>
                                    <div class="col-sm-10">
                                        <%@ include file="../../../umeditor/umeditor.jsp"%>
                                        <%--<textarea class="form-control pop-acth" id="actContentPop" placeholder="输入活动内容"></textarea>--%>
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
<script src="app/js/back/bkactmanage.js" type="text/javascript" charset="UTF-8"></script>
