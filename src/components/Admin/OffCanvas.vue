<template>
  <div class="offcanvas offcanvas-start d-block d-lg-none d-sm-block d-xs-block" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"> 
    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <a href="/" class="ms-3 d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold">Dashboard</span>
      </a>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            Products
          </button>
          <div class="collapse show" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Product list</a></li>
              <li><a href="#" class="link-dark rounded">Add Product</a></li>
              <li><a href="#" class="link-dark rounded">Product Archive</a></li>
              <li><a href="#" class="link-dark rounded">Product Categories</a></li>
              <li><a href="#" class="link-dark rounded">Trash</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div class="collapse show" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Pending Orders</a></li>
              <li><a href="#" class="link-dark rounded">On Shipping</a></li>
              <li><a href="#" class="link-dark rounded">On Process</a></li>
              <li><a href="#" class="link-dark rounded">Delivered Orders</a></li>
              <li><a href="#" class="link-dark rounded">Canceled Orders</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#users-collapse" aria-expanded="false">
            Users
          </button>
          <div class="collapse show" id="users-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">User List</a></li>
              <li><a href="#" class="link-dark rounded">Suspended Accounts</a></li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <div class="d-grid">
            <button class="btn btn-sm btn-outline-dark">
              Logout
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffCanvas'
}
</script>