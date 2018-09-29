import router from './router';
import store from './store';
import vue from 'vue';

router.beforeEach((to, from, next) => {
	console.log(to)
	let isLogin = store.state.isLogin; 
	//最终都需要调用next()方法去结束钩子,否则会出现死循环
	store.commit('currentPath', {path: to.path});
	if(to.matched.length == 0) {
		next('/error');
		return;
	}
	if(to.fullPath == '/login') {
		if(isLogin) {
			next('/Index')
		} else {
			next();
		}
	} else {
		if(isLogin) {
			store.commit('addWindowList', to);
			next();
		} else {
			next('/login');
		}
	}
});