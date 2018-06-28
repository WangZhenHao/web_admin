<template>
	<div>
		<h5 class="font-b p-b-ten title">添加功能节点</h5>
		<form class="form-horizontal color-6">
		  <div class="form-group p-t-ten">
		    <label for="inputEmail3" class="col-sm-3 control-label">模块类型</label>
		    <div class="col-sm-5">
		      <select class="form-control">
				  <option>后台管理</option>
				</select>
		    </div>
		  </div>

		  <div class="form-group p-t-ten">
		    <label for="inputEmail3" class="col-sm-3 control-label">上级</label>
		    <div class="col-sm-5">
		      <select class="form-control">
				  <option>选择上级</option>
				</select>
		    </div>
		  </div>

		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-3 control-label">功能标题</label>
		    <div class="col-sm-5">
		      <input class="form-control" placeholder="功能标题(如:商品列表管理)">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-3 control-label">功能名称</label>
		    <div class="col-sm-5">
		      <input class="form-control" placeholder="功能名称(如:GoodListManger)">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-3 control-label">图标</label>
		    <div class="col-sm-5">
		      <input class="form-control" placeholder="图标类名(如:glyphicon glyphicon-usd)">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-3 control-label">显示</label>
		    <div class="col-sm-5">
		        <label class="radio-inline">
				  <input type="radio" name="inlineRadioOptions" value="option1"> 不显示
				</label>
				<label class="radio-inline">
				  <input type="radio" name="inlineRadioOptions" value="option2"> 显示
				</label>
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-3 col-sm-5">
		      <button class="btn btn-primary">提交</button>
		    </div>
		  </div>
		</form>
	</div>
</template>
<style>
	.title {
		border-bottom: 1px solid #eee;
	}
</style>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>