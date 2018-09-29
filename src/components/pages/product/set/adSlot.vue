<template>
	<div>
		<div class="form-inline">
			<div class="form-group">
			    <select class="form-control" v-model="selected">
			    	<option v-for="item in search_type" :value="item.value">{{item.descri}}</option>
			    </select>
			    <input type="text" class="form-control" v-model="params.keyword" placeholder="请输入商品Id" @keyup.enter="doSearch">
				<button type="button" class="btn btn-primary" @click="doSearch">搜索</button>
			</div>
		</div>
		<div>
			<li v-for="item in list">
				{{item.shopName}}
				<img :src="item.shopLogo" width="100" height="50">
			</li>
		</div>
		<pageTab v-if="list.length" :page-data="pageData" @pageTabEvent="pageChage"></pageTab>
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
				params: {
					longitude: 114,
					latitude: 22,
					zx_token: 'oNmxa07aIOf2q_3023rqoG_4M4cw'
				},
				selected: 'keyword',
				search_type: [
				   {value: 'keyword', descri: '关键字'},
				   {value: 'uid', descri: '用户uid'},
				],
				list: []
			}
		},
		activated() {
			// this.params = this.$route.query;
			// $.extend(this.params, this.$route.query);
			
			// console.log()
			this.getList();
		},
		beforeRouteUpdate(to, from, next) {
			this.params = to.query;
			this.getList();
		},
		methods: {
			pageChage(page) {
				this.params['pageNo'] = page['currentPage'];
				this.params['pageSize'] = page['limit'];
				this.doSearch();
			},
			setPage(data) {
				this.pageData = {
					currentPage: data.pageNo,
					totalPage: data.totalPage,
					limit: 20,
					totalCount:  20 * data.totalPage
				}
			},
			doSearch() {
				page.changeUrlPath(this.params);
				this.getList();
			},
			getList() {
				// page.apiPost('/index/v3.2/searchShop', $.extend(this.$route.query, this.params),
				// {
				// 	successFn: res => {
				// 		this.setPage(res.data);
				// 		this.list = res.data.shopList;
				// 	},
				// 	errorFn: res => {
				// 		console.log(res);
				// 	}
				// })
				this.list = [];
				page.apiPost('/index/v3.2/searchShop', $.extend(this.$route.query, this.params))
				.then(res => {
					this.setPage(res.data);
					this.list = res.data.shopList;
				}).catch(res => {

				})
				// console.log('我去请求数据:' + JSON.stringify(this.params));
			}
		}
	}
</script>