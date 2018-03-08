import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLogin: true
	},
	mutations: {
		login(state, flag) {
			state.isLogin = flag;
		}
	}
	
});

export default store;