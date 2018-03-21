<template>
	<div class="error-wrap">
		<img src="/static/images/error/error.jpg">
		<h2>404页面找不到</h2>
	</div>
</template>
<style>
	.error-wrap {
		padding-left: 100px;
	}
</style>
<script>
	export default {
		data() {
			return {
				msg: ''
			}
		},
		mounted() {
			this.showErrorMsg();
		},
		methods: {
			showErrorMsg() {
				this.msg = '404';
				// if(window.pageErrorMessage) {
				// 	this.msg = window.pageErrorMessage['msg'];
				// } else {
				// 	this.msg = '页面不存在'
				// }
			}
		}
	}
</script>