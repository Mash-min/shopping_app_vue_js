<template>
  <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Account
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Profile</a></li>
            <li><a href="#" class="link-dark rounded">Account Settings</a></li>
            <li><a href="#" class="link-dark rounded">Messages</a> <span class="rounded-pill badge bg-danger bg-secondary">100</span></li>
            <li><a href="#" class="link-dark rounded">Notifications</a> <span class="rounded-pill badge bg-danger bg-secondary">50</span></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#myOrdersCollapse" aria-expanded="true">
          My Orders
        </button>
        <div class="collapse show" id="myOrdersCollapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Orders</a></li>
            <li><a href="#" class="link-dark rounded">My Cancelations</a></li>
            <li><a href="#" class="link-dark rounded">My Returns</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#productCollapse" aria-expanded="true">
          Products
        </button>
        <div class="collapse show" id="productCollapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">My Cart</a></li>
            <li><a href="#" class="link-dark rounded">Saved Products</a></li>
            <li><a href="#" class="link-dark rounded">My Reviews</a></li>
            <li><a href="#" class="link-dark rounded">Buy Now</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Collapse'  
  }
</script>