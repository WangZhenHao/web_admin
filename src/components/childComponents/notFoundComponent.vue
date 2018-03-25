<template>
	<div class="error-wrap">
		<h2 class="text-center">404页面找不到</h2>
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521806985270&di=0da20ac4f4b15f123fe0ea5da5c4b88b&imgtype=0&src=http%3A%2F%2Fwww.9tnl.com%2Fuploadfile%2Fimage%2F20150810%2F20150810225176647664.jpg">
	</div>
</template>
<style>
	.error-wrap {
		width:500px;
	}
	.error-wrap img {
		width: 100%;
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