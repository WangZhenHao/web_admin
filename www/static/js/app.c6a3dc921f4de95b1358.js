webpackJsonp([11],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("MVMM"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},r=n("Z0/y")({name:"App"},a,!1,null,null,null).exports,s=n("YaEn"),i=n("cUn4"),p=n.n(i),c=n("HzJ8"),u=n.n(c),d=n("KH7x"),l=n.n(d),f=n("9rMa");o.a.use(f.a);var m=new f.a.Store({state:{isLogin:!0,currentPath:"",list:{},windowList:[]},mutations:{login:function(t,e){t.isLogin=e},currentPath:function(t,e){t.currentPath=e.path},addWindowList:function(t,e){if(!t.list[e.path]){t.list[e.path]=e.meta.title;var n={path:e.path,title:e.meta.title};t.windowList.unshift(n)}},removeWindowList:function(t,e){var n=t.windowList.map(function(t,e){return[t,e]}),o=!0,a=!1,r=void 0;try{for(var s,i=u()(new p.a(n));!(o=(s=i.next()).done);o=!0){var c=s.value,d=l()(c,2),f=d[0],m=d[1];f.path==e.closePath&&(delete t.list[e.closePath],t.windowList.splice(m,1))}}catch(t){a=!0,r=t}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}}}});s.a.beforeEach(function(t,e,n){var o=m.state.isLogin;console.log(t),m.commit("currentPath",{path:t.path}),0!=t.matched.length?"/login"==t.fullPath?o?n("/Index"):n():o?(m.commit("addWindowList",t),n()):n("/login"):n("/error")}),o.a.config.productionTip=!1,new o.a({el:"#app",router:s.a,store:m,components:{App:r},template:"<App/>"})},YaEn:function(t,e,n){"use strict";var o=n("IHPB"),a=n.n(o),r=n("MVMM"),s=n("zO6J");function i(t){return function(){return n("a5Gn")("./pages"+t)}}var p=[{path:"/index",redirect:"/product/set/baseSet"},{path:"/system/info/infoIndex",component:i("/system/info/infoIndex"),meta:{title:"系统信息"}},{path:"/error",component:function(){return n.e(9).then(n.bind(null,"AcHo"))},meta:{title:"错误"}},{path:"/product/set/baseSet",component:i("/product/set/baseSet"),meta:{title:"基本设置"}},{path:"/product/set/adSlot",component:i("/product/set/adSlot"),meta:{title:"广告位"}},{path:"/product/set/productClassify",component:i("/product/set/productClassify"),meta:{title:"产品分类"}},{path:"/product/set/typeSet",component:i("/product/set/typeSet"),meta:{title:"类型设置"}}];r.a.use(s.a);e.a=new s.a({routes:[{path:"/login",component:function(){return n.e(8).then(n.bind(null,"EV1k"))}},{path:"/",redirect:"/login"},{path:"/Index",component:function(){return n.e(7).then(n.bind(null,"Pt1D"))},children:[].concat(a()(p))}]})},a5Gn:function(t,e,n){var o={"./pages/product/set/adSlot":["FdTo",1],"./pages/product/set/adSlot.vue":["FdTo",1],"./pages/product/set/baseSet":["kqEI",0],"./pages/product/set/baseSet.vue":["kqEI",0],"./pages/product/set/productClassify":["KlZe",4],"./pages/product/set/productClassify.vue":["KlZe",4],"./pages/product/set/typeSet":["smGU",6],"./pages/product/set/typeSet.vue":["smGU",6],"./pages/system/info/infoIndex":["FRJU",5],"./pages/system/info/infoIndex.vue":["FRJU",5],"./pages/system/node/addNode":["ccFI",3],"./pages/system/node/addNode.vue":["ccFI",3],"./pages/system/node/nodeList":["f1+m",2],"./pages/system/node/nodeList.vue":["f1+m",2]};function a(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}a.keys=function(){return Object.keys(o)},a.id="a5Gn",t.exports=a}},["NHnr"]);
//# sourceMappingURL=app.c6a3dc921f4de95b1358.js.map