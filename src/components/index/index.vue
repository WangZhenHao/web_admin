<template>
  <div id="app" class="w-h">
    <div>
        <!-- 导航 -->
        <navTop></navTop>
        <!-- 左侧栏 -->
        <leftSide></leftSide>
        <!-- 路由 -->
        <div class="w-h" id="data-container">
            <div class="p-ten data-wrap">
              <!-- <keep-alive> -->
                <router-view></router-view>
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
  background: #fff;
  /*padding-top: 52px;*/
  padding: 52px 0 0 250px;
  /*top: 0px;
  left: 250px;*/
  overflow-x: auto;
}
.data-wrap {
  min-width: 920px;
}
</style>
<script>
const leftSide = () => import(/* webpackChunkName: "leftSide" */ './leftSide');
const navTop = () => import(/* webpackChunkName: "navTop" */ './navTop');


export default {
  // name: 'App',
  components: {
     leftSide,
     navTop,
  },
  mounted() {
    // this.resizeWindow();
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
