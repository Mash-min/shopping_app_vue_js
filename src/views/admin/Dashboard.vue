<template>
  <div>
    <Navbar/>
    <OffCanvas/>
    <div id="profile" class="">
      <div class="row">
        <SideBar/>
        <div class="col-lg-9 mb-5">
          <div class="d-flex justify-content-between">
            <h3>Dashboard</h3>
            <button class="btn btn-outline-dark d-block d-lg-none d-sm-block d-xs-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i class="fa fa-bars"></i>
            </button>
            <!-- ============ OFF-CANVAS-BUTTON =========== -->
          </div><hr>
          <div class="dashboard-container">
            <div class="row">
              <!-- DASHBOARD CONTENT -->
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Shipping Fee</th>
                    <th scope="col">Status</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0000-1111-2222-3333</th>
                    <td>Sample Product 1</td>
                    <td>$ 150.00</td>
                    <td>100</td>
                    <td>$ 5.00</td>
                    <td>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0000-1111-2222-3333</th>
                    <td>Sample Product 1</td>
                    <td>$ 150.00</td>
                    <td>100</td>
                    <td>$ 5.00</td>
                    <td>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0000-1111-2222-3333</th>
                    <td>Sample Product 1</td>
                    <td>$ 150.00</td>
                    <td>100</td>
                    <td>$ 5.00</td>
                    <td>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-dark">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-grid col-4 offset-4">
                <button class="btn btn-sm btn-outline-dark">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============ PROFILE =========== -->
  </div>
</template>

<script>
  import Navbar from '../../components/Admin/Navbar'
  import OffCanvas from '../../components/Admin/OffCanvas'
  import SideBar from '../../components/Admin/SideBar'

  export default {
    name: 'Dashboard',
    components : {
      Navbar,
      OffCanvas,
      SideBar
    }
  }
</script>