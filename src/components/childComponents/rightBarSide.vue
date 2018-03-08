<template>
	<div class="right-bar-side pull-right">
		<div class="r-bar-block">
			<div class="r-bar-header p-ten font-b clearfix">
				<span class="p-l-t pull-left">设置</span>
				<i class="pull-right glyphicon glyphicon-chevron-down">
				</i>
			</div>
			<ul class="header-sub-list">
				<li class="sub-list-active">
					<router-link to="/system/set/baseSet">微品设置</router-link>
				</li>
				<li>
					<router-link to="/system/set/adSlot">广告位</router-link>
				</li>
				<li>
					<router-link to="/system/set/productClassify">产品分类</router-link>
				</li>
				<li>
					<router-link to="/system/set/typeSet">类型设置</router-link>
				</li>
			</ul>
		</div>
		<div class="r-bar-block">
			<div class="r-bar-header p-ten font-b clearfix">
				<span class="p-l-t pull-left">音乐管理</span>
				<i class="pull-right glyphicon glyphicon-chevron-down">
				</i>
			</div>
			<ul class="header-sub-list">
				<li><a href="#">音乐列表</a></li>
				<li><a href="#">音乐上传</a></li>
			</ul>
		</div>
		<div class="r-bar-block">
			<div class="r-bar-header p-ten font-b clearfix">
				<span class="p-l-t pull-left">用户管理</span>
				<i class="pull-right glyphicon glyphicon-chevron-down">
				</i>
			</div>
			<ul class="header-sub-list">
				<li><a href="#">服务商列表</a></li>
				<li><a href="#">用户列表</a></li>
			</ul>
		</div>
		<div class="r-bar-block">
			<div class="r-bar-header p-ten font-b clearfix">
				<span class="p-l-t pull-left">财务</span>
				<i class="pull-right glyphicon glyphicon-chevron-down">
				</i>
			</div>
			<ul class="header-sub-list">
				<li><a href="#">礼品提现</a></li>
				<li><a href="#">投票总金额</a></li>
				<li><a href="#">日金额统计</a></li>
				<li><a href="#">活动统计</a></li>
				<li><a href="#">礼品提现</a></li>
				<li><a href="#">当天统计</a></li>
			</ul>
		</div>
	</div>
</template>
<style>
.right-bar-side {
	width: 70%;
	color: #6b6b6b;
	height: 100%;
	overflow: auto;
}
.r-bar-block .header-sub-list li {
	height: 40px;
	line-height: 40px;
	text-indent: 30px;
}
.r-bar-block .header-sub-list li:hover {
	background: #e7e7e7;
}
.r-bar-block .header-sub-list li .router-link-active {
	background: #d5d5d5;
}
.r-bar-block .header-sub-list li a {
	display: block;
	width: 100%;
	height: 100%;
	color: #6b6b6b;
}
a:hover {
	text-decoration: none;
}
</style>
<script>
	
</script>