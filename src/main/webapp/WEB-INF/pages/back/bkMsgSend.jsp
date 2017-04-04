<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkmsgsend.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--发送短信-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group mustfill">
                            <label for="msgContent" class="col-sm-1 control-label"><i>*</i>短信内容</label>
                            <div class="col-sm-9">
                                <textarea class="form-control msgh" id="msgContent" placeholder="输入短信内容"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="box-footer no-border">
            <a id="msgSend" class="btn btn-primary">发送短信</a>
        </div>
    </div>
    <!--列表-->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">选择待发送短信用户列表</h3>
        </div>
        <div class="box-body">
            <div class="bstable-tool" id="toolbar">
                <form class="form-horizontal" role="form">
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="form-group">
                                <label for="userType" class="col-sm-3 control-label">用户类型</label>
                                <div class="col-sm-8">
                                    <div class="ct-input-frame">
                                        <select id="userType" class="form-control"></select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <table class="table" id="listTable">
                <thead>
                    <tr>
                        <th class="col0"></th>
                        <th class="col1">序号</th>
                        <th class="col2">用户类型</th>
                        <th class="col3">名称</th>
                        <th class="col4">电话</th>
                    </tr>
                </thead>
                <tbody class="listbody"></tbody>
            </table>

        </div>
    </div>
</div>
