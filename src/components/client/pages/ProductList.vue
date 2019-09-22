<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid jumbotron-bg-cover d-flex" style="background-image:url(https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)">
      <div class="container border border-white" >
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupie
          the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row mb-4">
        <div class="col-md-3  ">
          <ul class="list-group sticky-top" style="top:10px">
            <li class="list-group-item list-group-item-action"
            :class="{'active': item.category === currentCategory}"
             v-for="item in categories" :key="item.category"
             @click.prevent="getCategory(item.category)">
              <i :class="item.icon"></i> {{item.category}}
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row">
            <!-- 2 -->
            <div class="col-md-4  mb-3" v-for="item in filterCategory" :key="item.id">
              <div class="card box-shadow h-100">
                <router-link :to="`/productList/${item.id}`"
                 class="card-bg-cover"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </router-link>
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <h5 class="badge badge-warning">{{item.category}}</h5>
                  <p class="card-text">{{item.description}}</p>
                </div>
                <div class="card-footer d-flex align-items-center border-top-0 bg-white">
                  <div class="mr-auto">
                    <del class="font-weight-bold">{{item.origin_price | currency}}</del>
                    <div class="text-success font-weight-bold h5">{{item.price | currency}}</div>
                  </div>
                  <div>
                    <a href="#" class="btn btn-outline-primary rounded-circle">
                      <i class="fa fa-shopping-bag"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <pagination :page="pagination" @switch="getProducts"></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../../Pagination';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      productId: '',
      pagination: {},
      isLoading: false,
      status: {
        fileUploading: false,
      },
      currentCategory: '全部商品',
      categories: [
        { category: '全部商品', icon: 'fas fa-align-justify' },
        { category: '各式桌椅', icon: 'fas fa-chair' },
        { category: '寢具', icon: 'fas fa-bed' },
        { category: '沙發', icon: 'fas fa-couch' },
        { category: '燈具', icon: 'fas fa-lightbulb' },
      ],
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('取得完畢');
          vm.products = response.data.products;
          vm.pagination = response.data.pagination;
          vm.isLoading = false;
        }
      });
    },
    getCategory(selected) {
      const vm = this;
      vm.currentCategory = selected;
    },
  },
  computed: {
    filterCategory() {
      const vm = this;
      if (vm.currentCategory !== '全部商品') {
        return vm.products.filter(item => item.category === vm.currentCategory);
      }
      return vm.products;
    },
  },
  created() {
    this.getProducts();
  },
};

</script>

<style lang="">
  .card-bg-cover {
    background-size: cover;
    background-position: center center;
    height: 200px;
  }
  .jumbotron-bg-cover {
    background-size: cover;
    background-position: center center;
    height: 400px;
  }
  .box-shadow {
    box-shadow: 0 3px 5px  rgba(0, 0, 0, .16);
  }
  .box-shadow:hover {
    box-shadow: 0 3px 5px  rgba(0, 0, 0, .4);
  }
</style>
