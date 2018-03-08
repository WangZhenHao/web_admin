import Vue from 'vue'
import Router from 'vue-router'
import allComponents from './needCompileComponents.js';

const login = () => import(/* webpackChunkName: "login" */ '@/components/login/login');
const index = () => import(/* webpackChunkName: "index" */ '@/components/index/index');
const json = {};

function _import(path) {
   let page = path.split('/')[3];
   json[page] = r => require.ensure([], () => r(require(`@/components/pages${path}`)), page);
   return json[page];
}

const baseSet = r => require.ensure([], () => r(require('@/components/pages/system/set/baseSet')), 'baseSet');
// const baseSet = _import('/system/set/baseSet');

const adSlot = r => require.ensure([], () => r(require('@/components/pages/system/set/adSlot')), 'adSlot');
console.log(json);
console.log(adSlot);

const productClassify = r => require.ensure([], () => r(require('@/components/pages/system/set/productClassify')), 'productClassify');

const typeSet = r => require.ensure([], () => r(require('@/components/pages/system/set/typeSet')), 'typeSet');

Vue.use(Router)

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
        {
          path: '',
          component: baseSet
        },
        {
          path: '/system/set/baseSet',
          component: baseSet
        },
        {
          path: '/system/set/adSlot',
          component: adSlot
        },
        {
          path: '/system/set/productClassify',
          component: productClassify
        },
        {
          path: '/system/set/typeSet',
          component: typeSet
        }
      ]
    }
  ]
})
