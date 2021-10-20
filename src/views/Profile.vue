<template>
  <div>
    <Banner/>
    <Navbar/>
    <div class="offcanvas offcanvas-start d-block d-lg-none d-sm-block d-xs-block" 
      data-bs-scroll="true" 
      data-bs-backdrop="false" 
      tabindex="-1" 
      id="offcanvasScrolling" 
      aria-labelledby="offcanvasScrollingLabel"> 
      <Collapse/>
    </div>
    <div id="profile" class="container">
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block d-xxl-block">
          <Collapse/>
        </div>
        <div class="col-lg-9 mb-5">
          <div class="d-flex justify-content-between">
            <h3>My Profile</h3>
            <button class="btn btn-outline-dark d-block d-lg-none d-sm-block d-xs-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i class="fa fa-bars"></i>
            </button>
            <!-- ============ OFF-CANVAS-BUTTON =========== -->
          </div><hr>
          <div class="profile-container">
            <div class="row">
              <div class="col-md-12 profile-image-container mb-5">
                <div class="image-container d-grid mb-2">
                  <img src="../assets/images/avatar.jpg" alt="">
                </div>
                <div class="input-group">
                  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Save</button>
                </div>
              </div>
              <div class="col-md-4">
                <small class="text-muted">Full name:</small>
                <p class="profile-full-name">Mashiyyat Delos Santos</p>
              </div>
              <div class="col-md-4">
                <small class="text-muted">Email:</small>
                <p class="profile-full-name">delossantos.mash@gmail.com</p>
              </div>
              <div class="col-md-4">
                <small class="text-muted">Contact number:</small>
                <p class="profile-full-name">0998-220-5660</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/layouts/Banner'
  import Navbar from '../components/layouts/Navbar'
  import Collapse from '../components/layouts/Collapse'

  export default {
    name: 'Profile' ,
    components: {
      Banner,
      Navbar,
      Collapse
    }
  }
</script>