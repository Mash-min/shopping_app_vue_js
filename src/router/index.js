import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product'
import Dashboard from '../views/Admin/Dashboard'
import ProductList from '../views/Admin/ProductList'
import AddProduct from '../views/Admin/AddProduct'
import ProductArchive from '../views/Admin/ProductArchive'
import ProductCategories from '../views/Admin/ProductCategories'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/admin/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product-archive',
    name: 'ProductArchive',
    component: ProductArchive
  },
  {
    path: '/admin/product-categories',
    name: 'ProductCategories',
    component: ProductCategories
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

