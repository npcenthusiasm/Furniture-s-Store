<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <div class="col-4">
          <div class="border border-black p-3 text-center alert alert-primary">
            1. 確認購買清單
          </div>
        </div>
        <div class="col-4">
          <div class="border border-black p-3 text-center">
           2. 填寫訂單資料
          </div>
        </div>
        <div class="col-4">
          <div class="border border-black p-3 text-center">
            3. 完成
          </div>
        </div>
      </div>
    </div>

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
              {{item.final_total}}
            </td>

            <td class="align-middle text-center">
              <a href="#removeModal"
                 class="text-muted">
                <i class="fa fa-times"
                   aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>


      <!-- <div>

        NT.10548
        運費 尚未選擇
        活動折抵 NT.0
        折價券 NT.0
        應付金額 NT.10548
      </div> -->
    </div>
    <div class="container mb-4">
       <div class="row">
        <div class="col-6">
          <div class="input-group mb-3">
            <input type="text"
                   class="form-control"
                   placeholder="輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary"
                      type="button">套用優惠券</button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <table class="table order-table ">
            <tbody>
              <tr>
                <td class="text-right">總金額</td>
                <td class="text-right">{{total | currency}}</td>
              </tr>
              <tr>
                <td class="text-right">優惠折抵</td>
                <td class="text-right">{{total - final_total | currency}}</td>
              </tr>
              <tr>
                <td class="text-right">應付金額</td>
                <td class="text-right">{{final_total | currency}}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex">
            <a href="#" class="btn btn-outline-primary mr-auto">繼續購物</a>
            <a href="#" class="btn btn-outline-primary">下一步</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: 0,
      final_total: 0,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      // vm.status.addLoading = true;
      this.$http.get(api).then((response) => {
        console.log('取得購物袋資料中.............');
        if (response.data.success) {
          // vm.status.addLoading = false;
          console.log(response.data.data);
          vm.carts = response.data.data.carts;
          vm.total = response.data.data.total;
          vm.final_total = response.data.data.final_total;
        }
      });
    },
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
