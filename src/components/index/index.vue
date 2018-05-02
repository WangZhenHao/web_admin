<template>
  <div id="app" class="w-h">
    <div>
        <!-- 导航 -->
        <navTop></navTop>
        <!-- 左侧栏 -->
        <leftSide></leftSide>
        <!-- 窗口 -->
        <window></window>
        <!-- 路由 -->
        <div class="w-h" id="data-container">
            <div class="p-t-ten p-r-ten p-l-ten data-wrap">
              <div class="router-wrap bg-white p-ten">
                <!-- <transition name="fade"> -->
                  <router-view></router-view>
                <!-- </transition> -->
              </div>
              <!-- <keep-alive> -->
              <!-- </keep-alive> -->
            </div>
        </div>  
    </div>
  </div>
</template>

<style>
.w-h {
   width: 100%;
   height: 100%;
}
#data-container {
  float: left;
  background: #f8f8f8;
  padding: calc(52px + 40px) 0 0 250px;
  overflow-x: auto;
}
.data-wrap {
  overflow: hidden;
}
</style>
<script>
const leftSide = () => import(/* webpackChunkName: "index" */ './leftSide');
const navTop = () => import(/* webpackChunkName: "index" */ './navTop');
const window = () => import(/* webpackChunkName: "index" */ './window')

export default {
  // name: 'App',
  components: {
     leftSide,
     navTop,
     window
  },
  mounted() {
    
  },
  methods: {
    resizeWindow() {
      $(window).resize(function() {
          var w = $(window).width();
          $('#data-container').css({
            'width': (w - 250) + 'px'
          })
      });
      $(window).trigger('resize');
    }
  }
}
</script>
