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
                <transition name="fade">
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                </transition>
              </div>
              <!-- <keep-alive> -->
              <!-- </keep-alive> -->
            </div>
        </div>  
    </div>
  </div>
</template>

<style>
.fade-leave-active {
   transform-origin: 0% 0%;
   position: absolute;
   width: 100%;
   animation: fadeLeave 1s;
}
.fade-enter-active {
   animation: fadeEnter 1s;
}
@keyframes fadeEnter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
}
@keyframes fadeLeave {
   from {
      opacity: 1;
      transform: rotate(0deg);
   }
   40% {
      transform: rotate(10deg);
   }
   to {
     opacity: 0;
     transform: translate3d(0, 2000px, 0);
   }
}
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
const window = () => import(/* webpackChunkName: "index" */ './window');
// import leftSide from './leftSide.vue';

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
