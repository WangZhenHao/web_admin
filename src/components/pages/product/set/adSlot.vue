<template>
	<div>
		<h2>{{msg}}</h2>
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
				params: this.$route.query
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			show() {
				
			},
			pageChage(page) {
				this.params['currentPage'] = page['currentPage'];
				this.params['limit'] = page['limit'];
				// this.$router.push({
				// 	path: '/product/set/adSlot',
				// 	query: this.params
				// });
				// debugger;
				// this.$router.push({
				// 	path: '/product/set/productClassify'
				// })
				console.log(this.$route)
				this.doSearch();
			},
			doSearch() {
				this.getList();
			},
			getList() {
				console.log('我去请求数据:' + JSON.stringify(this.params));
				page.changeUrlPath(this.params);
			}
		}
	}
</script>