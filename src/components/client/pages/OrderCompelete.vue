<template>
  <div>
    <BuyProgress :progess = step></BuyProgress>
    <!-- 3. 完成-->
    <div class="container">
      <div class="my-5 row justify-content-center">
        <form class="col-md-8" @submit.prevent="payOrder">
          <h5 class="text-success"><i class="fas fa-check"></i> 訂購成功</h5>
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th class="text-right">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <h5 class="text-success"><i class="fas fa-user"></i> 訂購人資訊</h5>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="order.is_paid === true">
            <router-link to="/productList" class="h5">
            <i class="fas fa-long-arrow-alt-left"></i>繼續逛
            </router-link>
          </div>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BuyProgress from '../BuyProgress';

export default {
  components: {
    BuyProgress,
  },
  data() {
    return {
      step: '3',
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.order = response.data.order;
        }
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('cartsModules/getCart');
          vm.$store.dispatch('updateLoading', false);
          vm.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
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
