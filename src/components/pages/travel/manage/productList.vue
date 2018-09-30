<template lang="html">
  <div>
      sdafdsf
  </div> 
</template>

<script>
import { lvyouProductList } from '@/config/apiList'

export default {
    data() {
      return {

      }
    },
    activated() {
      this.getList();
    },
    methods: {
      getList() {
        lvyouProductList({}).then(res => {

        }).catch(res => {

        })
      }
    }
 }
</script>

<style lang="scss">

</style>
