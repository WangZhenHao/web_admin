<template>
	<div>
		<h3>{{msg}}</h3>
	</div>
</template>
<style>
	
</style>
<script>
	export default {
		data() {
			return {
				msg: '我是产品数据页面'
			}
		},
		mounted() {
			console.log(this.msg);
		},
		methods: {
			show() {
				
			}
		}
	}
</script>