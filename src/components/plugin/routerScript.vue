<template>
	
</template>
<style>
	
</style>
<script>
	/**
	 * vue加载外部js
	 * <routerScript @loadFinsh="hanlde" src="..."></routerScript>
	 *
	 * @loadfinsh   加载完成js后执行的函数
	 * src          路径
	 */
	export default {
		props: ['src'],
		data() {
			return {

			}
		},
		mounted() {
			this.createScript();
		},
		methods: {
           createScript(callback) {
           	   let script = document.createElement('script');
           	   script.src = this.src;
           	   script.onload = () => {
           	   	  this.$emit('loadFinsh', true)
           	   }
           	   document.getElementsByTagName('head')[0].appendChild(script);
           }
		}
	}
</script>