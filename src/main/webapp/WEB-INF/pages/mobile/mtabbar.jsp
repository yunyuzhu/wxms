<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="weui-tabbar" id="mWxTabbar">
	<a href="${ctx}/mhome" class="weui-tabbar__item weui-bar__item_on">
		<i class="weui-tabbar__icon icon-home"></i>
		<p class="weui-tabbar__label">首页</p>
	</a>
	<a href="${ctx}/mcost" class="weui-tabbar__item">
		<i class="weui-tabbar__icon icon-qrcode"></i>
		<p class="weui-tabbar__label">扫描</p>
	</a>
	<a href="${ctx}/mactivity" class="weui-tabbar__item">
		<i class="weui-tabbar__icon icon-th-list"></i>
		<p class="weui-tabbar__label">活动</p>
	</a>
	<a href="${ctx}/mcenter" class="weui-tabbar__item">
		<i class="weui-tabbar__icon icon-user"></i>
		<p class="weui-tabbar__label">账户</p>
	</a>
</div>
<script type="text/javascript" charset="UTF-8">
	function mTabbarStyleGo(index){
	    var active = "weui-bar__item_on";
	    var $tabs = $("#mWxTabbar").find(".weui-tabbar__item");
	    var size = $tabs.size();
	    index = (index >= size) ? 0 : index;
        $tabs.removeClass(active).eq(index).addClass(active);
	}
</script>
