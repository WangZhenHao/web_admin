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
        },
        {
          path: '/system/info/infoIndex',
          component: _import('/system/info/infoIndex'),
          meta: {
            title: '系统信息',
          }
        },
        {
          path: '/system/node/addNode',
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
        {
          path: '/flash/manage/buildingManage',
          component: _import('/flash/manage/buildingManage'),
          meta: {
            title: '大厦管理'
          }
        }
]

export default routerPath;