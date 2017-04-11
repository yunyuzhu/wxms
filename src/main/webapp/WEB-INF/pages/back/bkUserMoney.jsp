<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/back/bkusermoney.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <!--输入部分-->
    <div class="box no-border">
        <div class="box-body">
            <form class="form-horizontal" role="form">
                <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="name" class="col-sm-3 control-label">用户姓名</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="name" value="" placeholder="输入用户姓名">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="phone" class="col-sm-3 control-label">用户电话</label>
                            <div class="col-sm-8">
                                <div class="ct-input-frame">
                                    <input type="text" class="form-control" id="phone" value="" placeholder="输入用户电话">
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
            <h3 class="boxhd-title">用户列表</h3>
        </div>
        <div class="box-body">
            <table class="table" id="listTable">
                <thead>
                    <tr>
                        <th class="col0">序号</th>
                        <th class="col1">用户姓名</th>
                        <th class="col2">用户电话</th>
                        <th class="col3">金币数</th>
                        <%--<th class="col4">操作</th>--%>
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
                    <div class="form-group">
                        <label for="namePop" class="col-sm-4 control-label">用户姓名：</label>
                        <div class="col-sm-8">
                            <span class="form-control-static marktxt" id="namePop"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="namePop" class="col-sm-4 control-label">当前金币数：</label>
                        <div class="col-sm-8">
                            <span class="form-control-static pop-goldnum" id="goldNum"></span>
                        </div>
                    </div>
                    <div class="form-group mustfill">
                        <label for="goldPop" class="col-sm-4 control-label"><i>*</i>兑换金币数</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="goldPop" value="" placeholder="输入兑换金币数">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
