<template>
  <div id="app" class="w-h">
    <div>
        <!-- 导航 -->
        <navTop></navTop>
        <!-- 左侧栏 -->
        <leftSide></leftSide>
        <!-- 路由 -->
        <div class="w-h affix" id="data-container">
            <div class="p-ten data-wrap">
              <!-- <keep-alive> -->
                <router-view></router-view>
              <!-- </keep-alive> -->
            </div>
        </div>  
    </div>
  </div>
</template>

<script>
// import leftSide from './components/leftSide';
// import navTop from './components/navTop';
const leftSide = () => import(/* webpackChunkName: "leftSide" */ './leftSide');
const navTop = () => import(/* webpackChunkName: "navTop" */ './navTop');


export default {
  // name: 'App',
  components: {
     leftSide,
     navTop,
  },
  methods: {
    
  }
}
</script>

<style>
.w-h {
   width: 100%;
   height: 100%;
}
#data-container {
  background: #fff;
  padding-top: 52px;
  top: 0px;
  left: 250px;
  overflow-x: auto;
}
.data-wrap {
  min-width: 920px;
}
</style>
