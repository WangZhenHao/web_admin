<template>
	<div>
		<nav v-if="pageData['totalCount']" aria-label="Page navigation">
		  <ul class="pagination">
		    <li>
		      <a>
		        <span aria-hidden="true">总{{pageData['totalCount']}}条/共{{pageData['totalPage']}}页</span>
		      </a>
		    </li>
		    <li>
		    	<a style="height: 34px;">
		    		<select @change="chageLimit" v-model="pageData['limit']">
		    			<option v-for="value in pagelimit" :value="value">{{value}}</option>
		    		</select>
		    	</a>
		    </li>
		    <li>
		      <a aria-label="Previous" @click="first">
		        <span aria-hidden="true">第一页</span>
		      </a>
		    </li>
		    <li>
		      <a :class="{'not-allow': pageData['currentPage'] == 1}" aria-label="Previous" @click="previous">
		        <span aria-hidden="true">上一页</span>
		      </a>
		    </li>
		    <li>
		    	<a>
		    		<span>当前{{pageData['currentPage']}}/{{pageData['totalPage']}}</span>
		    	</a>
		    </li>
		    <li>
		      <a :class="{'not-allow': pageData['currentPage'] == pageData['totalPage']}" aria-label="Next" @click="next">
		        <span aria-hidden="true">下一页</span>
		      </a>
		    </li>
		    <li>
		      <a aria-label="Previous" @click="last">
		        <span aria-hidden="true">最后一页</span>
		      </a>
		    </li>
		    <li>
		    	<a>
		    		<input class="page-tab-go" type="text" v-model="goToPage" @keyup.enter="goTo">
		    	</a>
		    </li>
		    <li>
		    	<a @click="goTo">
		    		<span>跳转</span>
		    	</a>
		    </li>
		  </ul>
		</nav>
		<div v-else class="alert alert-danger" role="alert">
		  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
		  <span class="sr-only">错误:</span>
		  分页参数没有找到
		</div>
	</div>
</template>
<style>
	.pagination > li > a {
		cursor: pointer;
		color: #666;
	}
	.page-tab-go {
		width: 40px;
		height: 20px;
	}
	.pagination >li > a.not-allow {
		cursor:not-allowed
	}
</style>
<script>
	/**
	 * 分页组件使用介绍:
	 * 
	 * <pagaTab :page-data="分页数据" @pageTabEvent="事件名"></pagaTab>
	 * pageData: {
	 * 	currentPage: 1, //当前页
		totalPage: 2,   //总页数
		limit: 20,  //分页大小
		totalCount: 24	//总记录数
	 * }
	 */
	export default {
		props: ['pageData'],
		data() {
			return {
				pagelimit: [10, 20, 50, 100, 500],
				goToPage: 1
			}
		},
		mounted() {
		},
		methods: {
			//第一页
			first() {
				this.pageData['currentPage'] = 1;
				this.pageChangeCallBack();
			},
			//最后一页
			last() {
				this.pageData['currentPage'] = this.pageData['totalPage'];
				this.pageChangeCallBack();
			},
			//上一页
			previous() {
				this.pageData['currentPage']--;
				if(this.pageData['currentPage'] <= 0) {
					this.pageData['currentPage'] = 1;
					return;
				}
				this.pageChangeCallBack();
			},
			// 下一页
			next() {
				this.pageData['currentPage']++;
				if(this.pageData['currentPage'] > this.pageData['totalPage']) {
					this.pageData['currentPage'] = this.pageData['totalPage'];
					return;
				}
				this.pageChangeCallBack()
			},
			//跳转到指定页
			goTo() {
				console.log(isNaN(this.goToPage));
				if(this.goToPage > this.pageData['totalPage'] || this.goToPage <= 0 || isNaN(this.goToPage)) {
					webapp.error('输入的页数不存在');
					return;
				}
				this.pageData['currentPage'] = this.goToPage;
				this.pageChangeCallBack();
			},
			//设置分页大小
			chageLimit() {
				this.pageChangeCallBack();
			},
			//回掉函数
			pageChangeCallBack() {
				this.$emit('pageTabEvent', this.pageData);
			},

		}
	}
</script>