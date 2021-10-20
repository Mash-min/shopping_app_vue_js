<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action"
      v-for="category in categories" :key="category.slug">
      {{ category.category }}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'CategoryList' ,
    props: ['categories']
  }
</script>