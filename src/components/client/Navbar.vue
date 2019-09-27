<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mb-4 p-0">
      <nav class="navbar navbar-expand-md navbar-light">
        <router-link to="/" class="navbar-brand navbar-logo
        bg-transparent shadow-none font-weight-bold">Furniture's Store</router-link>
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
            <li class="nav-item ">
              <router-link to="/admin/products" class="nav-link">管理商品</router-link>
            </li>
          </ul>

          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <router-link to="/login"
              class="btn btn-outline-primary rounded-circle">
              <i class="fas fa-user-circle"></i>
              </router-link>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-primary rounded-circle" href="#">
                <i class="fab fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <button class="btn btn-outline-primary rounded-circle btn-cart"
              data-toggle="dropdown">
                <i class="fa fa-shopping-bag"></i>
                <span class="badge badge-pill badge-danger">{{cartsCount}}</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px;z-index:1021;">
                <div class="px-4 py-3">
                  <h6>已選購商品</h6>
                  <div class="cart-scroll">
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
                            {{item.total | currency}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p v-if="cartsCount === 0">是空的</p>

                  </div>
                  <hr>
                  <div class="d-flex mb-3">
                    <div class="mr-auto">總金額</div>
                    <div class="text-right">{{total | currency}}</div>
                  </div>
                  <router-link class="btn btn-outline-primary btn-block"
                  to="/orderCheck">結帳去</router-link>
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
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
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
    cartsCount() {
      return this.$store.state.cartsCount;
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
  .btn-cart {
    background-color: transparent;
    position: relative;
  }
  .btn-cart .badge {
    position: absolute;
    right: -10px;
    top: 0px;
  }
  .cart-scroll {
    max-height: 200px;
    overflow: auto;
  }
</style>

