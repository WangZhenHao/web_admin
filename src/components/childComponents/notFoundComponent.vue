<template>
	<div class="error-wrap">
	    
		<h4 class="text-danger" v-if="currentPath">路径为: {{currentPath}}的页面找不到</h4>
		<h4 class="text-center text-danger" v-else>页面不存在</h4>
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
			}
		},
		mounted() {
		},
		computed: {
			currentPath() {
				return this.$store.state.currentPath;
			}
		},
		methods: {

		}
	}
</script>