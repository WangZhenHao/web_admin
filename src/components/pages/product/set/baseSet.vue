<template>
	<div class="baseset">
		<h1>{{msg}}</h1>
		<span>我当前的页数是: {{params.page}}</span><br>
		<button class="btn btn-primary" @click="getPage">获取下一页数据</button>
	</div>
</template>
<style>
h1 {
	background: pink;
}

</style>
<script>
	// import Router from 'vue-router';
	export default {
		data() {
			return {
				msg: '我是基本页面数据',
				params: {
					page: 0,
					limit: 10,
					goods_id: 1
				}
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			//必须初始化的操作
			init() {
				this.clickHistoryBack();
			    this.getUrlParams();
			},
			getPage() {
				this.params.page++;
				this.changeUrlPath();
			},
			//获取数据列表
			getList() {
				
			},
			getUrlParams() {
				this.params = page.getUrlParams();
			},
			changeUrlPath() {
				let location = '#/product/set/baseSet?';
				let str = [];
				for(let item in this.params) {
					str.push(item + '=' +  this.params[item]);
				}
				str = location + str.join('&');
				history.pushState(this.params,'', str);
			},
			clickHistoryBack() {
				page.historyPopstate((res) => {
					this.params = res;
				})
			}
		}
	}
</script>