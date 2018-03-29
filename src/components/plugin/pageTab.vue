<template>
	<div>
		<nav v-if="pageData['total']" aria-label="Page navigation">
		  <ul class="pagination">
		    <li>
		      <a>
		        <span aria-hidden="true">总{{pageData['total']}}条/共{{pageData['pages']}}页</span>
		      </a>
		    </li>
		    <li>
		    	<a>
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
		      <a aria-label="Previous" @click="previous">
		        <span aria-hidden="true">上一页</span>
		      </a>
		    </li>
		    <li>
		    	<a>
		    		<span>当前{{pageData['current']}}/{{pageData['pages']}}</span>
		    	</a>
		    </li>
		    <li>
		      <a aria-label="Next" @click="next">
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
	.pagination >li > a {
		cursor: pointer;
		color: #666;
	}
	.page-tab-go {
		width: 40px;
		height: 20px;
	}
</style>
<script>
	/**
	 * 分页组件使用介绍:
	 * 
	 * <pagaTab :page-data="分页数据" @pageTabEvent="事件名"></pagaTab>
	 * pageData: {
	 * 	current: 1, //当前页
		pages: 2,   //总页数
		limit: 20,  //分页大小
		total: 24	//总记录数
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
			first() {
				this.pageData['current'] = 1;
				this.pageChangeCallBack();
			},
			last() {
				this.pageData['current'] = this.pageData['pages'];
				this.pageChangeCallBack();
			},
			previous() {
				this.pageData['current']--;
				if(this.pageData['current'] <= 0) {
					this.pageData['current'] = 1;
					return;
				}
				this.pageChangeCallBack();
			},
			next() {
				this.pageData['current']++;
				if(this.pageData['current'] > this.pageData['pages']) {
					this.pageData['current'] = this.pageData['pages'];
					return;
				}
				this.pageChangeCallBack()
			},
			goTo() {
				if(this.goToPage > this.pageData['pages']) {
					alert('页数不存在');
					return;
				}
				this.pageData['current'] = this.goToPage;
				this.pageChangeCallBack();
			},
			chageLimit() {
				this.pageChangeCallBack();
			},
			pageChangeCallBack() {
				this.$emit('pageTabEvent', this.pageData);
			},

		}
	}
</script>