// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import ElementUI from 'element-ui';
import './config/config.js';
import '../static/js/page.js';
import '../static/js/webapp.js';
import './beforeRouter.js';

import 'STATIC/bootstrap/css/bootstrap.css';
import 'STATIC/css/common.css';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

Vue.config.productionTip = false

// const store = new Vuex.Store({
// 	state: {
// 		isLogin: false
// 	},
// 	mutations: {
// 		login(state, flag) {
// 			state.isLogin = flag;
// 		}
// 	}
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
