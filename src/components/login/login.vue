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
					    <input type="password" class="form-control" id="userPasswrod" placeholder="请输入密码" v-model="password" @keyup.enter="toLogin">
					  </div>
					  <input type="button" class="btn btn-lg btn-success" value="登 录" id="login-btn" @click="toLogin">
				 </form>
			  </div>

	     	</div>
	</div>
</template>
<script>
	import { login } from '@/config/apiList.js'
	export default {
		data() {
			return {
				userAccount: '',
				password: ''
			}
		},
		methods: {
			check() {
				if(!this.userAccount) {
					webapp.error('请输入账号');
					return false;
				} else if(!this.password) {
					webapp.error('请输入密码');
					return false;
				} else {
					return true;
				}
			},
			toLogin() {
				if(this.check()) {
					this.login();
					// this.$store.commit('login', true);
					// this.$router.push({ path: '/Index' });
				} 
			},
			login() {
				login({
					accountName: this.userAccount,
					password: this.password
				}).then(res => {
					// this.$store.commit('login', true);
					// page.setLocalStorage('token', res.data.token);
					webapp.success('登录成功');
					this.$store.commit('login', res.data.token);
					this.$router.push({ path: '/Index' });
				}).catch(res => {

				})
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