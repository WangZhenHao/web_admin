<template>
	<div>
		<h2>{{msg}}</h2>
	</div>
</template>
<style>
	
</style>
<script>
	export default {
		data() {
			return {
				msg: '我是广告位页面数据'
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