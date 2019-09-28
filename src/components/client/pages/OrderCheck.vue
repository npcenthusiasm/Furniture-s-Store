<template>
  <div>
    <BuyProgress :progess = step></BuyProgress>
    <!-- step1 -->
    <div class="container mb-4">
      <table class="table table-sm">
        <thead class="mb-4">
          <tr>
            <th class="text-center">商品資訊</th>
            <th width="50"
                class="text-center">數量</th>
            <th width="100"
                class="text-right">單價</th>
            <th width="100"
                class="text-right">折扣價</th>
            <th width="100"
                class="text-right">小計</th>
            <th width="100"
                class="text-center">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts"
              :key="item.id">
            <td>
              <div class="d-flex">
                <div class="order-img mr-3"
                     :style="{backgroundImage:`url(${item.product.imageUrl})`}">
                </div>
                <div>
                  {{item.product.title}}
                </div>
              </div>
            </td>
            <td class="align-middle text-center"
                style="font-size:14px">
              {{item.qty}}/{{item.product.unit}}</td>
            <td class="align-middle text-right"
                style="font-size:14px">
              {{item.product.origin_price}}</td>
            <td class="align-middle text-right"
                style="font-size:14px">
              {{item.product.price}}
            </td>
            <td class="align-middle text-right"
                style="font-size:14px">
              {{item.total}}
            </td>

            <td class="align-middle text-center">
              <a href="#" class="text-muted"
                @click.prevent="removeCart(item.id)">
                <i class="fa fa-times"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container mb-4">
       <div class="row">
        <div class="col-md-8">
           <div class="alert alert-warning">
            輸入「magic」，5折 優惠
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="輸入優惠碼"
            v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary"
                      @click.prevent="useCoupon">套用優惠券</button>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <table class="table order-table ">
            <tbody>
              <tr>
                <td>總金額</td>
                <td class="text-right">{{total | currency}}</td>
              </tr>
              <tr>
                <td>優惠折抵</td>
                <td class="text-right">{{total - final_total | currency}}</td>
              </tr>
              <tr>
                <td>應付金額</td>
                <td class="text-right text-success">{{final_total | currency}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <div class="d-flex mt-2">
            <router-link to="/productList"
            class="btn btn-outline-primary mr-auto">返回購物</router-link>
            <router-link to="/orderCreate" class="btn btn-outline-primary">下一步</router-link>
          </div>
        </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BuyProgress from '../BuyProgress';

export default {
  components: {
    BuyProgress,
  },
  data() {
    return {
      step: '1',
      coupon_code: '',
    };
  },
  methods: {
    ...mapActions('cartsModules', ['getCart']),
    removeCart(id) {
      this.$store.dispatch('cartsModules/removeCart', id);
    },
    useCoupon() {
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          console.log('套用優惠券', response);
          this.$bus.$emit('message:push', response.data.message, 'success');
          vm.getCart();
        } else {
          console.log('套用失敗', response);
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
        vm.$store.dispatch('updateLoading', false);
      });
    },
  },
  computed: {
    ...mapGetters('cartsModules', ['carts', 'total', 'final_total']),
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
.order-img {
  background-position: center center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.order-table td {
  border: 0;
}
</style>
