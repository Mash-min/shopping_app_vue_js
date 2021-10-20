<template>
  <div>
    <div class="mb-3">
      <ul class="list-group">
        <li class="list-group-item col-md-6"
          v-for="category in categories" :key="category.id">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-bind:value="category.slug" v-model="selectedCategories">
              {{ category.category }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-between">
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="emitBackToImages">Back</button>
      </div>
      <div class="col-4 d-grid">
        <button class="btn btn-outline-primary" @click="emitProductCategories">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'AddProductCategory',
    data() {
      return {
        categories: [],
        selectedCategories: []
      }
    },
    mounted() {
      this.getCategories()
    },
    methods: {
      getCategories() {
        axios.get(`${this.$appUrl}/api/categories/paginate=0`)
        .then(res => {
          this.categories = res.data.categories.data
        })
        .catch(err => {
          console.log(err.response)
        })
      } ,

      emitProductCategories() {
        this.$emit('emitProductCategories', this.selectedCategories)
      },

      emitBackToImages() {
        this.$emit('emitBackToImages')
      }
    }
  }
</script>