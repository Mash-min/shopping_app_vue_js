<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" 
          v-for="link in links" 
          :key="link.id" 
          v-bind:class="{ 'disabled' : link.url == null , 'active' : link.active == true}">
          <button class="page-link" @click="emitProductUrl(link.url), scrollToTop">
            <span v-if="link.label == '&laquo; Previous' "><i class="fa fa-chevron-left"></i></span>
            <span v-else-if="link.label == 'Next &raquo;' "><i class="fa fa-chevron-right"></i></span>
            <span v-else>{{ link.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'ProductPagination' ,
    props: [
      'links'
    ],
    methods: {
      emitProductUrl(url) {
        this.$emit('emitProductUrl', url)
      }
    }
  }
</script>