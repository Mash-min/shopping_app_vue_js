import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import router from './router'
import Swal from 'sweetalert2'
import '@tinymce/tinymce-vue/lib/browser/tinymce-vue'
import VueImg from 'v-img';
Vue.use(VueImg);

Vue.config.productionTip = false
Vue.prototype.$appUrl = `http://localhost:8000`
Vue.mixin({
  methods: {
    showLoader(message) {
      Swal.fire({
        title: message,
        html: `
          <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        `,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false
      })
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

