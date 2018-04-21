<template>
	<div class="left-side affix clearfix">
		<div class="left-bar-side pull-left">
		   <ul class="text-center">
			<li v-for="(info, index) in nodeList" :class="{'list-item-active': index == currentIndex}" class="item" @click="changeNodeList(info, index)">
				<i :class="info.icon"></i>
				<div class="item-desc">{{info.title}}</div>
			</li>
			<!-- <li class="item">
				<i class="glyphicon glyphicon-asterisk"></i>
				<div class="item-desc">系统</div>
			</li>
			<li class="item">
				<i class="glyphicon glyphicon-calendar"></i>
				<div class="item-desc">日志</div>
			</li>
			-->

		   </ul>
	    </div>
	    <div class="right-bar-side pull-right">
		   <div v-for="nodeSub in nodeListChild['child']" class="r-bar-block">
				<div class="r-bar-header p-ten font-b clearfix">
					<span class="p-l-t pull-left">{{nodeSub.title}}</span>
					<i class="pull-right glyphicon glyphicon-chevron-down">
					</i>
				</div>
				<ul class="header-sub-list">
					<li v-for="nodeSubInfo in nodeSub['child']">
						<router-link :to="'/' + nodeListChild.name + '/' + nodeSub.name + '/' + nodeSubInfo.name">{{nodeSubInfo.title}}</router-link>
					</li>
				</ul>
		   </div>
	    </div>
		<!-- <div class="r-bar-block">
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
		</div>-->
		<!-- <leftBarSide></leftBarSide> -->
		<!-- <rightBarSide></rightBarSide> -->
	</div>
</template>
<style>

.left-side {
	width: 250px;
	height: 100%;
	top: 52px;
	left: 0;
	border-right: 1px solid #dad8d8;
	background: #F5F5F5;
	z-index: 2;
}
.left-bar-side {
	width: 30%;
	background: #5e5e5e;
	height: 100%;
	overflow: auto;
}
.left-bar-side ul .item {
	font-size: 16px;
	color: #fff;
	height: 60px;
	padding-top: 10px;
}
.left-bar-side ul .item:hover {
	background: #6e6e6e;
}
.left-bar-side ul .item.list-item-active {
	background: #808080;
}
.left-bar-side ul .item .item-desc {
	line-height: 25px;
	font-size: 14px;
	cursor: default;
}

.right-bar-side {
	width: 70%;
	color: #6b6b6b;
	height: 100%;
	overflow: auto;
	padding-bottom: 100px;
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
import nodeListData from './testNodeData.js';
export default {
	data() {
		return {

			nodeListData,
			nodeList: {},
			nodeListChild: {},
			currentIndex: 0
		}
	},
	mounted() {

		this.nodeList = this.toMakeTree(this.nodeListData);
		this.nodeInit();
		this.showOrHideNodeList();
	},
	methods: {
		//初始化节点的位置
		nodeInit() {
			let url = window.location.href,
				location = url.split('#')[1],
				pageModule = location.split('/')[1];
			for(let i = 0, len = this.nodeList.length; i < len; i++) {
				if(this.nodeList[i].name == pageModule) {
					this.changeNodeList(this.nodeList[i], i);
					break;
				}
			}
		},
		//显示隐藏菜单列表
		showOrHideNodeList() {
			setTimeout(function() {
				$('.right-bar-side').on('click', '.r-bar-header', function(e) {
					let nodeList = $(this).next();
					if(nodeList.is(':hidden')) {
						nodeList.slideDown('fast');
						$(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
					} else {
						nodeList.slideUp('fast');
						$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
					}
				})
			}, 100);
		},
		changeNodeList(info, index) {
			this.currentIndex = index;
			this.nodeListChild = info;
		},
		toMakeTree(data, pid) {
			if(!data) {
				return false;
			}
			let arr = [];
			pid = pid || 0;
			for(let item of data) {
				if(item.pid == pid) {
					var child = this.toMakeTree(data, item.id);
					if(child.length > 0) {
						item['child'] = child;
					}
					arr.push(item);
					
				}
			}
			//结束递归
			return arr;
		},

	},
	// components: {
	// 	leftBarSide,
	// 	rightBarSide
	// }
}	
</script>  