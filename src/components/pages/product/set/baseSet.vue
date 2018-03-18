<template>
	<div class="baseset">
		<form class="form-inline">
			<div class="form-group">
			    <label for="商品Id">商品Id</label>
			    <input type="text" class="form-control" v-model="params.goods_id" placeholder="请输入商品Id">
			</div>
		</form>
		<button class="btn btn-primary" @click="doSearch">搜索</button>

		<h1>你要搜索的id是: {{params.goods_id}}</h1><br>
		<input type="text" v-model="msg">
	</div>
</template>
<style>
h1 {
	/*background: pink;*/
}

</style>
<script>
	// import Router from 'vue-router';
	export default {
		data() {
			return {
				msg: '我是基本页面数据',
				params: {
				},
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			//必须初始化的操作
			init() {
			    // 获取url上面的参数,用于用户刷新
			    this.getUrlParams();

				//获取数据列表
				this.getListInit();

				this.clickHistoryBack();
			},

			doSearch() {
				if(this.params.goods_id == '') {
					this.params = {};
				}
				this.getListInit();
			},
			//获取数据列表
			getlist() {
				console.log('我去请求数据了,请求参数为:' + JSON.stringify(this.params));
			},

			//获取数据列表初始化
			getListInit(type) {
				if(type != 'noHistoryChange') {
					this.changeUrlPath();
				}
				this.getlist();
			},
			getUrlParams() {
				let urlParams = page.getUrlParams();
				if(urlParams) {
					return this.params = urlParams;
				}
			},
			changeUrlPath() {
				//如果this.parmas不为空
				// if(Object.keys(this.params).length > 0) {
					page.changeUrlPath(this.params);
				// }
			},
			clickHistoryBack() {
				page.historyPopstate((res) => {
					this.params = res;
					this.getListInit('noHistoryChange');
				})
			}
		}
	}
</script>