<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="app/js/shop/shcostrecord.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page">
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">消费流水</h3>
        </div>
        <div class="box-body">
            <%--<p>当前金币数：<span class="marktxt" id="totalCostNum"></span></p>--%>
            <table class="table" id="costRecordTableDiv">
                <thead>
                <tr>
                    <th class="col0">姓名</th>
                    <th class="col1">消费金额(元)</th>
                    <th class="col2">电话</th>
                    <th class="col3">确认消费时间</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>
