<template>
  <div>
    <Banner/>
    <Navbar/>

    <div class="row">
      <div class="col-md-4 offset-md-4 mb-5">
        <div class="login-form-container mb-5">
          <h1 class="mb-3 center ">Login</h1>
          <form action="" autocomplete="off">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button class="btn btn-outline-primary btn-lg" type="submit">Login</button>
            </div>
          </form>
        </div>
        <center class="text-muted">© 2020–2021</center>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/layouts/Banner'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

export default {
  name: 'Login',
  components: {
    Banner,
    Navbar,
    Footer
  }
}
</script>