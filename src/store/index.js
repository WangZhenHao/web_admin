import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLogin: true,
		currentPath: '',
		list: {},
		windowList: [],
	},
	mutations: {
		/**
		 * 登录
		 * @param  {[type]} state [description]
		 * @param  {[type]} flag  [description]
		 * @return {[type]}       [description]
		 */
		login(state, flag) {
			state.isLogin = flag;
		},
		/**
		 * 当前路由
		 * @param  {[type]} state [description]
		 * @param  {[type]} path  [description]
		 * @return {[type]}       [description]
		 */
		currentPath(state, path) {
			state.currentPath = path.path;
		},
		/**
		 * 添加窗口列表
		 */
		addWindowList(state, to) {
			if(!state.list[to.path]) {
				let json = {
					path: to.path,
					title: to.meta['title']
				};
				state.list[to.path] = to.meta['title'];
				state.windowList.unshift(json);
			}

		},
		/**
		 * 删除窗口
		 * @param  {[type]} state vuex对象
		 * @param  {[type]} to    路径
		 * @return {[type]}       [description]
		 */
		removeWindowList(state, to) {
			let arr = state.windowList.map((item, index) => [item, index]);
			for(let [item, index] of new Map(arr)) {
				if(item.path == to.closePath) {
					delete state.list[to.closePath];
					state.windowList.splice(index, 1);
				}
			}
		}
	}
	
});

export default store;