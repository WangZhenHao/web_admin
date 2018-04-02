<template>
	<div>
		<nav data-spy="affix" data-offset="0" class="navbar navbar-default affix" role="navigation">
		    <div class="container-fluid">
			    <div class="navbar-header pull-left">
			        <a class="navbar-brand font-b">管理后台</a>
			    </div>
			    <div class="pull-right navbar-options">
			        <ul class="nav navbar-nav cursor-pointer">
			            <li class="dropdown">
			                <a class="dropdown-toggle" data-toggle="dropdown">
			                	我的
			                    <b class="caret"></b>
			                </a>
			                <ul class="dropdown-menu">
			                    <li><a>修改密码</a></li>
			                    <li class="divider"></li>
			                    <li @click="logout"><a>退出</a></li>
			                </ul>
			            </li>
			        </ul>
			    </div>
		    </div>
		</nav>
	</div>
</template>
<script>
	import router from '../../router';
	export default {
		methods: {
			logout() {
				this.$store.commit('login', false);
				router.push({path: '/login'});
			}
		}
	}
</script>
<style>

.navbar {
	margin-bottom: 0px;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 2;
}
.dropdown-menu {
	right: 0;
	left: unset;
}
.navbar-options {
	margin-right: 20px;
}
</style>