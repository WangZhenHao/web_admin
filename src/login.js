import router from './router';
import store from './store';
import vue from 'vue';

router.beforeEach((to, from, next) => {
	let isLogin = store.state.isLogin; 
	//最终都需要调用next()方法去结束钩子,否则会出现死循环
	console.log(to);
	if(to.fullPath == '/login') {
		if(isLogin) {
			next('/Index')
		} else {
			next();
		}
	} else {
		if(isLogin) {
			next();
		} else {
			next('/login');
		}
	}
});