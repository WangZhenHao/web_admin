<template>
	<div class="login-wrap">
		<div class="panel panel-default">
			  <div class="panel-body">
			     <h2 class="login-color">后台管理</h2>
			     <hr>
			     <form style="padding: 20px;">
					  <div class="form-group">
					    <label class="login-color" for="userAccount">账号</label>
					    <input id="userAccount" type="text" class="form-control" placeholder="请输入账号" v-model="userAccount">
					  </div>
					  <div class="form-group">
					    <label class="login-color" for="userPasswrod">密码</label>
					    <input type="password" class="form-control" id="userPasswrod" placeholder="请输入密码" v-model="password">
					  </div>
					  <input type="button" class="btn btn-lg btn-success" value="登 录" id="login-btn" @click="toLogin">
				 </form>
			  </div>

	     	</div>
	</div>
</template>
<script>
	// import router from '../../router';
	// console.log(router);
	export default {
		data() {
			return {
				userAccount: 'user',
				password: '12456'
			}
		},
		methods: {
			toLogin() {
				this.$store.commit('login', true);
				this.$router.push({ path: '/Index' });
			}
		}
	}
</script>
<style>
	.login-wrap {
		width: 100%;
		max-width: 500px;
		margin: 100px auto;
	}
	.login-color {
		color: #2f8a31;
	}
	#login-btn {
		width: 100%;
	}
	#login-btn:focus,#login-btn:active {
		outline:none;
		border-color: transparent;
	}
</style>