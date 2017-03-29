<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="ctft-words">
	Copyright &copy; 2014-<span id="copyToYear">2016</span>首发创业平台 版权所有
</div>
<script type="text/javascript">
	$(document).ready(function() {
		var nowYear = (new Date()).getFullYear();
		$("#copyToYear").text(nowYear);
	});
</script>