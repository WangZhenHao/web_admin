// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
=======
import './config/config.js';
import '../static/js/page.js';
import '../static/js/webapp.js';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
>>>>>>> e2a86504d9677e888a358e42c88f70238a44ea8d
// import ElementUI from 'element-ui';
import './beforeRouter.js';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';


import 'STATIC/bootstrap/css/bootstrap.css';
import 'STATIC/css/common.css';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
import {
	Dialog,
	Input,
	Select,
	Option,
	Table,
	TableColumn,
	Form,
	FormItem,
	Button,
	ButtonGroup
} from 'element-ui'

Vue.use(Dialog);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(ButtonGroup);

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
