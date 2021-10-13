<template>
  <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 p-2">
    <div class="card">
        <div class="card-image-container">
            <img src="../../assets/images/2.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-product-price">$ {{ product.price }}.00</p>
          <div class="card-discounted-price d-flex">
            <p class="fst-italic text-muted me-2 text-decoration-line-through">$ 50.00</p> 
            <span>-{{ product.discount }}%</span>
          </div>
          <div class="card-product-ratings mb-3">
              <i class="fa fa-star link-warning"></i>
              <i class="fa fa-star link-warning"></i>
              <i class="fa fa-star link-warning"></i>
              <i class="fa fa-star link-warning"></i>
              <i class="fa fa-star link-dark"></i>
              (14)
          </div>
          <div class="d-grid gap-2">
            <a v-bind:href="'/products/'+ product.slug" class="btn btn-outline-primary btn-sm" type="button">View product</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>