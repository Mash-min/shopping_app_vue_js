<template>
  <div class="navbars sticky-top">
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div class="container-fluid container">
            <a class="navbar-brand" href="/">Shopping App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">Mashiyyat</a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">Signup</a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">
                      <i class="fa fa-envelope"></i>
                      <span class="badge bg-danger">90</span>
                  </a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">
                      <i class="fa fa-bell"></i>
                      <span class="badge bg-danger">2</span>
                  </a>
                </li>
                <li class="nav-item d-flex justify-content-center">
                  <a class="nav-link" href="#">
                      <i class="fa fa-shopping-cart"></i>
                      <span class="badge bg-danger">4</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 p-4">
          <div class="container d-flex">
              <form class="container-fluid">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search something...">
                    <button class="btn btn-outline-primary"><i class="fa fa-search"></i></button>
                  </div>
              </form>
          </div>
      </nav>
  </div>
</template>

<script>

  export default {
    name: 'Navbar'
  }

</script>

<style scoped>

</style>