<template>
  <div class="d-flex justify-content-between p-2">
    <h3>{{ title }}</h3>
    <button class="btn btn-outline-dark d-block d-lg-none d-sm-block d-xs-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      <i class="fa fa-bars"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'OffCanvasHeader',
  props: ['title']
}
</script>