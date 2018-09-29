/**
 * 按需加载
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
function _import(path) {
   return () => import(`@/components/pages${path}`);
}

/**
 *
 * 代码分块方法
 * const adSlot = r => require.ensure([], () => r(require('@/components/pages/system/set/adSlot')), 'adSlot');

 */
//404页面
const notFoundComponent = () => import('@/components/childComponents/notFoundComponent');
let routerPath = [
        {
          path: '/index',
          redirect: '/system/info/infoIndex',
          // redirect: '/product/set/baseSet' 
        },
        {
          path: '/system/info/infoIndex',
          // component: baseSet
          component: _import('/system/info/infoIndex'),
          meta: {
            title: '系统信息',
          }
        },
        {
          path: '/system/node/addNode',
          // component: baseSet
          component: _import('/system/node/addNode'),
          meta: {
            title: '添加权限',
          }
        },
        {
          path: '/error',
          component: notFoundComponent,
          meta: {
            title: '错误',
          }
        },
        // {
        //   path: '/product/set/baseSet',
        //   component: _import('/product/set/baseSet'),
        //   meta: {
        //     title: '基本设置',
        //   }
        // },
        // {
        //   path: '/product/set/adSlot',
        //   component: _import('/product/set/adSlot'),
        //   meta: {
        //     title: '广告位',
        //   }
        // },
        // {
        //   path: '/product/set/productClassify',
        //   component: _import('/product/set/productClassify'),
        //   meta: {
        //     title: '产品分类',
        //   }
        // },
        // {
        //   path: '/product/set/typeSet',
        //   component: _import('/product/set/typeSet'),
        //   meta: {
        //     title: '类型设置',
        //   }
        // }
]

export default routerPath;