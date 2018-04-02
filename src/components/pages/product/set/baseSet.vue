<template>
	<div class="baseset">
		<div class="form-inline">
			<div class="form-group">
			    <select class="form-control" v-model="selected">
			    	<option v-for="item in search_type" :value="item.value">{{item.descri}}</option>
			    </select>
			    <input type="text" class="form-control" v-model="search_text" placeholder="请输入商品Id" @keyup.enter="doSearch">
				<button type="button" class="btn btn-primary" @click="doSearch">搜索</button>
				<button type="button" class="btn btn-primary" @click="showModal">显示弹出</button>
			</div>
		</div>
		<div>
			<table class="table table-striped">
			   <thead>
					<tr>
						<th>ID</th>
						<th>标题</th>
						<th>名称</th>
						<th>父级ID</th>
						<th>ICON名称</th>
						<th>显示类型</th>
					</tr>
			   </thead>
			   <tbody>
					<tr v-for="info in list">
						<td title="ID">
							<span v-text="info.id"></span>
						</td>
						<td title="标题">
							<span v-text="info.title"></span>
						</td>
						<td title="名称">
							<span v-text="info.name"></span>
						</td>
						<td title="父级ID">
							<span v-text="info.pid"></span>
						</td>
						<td title="ICON名称">
							<span v-text="info.icon"></span>
						</td>
						<td title="显示类型">
							<span>{{show_type[info.is_show]}}</span>
						</td>
					</tr>
			   </tbody>
			</table>
		</div>
		<pageTab :page-data="pageData" @pageTabEvent="pageChage"></pageTab>
		<modal title="我是组件的标题测试" :show-btn="true" ref="message" @modalClickEvent="confirm">
			<div slot='modal-body'>
				我是组件一
			</div>
		</modal>
	</div>
</template>
<style>
h1 {
	/*background: pink;*/
}

</style>
<script>
	import nodeDate from '../../../index/testNodeData.js';
	const modal = () => import(/* webpackChunkName: "modal" */ '@/components/plugin/modal.vue');
	const pageTab = () => import(/* webpackChunkName: "pageTab" */ '@/components/plugin/pageTab.vue')
	export default {
		components: {
			modal,
			pageTab
		},
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
				search_text: '',
				list: nodeDate,
				show_type: {
					'1': '显示',
					'0': '隐藏'
				},
				pageData: {
					currentPage: 1,
					totalPage: 2,
					limit: 20,
					totalCount: 24
				}
			}
		},
		mounted() {
			this.init();
			webapp.success('登录成功')
			

		},
		methods: {
			pageChage(page) {
				this.params['currentPage'] = page['currentPage'];
				this.params['limit'] = page['limit'];
				this.getListInit();
			},
			confirm() {
				this.$refs.message.hide();
			},
			showModal() {
				this.$refs.message.show();
			},
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
				   // this.$set(this.params, this.selected, this.search_text);
				   this.params[this.selected] = this.search_text;
				}
				this.getListInit();
			},
			//获取数据列表
			getlist() {
				console.log('我去请求数据了,请求参数为:' + JSON.stringify(this.params));

			},

			//数据列表初始化
			getListInit(type) {
				if(type != 'noNeedHistoryChange') {
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
				page.changeUrlPath(this.params);
			},
			clickHistoryBack() {
				page.historyPopstate((res) => {
					this.params = res;
					this.search_text = this.params[Object.keys(this.params)[0]];
					this.getListInit('noNeedHistoryChange');
				})
			}
		}
	}
</script>