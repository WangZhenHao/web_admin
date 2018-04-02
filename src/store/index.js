import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLogin: true,
		currentPath: '',
	},
	mutations: {
		login(state, flag) {
			state.isLogin = flag;
		},
		errorPath(state, path) {
			state.currentPath = path.path;
		}
	}
	
});

export default store;