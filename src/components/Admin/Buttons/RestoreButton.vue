<template>
  <button class="btn btn-sm btn-outline-primary ms-1" @click="emitRestoreProduct">
    <i class="fa fa-recycle"></i>
  </button>
</template>

<script>
  export default {
    name: 'RestoreButton' ,
    methods: {
      emitRestoreProduct() {
        this.$emit('emitRestoreProduct')
      }
    } 
  }
</script>