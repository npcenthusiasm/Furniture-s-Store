<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mb-4 p-0">
      <nav class="navbar navbar-expand-md navbar-light">
        <router-link to="/" class="navbar-brand navbar-logo
        bg-transparent shadow-none">SHOP</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/productList" class="nav-link">商品列表
              <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class ="nav-item">
              <a class="nav-link" href="#">樣式</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item ">
              <router-link to="/admin/products" class="nav-link">管理商品</router-link>
            </li>
          </ul>

          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-outline-primary rounded-circle" href="#">
                <i class="fab fa-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-primary rounded-circle" href="#">
                <i class="fab fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <button class="btn btn-outline-primary rounded-circle" data-toggle="dropdown"
              data-flip="false">
                <i class="fa fa-shopping-bag"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px;z-index:1021;">
                <div class="px-4 py-3">
                  <h6>已選購商品</h6>
                  <table class="table table-hover table-sm">
                    <tbody>
                      <tr v-for="item in carts" :key="item.id">
                        <td class="align-middle text-center">
                          <a href="#" class="text-muted"
                            @click.prevent="removeCart(item.id)">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                        <td class="">
                          <div class="cart-img"
                          :style="{backgroundImage:`url(${item.product.imageUrl})`}"></div>
                        </td>
                        <td class="align-middle text-left" style="font-size:14px">
                          {{item.product.title}}</td>
                        <td class="align-middle text-right" style="font-size:14px">
                          {{item.qty}}/{{item.product.unit}}</td>
                        <td class="align-middle text-right" style="font-size:14px">
                          {{item.product.price | currency}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr>
                  <div class="d-flex mb-3">
                    <div class="mr-auto">總金額</div>
                    <div class="text-right">{{total | currency}}</div>
                  </div>
                  <router-link class="btn btn-outline-primary btn-block"
                  to="/orderCheck">結帳去</router-link>
                  <!--
                    <a href="#" class="btn btn-outline-primary btn-block"
                  @click.prevent="">結帳去</a>
                  -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // carts: [],
      // total: 0,
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
      // const vm = this;
      // const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      // // vm.status.addLoading = true;
      // this.$http.get(api).then((response) => {
      //   console.log('取得購物袋資料中.............');
      //   if (response.data.success) {
      //     // vm.status.addLoading = false;
      //     console.log(response.data.data);
      //     vm.carts = response.data.data.carts;
      //     vm.total = response.data.data.total;
      //   }
      // });
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
      // const vm = this;
      // const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      // console.log(id);
      // // vm.status.addLoading = true;
      // // vm.isLoading = true;
      // vm.$store.dispatch('updateLoading', true);
      // this.$http.delete(api).then((response) => {
      //   console.log(response.data);
      //   // vm.isLoading = false;
      //   console.log('刪除中.............');
      //   if (response.data.success) {
      //     // vm.status.addLoading = false;
      //     vm.$store.dispatch('updateLoading', false);
      //     console.log(response.data);
      //     vm.getCart();
      //   }
      // });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    carts() {
      return this.$store.state.carts;
    },
    total() {
      return this.$store.state.total;
    },
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style lang="">
    @media (max-width: 768px) {
   .navbar-brand {
     text-align: center;
     color: red;
    }
  }
  .cart-img {
    background-position: center center;
    background-size: cover;
    width: 50px;
    height: 50px;
  }
</style>

