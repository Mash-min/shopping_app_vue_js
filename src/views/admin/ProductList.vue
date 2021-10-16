<template>
  <div>
    <Navbar/>
    <OffCanvas/>
    <div id="profile" class="">
      <div class="row">
        <SideBar/>
        <div class="col-lg-9 mb-5">
          <OffCanvasHeader 
            v-bind="{ title: 'Product List' }"/>
          <div class="d-grid p-2">
            <input type="text" class="form-control" placeholder="Search product">
          </div>
          <div class="dashboard-container">
            <div class="row">
              <ProductTable/>
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
  import ProductTable from '../../components/Admin/ProductTable'
  import OffCanvasHeader from '../../components/Admin/OffCanvasHeader'

  export default {
    name: 'ProductList',
    components : {
      Navbar,
      OffCanvas,
      SideBar,
      ProductTable,
      OffCanvasHeader
    }
  }
</script>