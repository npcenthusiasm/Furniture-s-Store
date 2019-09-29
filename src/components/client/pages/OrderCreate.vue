<template>
  <div>
     <BuyProgress :progess = step></BuyProgress>
    <!-- 2. 填寫訂單資料 -->
    <div class="container">
      <div class="card mb-4">
        <div class="card-header" id="headingOne">
          <div class="d-flex align-items-end">
            <button class="btn btn-link mr-auto" type="button"
              data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              顯示購物車細節
            </button>
          </div>
        </div>
      </div>
      <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts"
                :key="item.id">
              <td>
                <div class="d-flex">
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
            </tr>
          </tbody>
        </table>
      </div>
      <!-- form -->
      <div class="mb-4">
        <form @submit.prevent="createOrder">
          <div class="row">
            <div class="col-md-8">
              <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">姓名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" id="username"
                  :class="{'is-invalid':errors.has('name')}" v-validate="'required'"
                  v-model="form.user.name" placeholder="輸入姓名">
                  <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                </div>
              </div>
              <div class="form-group row">
                <label for="usertel" class="col-sm-2 col-form-label">電話</label>
                <div class="col-sm-10">
                  <input type="tel" class="form-control" id="usertel" name="tel"
                  :class="{'is-invalid':errors.has('tel')}" v-validate="'required'"
                  v-model="form.user.tel" placeholder="輸入電話">
                <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
                </div>
              </div>
              <div class="form-group row">
                <label for="useremail" class="col-sm-2 col-form-label">信箱</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" name="email" id="useremail"
                  :class="{'is-invalid':errors.has('email')}" v-validate="'required|email'"
                  v-model="form.user.email" placeholder="輸入信箱">
                  <span class="text-danger"
                  v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
              </div>
              <div class="form-group row">
                <label for="useraddress" class="col-sm-2 col-form-label">地址</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="address" id="useraddress"
                  :class="{'is-invalid':errors.has('address')}" v-validate="'required'"
                  v-model="form.user.address" placeholder="輸入地址">
                  <span class="text-danger" v-if="errors.has('address')">電話必須輸入</span>
                </div>
              </div>
              <div class="form-group row">
                <label for="address" class="col-sm-2 col-form-label">備註</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="address" cols="30" rows="5"
                  v-model="form.message" placeholder="" ></textarea>
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
              <div class="d-flex">
                <router-link to="/orderCheck" class="btn btn-outline-primary mr-auto">
                上一步
                </router-link>
                <button type="submit" class="btn btn-outline-primary">建立訂單</button>
              </div>
            </div>
          </div>
        </form>
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
      step: '2',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      order: {
        user: {},
      },
    };
  },
  methods: {
    ...mapActions('cartsModules', ['getCart']),
    createOrder() {
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/order`;
      // vm.status.addLoading = true;
      const order = vm.form;
      this.$validator.validate().then((valid) => {
        // 驗證成功
        if (valid) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('建立訂單中.............');
            if (response.data.success) {
              // vm.status.addLoading = false;
              console.log('訂單已建立', response);
              vm.$router.push(`/orderCompelete/${response.data.orderId}`);
            }
          });
        } else {
        // 驗證失敗
          console.log('欄位不完整');
        }
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

<style lang="scss" scoped>
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
