<template>
	<span>
		<router-script @loadFinsh="jedateFinsh" src="./static/js/jquery.jedate.min.js"></router-script>
		<input class="form-control" :id="jedateId" type="text" :value="time">
	</span>
</template>
<style>
	
</style>
<script>
	import 'STATIC/css/jedate.css';
	import routerScript from './routerScript.vue';
	/**
	 * 时间选择器组件
	 * <jedate v-model="params.time" 
	   isShowTime="time" 
	   valueType="timestamp" 
	   returnType="timestamp"></jedate>

	   v-model     传入的时间变量
	   isShowTime  是否显示时分秒
	   valueType   初始值的时间类型(默认时间戳)
	   returnType  选择时间后返回时间类型(默认返回时间戳)
	 */
	export default {
		components: {
			routerScript
		},
		props: ['value', 'isShowTime', 'returnType', 'valueType'],
		data() {
			return {
				jedateId: 'jedate' + ~~(Math.random() * 99999),
				isTime: this.isShowTime == 'time',
				type: this.returnType == 'timestamp',
				dateFormat: 'YYYY-MM-DD',
				time: '',
			}
		},
		mounted() {
			this.conversion();
		},
		methods: {
			//jedate插件加载完成
			jedateFinsh() {
				this.init();
			},
			//插件初始化
			init() {
				$("#" + this.jedateId).jeDate({
		            format: this.dateFormat,
		            isTime: this.isTime, 
		            okfun: this.selectedTime,
		        });
			},
			//选择时间后回调函数
			selectedTime(res) {
				let returnDate = res.val;
				if(this.type) {
					returnDate = page.DateToTimestamp(returnDate);
				}
				this.$emit('input', returnDate);
			},
			//时间戳转成时间
			conversion() {
				this.dateFormat = this.isTime ? this.dateFormat  +  " hh:mm:ss" : this.dateFormat;
				if(this.value && this.valueType == 'date') {
					this.time = this.value;
				} 
				else if(this.value){
					this.time = page.TimestampToDate(this.dateFormat, this.value);
				}
			}
		}
	}
</script>