<template>
	<div>
		<h2>{{msg}}</h2>
		<div class="form-inline">
			<div class="form-group">
			    <select class="form-control" v-model="selected">
			    	<option v-for="item in search_type" :value="item.value">{{item.descri}}</option>
			    </select>
			    <input type="text" class="form-control" v-model="params.keyword" placeholder="请输入商品Id" @keyup.enter="doSearch">
				<button type="button" class="btn btn-primary" @click="doSearch">搜索</button>
			</div>
		</div>
		<pageTab :page-data="pageData" @pageTabEvent="pageChage"></pageTab>
	</div>
</template>
<style>
	
</style>
<script>
	import pageTab from '@/components/plugin/pageTab.vue';
	export default {
		components: {
			pageTab
		},
		data() {
			return {
				msg: '我是广告位页面数据',
				pageData: {
					currentPage: 1,
					totalPage: 4,
					limit: 20,
					totalCount: 84
				},
				params: this.$route.query,
				selected: 'goods_id',
				search_type: [
				   {value: 'goods_id', descri: '商品id'},
				   {value: 'uid', descri: '用户uid'},
				],
			}
		},
		activated() {
			this.getList();
		},
		// mounted() {
			
		// },
		beforeRouteUpdate(to, from, next) {
			this.params = to.query;
			this.getList();
		},
		methods: {
			pageChage(page) {
				this.params['currentPage'] = page['currentPage'];
				this.params['limit'] = page['limit'];
				this.doSearch();
			},
			doSearch() {
				page.changeUrlPath(this.params);
				this.getList();
			},
			getList() {
				console.log('我去请求数据:' + JSON.stringify(this.params));
				// page.changeUrlPath(this.params);
				// this.$router.push({
				// 	path: '/product/set/adSlot',
				// 	query: this.params
				// })
			}
		}
	}
</script>