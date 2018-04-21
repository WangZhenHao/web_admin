<template>
<div :id="modalId" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{title || '我是模态框标题'}}</h4>
      </div>
      <div class="modal-body">
         <slot name="modal-body"></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button v-show="showBtn" type="button" class="btn btn-primary" @click="confirm">{{btnConfirm || '确认'}}</button>
      </div>
    </div>
  </div>
</div>
</template>
<style>
</style>
<script>
  /**
   * 模态框组件使用介绍:
     <modal title="标题" btn-confirm="确认按钮名称" :show-btn="是否显示确认按钮" ref="组件名" @componentClickEvent="事件名">
      <div slot='modal-body'>
        显示内容
      </div>
    </modal>
   */
	export default {
    props: ['showBtn', 'title', 'btnConfirm'],
		data() {
			return {
        modalId: 'modal',
			}
		},
    created() {
        this.modalId += ~~(Math.random() * 10000);
    },
		mounted() {
		},
		methods:{
      confirm() {
         this.$emit('modalClickEvent')
      },
      show() {
        $('#' + this.modalId).modal('show');
      },
      hide() {
        $('#' + this.modalId).modal('hide');
      }
		}
	}
</script>