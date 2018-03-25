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
          path: '/error',
          component: notFoundComponent
        },
        {
          path: '/index',
          // redirect: '/system/info/infoIndex',
          redirect: '/product/set/baseSet' 
        },
	      {
          path: '',
          // component: baseSet
          component: _import('/system/info/infoIndex')
        },
        {
          path: '/product/set/baseSet',
          // component: baseSet
          component: _import('/product/set/baseSet')
        },
        {
          path: '/product/set/adSlot',
          // component: adSlot,
          component: _import('/product/set/adSlot')
        },
        {
          path: '/product/set/productClassify',
          // component: productClassify,
          component: _import('/product/set/productClassify')
        },
        {
          path: '/product/set/typeSet',
          // component: typeSet,
          component: _import('/product/set/typeSet')
        },
        {
          path: '/system/info/infoIndex',
          component: _import('/system/info/infoIndex')
        }
]

export default routerPath;