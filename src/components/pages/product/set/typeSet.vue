<template>
	<div>
		<h5>{{msg}}</h5>
	</div>
</template>
<style>
	
</style>
<script>
	export default {
		data() {
			return {
				msg: '我是类型设置数据'
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