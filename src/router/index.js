import Vue from 'vue'
import Router from 'vue-router';
import routerPath from './routerPath.js';

const login = () => import(/* webpackChunkName: "login" */ '@/components/login/login');
const index = () => import(/* webpackChunkName: "index" */ '@/components/index/index');

// const baseSet = _import('/system/set/baseSet');
// const baseSet = r => require.ensure([], () => r(require('@/components/pages/system/set/baseSet')), 'baseSet');


Vue.use(Router);

export default new Router({
  routes: [
    //登录视图
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: '/login'
    },
    //首页视图
    {
      path: '/Index',
      component: index,
      children: [
      ...routerPath
      ]
    }
  ]
})
