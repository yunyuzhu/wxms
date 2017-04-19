<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="assets/plugin/qrcode/jquery.qrcode.min.js" type="text/javascript" charset="UTF-8"></script>
<script src="app/js/shop/shopaccount.js" type="text/javascript" charset="UTF-8"></script>

<div class="ct-page" id="shopAccount">
    <!--商户基本信息 -->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">基本信息</h3>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-xs-4">
                    <div class="info-list">
                        <p><span class="tag">名称：</span><span class="value">{{baseinfo.name}}</span></p>
                        <p><span class="tag">行业：</span><span class="value">{{baseinfo.trade}}</span></p>
                        <p><span class="tag">地址：</span><span class="value">{{baseinfo.addr}}</span></p>
                        <p><span class="tag">联系方式：</span><span class="value">{{baseinfo.tel}}</span></p>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="shcode-box">
                        <div id="twocode" class="shcode"></div>
                        <p class="text-center">消费二维码</p>
                        <div class="twocode-dl nomarg">
                            <div class="cthide">
                                <div id="dlQR"></div>
                            </div>
                            <a class="btn ctbtn btn-block" id="dlQRLink">下载二维码</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--商户联系人 -->
    <div class="box no-border">
        <div class="box-header with-border">
            <h3 class="boxhd-title">联系人</h3>
        </div>
        <div class="box-body">
            <div class="info-list">
                <p><span class="tag">姓名：</span><span class="value">{{linkman.name}}</span></p>
                <p><span class="tag">联系方式：</span><span class="value">{{linkman.tel}}</span></p>
            </div>
        </div>
    </div>
</div>
