<template>
	<div class="baseset">
		<h1>{{msg}}</h1>
	</div>
</template>
<style>
.baseset {
	background: pink;
}
</style>
<script>
	export default {
		data() {
			return {
				msg: '我是基本页面数据'
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