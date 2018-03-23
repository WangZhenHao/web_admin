<template>
	<div class="baseset">
		<div class="form-inline">
			<div class="form-group">
			    <select class="form-control" v-model="selected">
			    	<option v-for="item in search_type" :value="item.value">{{item.descri}}</option>
			    </select>
			    <input type="text" class="form-control" v-model="search_text" placeholder="请输入商品Id" @keyup.enter="doSearch">
				<button type="button" class="btn btn-primary" @click="doSearch">搜索</button>
			</div>
		</div>
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
				search_type: [
				   {value: 'goods_id', descri: '商品id'},
				   {value: 'uid', descri: '用户uid'},
				],
				selected: 'goods_id',
				search_text: ''
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
				this.params = {};
				if(this.search_text) {
				   this.$set(this.params, this.selected, this.search_text);
				}
				console.log(this.params);
				this.getListInit();
			},
			//获取数据列表
			getlist() {
				console.log('我去请求数据了,请求参数为:' + JSON.stringify(this.params));
			},

			//数据列表初始化
			getListInit(type) {
				if(type != 'noHistoryChange') {
					this.changeUrlPath();
				}
				this.getlist();
			},
			getUrlParams() {
				let urlParams = page.getUrlParams();
				if(urlParams) {
					this.params = urlParams;
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
					this.search_text = this.params[Object.keys(this.params)[0]];
					this.getListInit('noHistoryChange');
				})
			}
		}
	}
</script>