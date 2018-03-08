import router from './router';
import store from './store';
import vue from 'vue';

router.beforeEach((to, from, next) => {
	let isLogin = store.state.isLogin; 
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