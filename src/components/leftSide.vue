<template>
	<div class="left-side affix clearfix">
		<leftBarSide></leftBarSide>
		<rightBarSide></rightBarSide>
	</div>
</template>
<style>
.left-side {
	width: 250px;
	height: 100%;
	top: 52px;
	left: 0;
	background: #F5F5F5;
}	
</style>
<script>
import leftBarSide from './childComponents/leftBarSide';
import rightBarSide from './childComponents/rightBarSide';
export default {
	components: {
		leftBarSide,
		rightBarSide
	}
}	
</script>  