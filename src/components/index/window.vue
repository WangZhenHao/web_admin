<template>
	<div class="affix window">
		<ul class="p-l-ten bg-white w-h-100 window-wrap overflow-h clearfix">
			<li v-for="(item, index) in windowList" 
			 class="win-item cursor-pointer text-center rel" 
			:class="{'active': item.path == currentPath}"
			 @click="redirect(item)">
				<span class="win-title" :data-url="item.path">{{item.title}}</span>
				<span @click.stop="removeWindow(item)" class="glyphicon glyphicon glyphicon-remove-circle abs win-remove"></span>
			</li>
			<!-- <li class="win-item cursor-pointer pull-left text-center rel">
				<span>产品分类</span>
				<span class="glyphicon glyphicon glyphicon-remove-circle abs win-remove"></span>
			</li> -->
		</ul>
	</div>
</template>
<style scoped>
	.window {
		top: 52px;
		height: 40px;
		width: 100%;
		padding-left: 250px;
		z-index: 1;
	}
	.window-wrap {
		border-bottom: 1px solid #e9e9ea;
	}
	.window-wrap .win-item {
		width: 120px;
		line-height: 39px;
		height: 100%;
		border-right: 1px solid #eaeaea;
		color: #676a6c;
		display: inline-block;
	}
	.window-wrap .win-item.active {
		background: #f3f3f4;
	}
	.win-title {

	}
	.win-remove {
		right: 2px;
		top: 5px;
		font-size: 18px;
		color: #ccc;
	}
	.win-remove:hover {
		color: red;
	}
</style>
<script>
 	/**
 	 * 窗口组件
 	 */
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			windowList() {
				return this.$store.state.windowList;
			},
			currentPath() {
				return this.$store.state.currentPath
			}
		},
		watch: {
			// windowList: function() {
			// 	console.log(1)
			// }
			// myList: function() {
			// 	console.log(this.$store.windowList);	
			// }
		},
		mounted() {

		},
		methods: {
			//跳转
			redirect(info) {
				this.$router.push({ path: info.path });
			},
			//清除窗口
			removeWindow(info) {
				this.$store.commit('removeWindowList', {
					closePath: info.path
				})
			}
		}
	}
</script>