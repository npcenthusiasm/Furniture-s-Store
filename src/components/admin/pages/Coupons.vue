<template>
  <div>
     <loading :active.sync="isLoading"></loading>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click="openModal(true)">建立優惠券</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>標題</th>
          <th>打幾折</th>
          <th>到期日</th>
          <th class="text-center">啟用</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.due_date | timestampToData}}</td>
          <td class="text-center">{{item.is_enabled}}</td>
          <td class="text-center">
            <button class="btn btn-outline-primary" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger" @click="openDeleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :page="pagination" @switch="getCoupons"></pagination>
    <!-- add coupon modal -->
    <div class="modal" tabindex="-1" role="dialog" id="couponModel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">新增優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="coupon-title">標題</label>
              <input type="text" class="form-control" id="coupon-title"
              v-model="coupon.title" placeholder="請輸入標題">
            </div>
            <div class="form-group">
              <label for="coupon-code">優惠碼</label>
              <input type="text" class="form-control" id="coupon-code"
              v-model="coupon.code" placeholder="請輸入優惠碼">
            </div>
            <div class="form-group">
              <label for="coupon-duedate">到期日</label>
              <input type="date" class="form-control" id="coupon-duedate"
              v-model="coupon.due_date" placeholder="請輸入到期日">
            </div>
            <div class="form-group">
              <label for="coupon-percent">折數</label>
              <input type="number" class="form-control" id="coupon-percent"
              v-model.number="coupon.percent" placeholder="請輸入折數">
            </div>
            <div class="form-group">
              <input type="checkbox"  id="coupon-enable" v-model="coupon.is_enabled"
              true-value="1" false-value="0" placeholder="請輸入折數">
              <label for="coupon-enable">是否啟用</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="updateCoupon">新增</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete coupon modal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1"
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ coupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import pagination from '../../Pagination';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      coupons: [],
      coupon: {},
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('取得完畢');
          vm.coupons = response.data.coupons;
          vm.pagination = response.data.pagination;
          vm.isLoading = false;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.coupon = {};
        this.isNew = true;
      } else {
        this.coupon = Object.assign({}, item); // 物件船參考的特性，因此加上assign
        // 將 item 寫入一個新的空物件，避免跟template有參考特性
        // 轉換時間格式  1567987200 --> 2019-09-09
        const timestamp = this.coupon.due_date;
        const month = new Date(timestamp * 1000).getMonth() < 10 ?
          0 + (new Date(timestamp * 1000).getMonth() + 1) :
          new Date(timestamp * 1000).getMonth() + 1;
        const date = new Date(timestamp * 1000).getDate() < 10 ?
          0 + new Date(timestamp * 1000).getDate() :
          new Date(timestamp * 1000).getDate();
        const formatTime = `${new Date(timestamp * 1000).getFullYear()}-${month}-${date}`;
        this.coupon.due_date = formatTime;
        this.isNew = false;
      }
      $('#couponModel').modal('show');
    },
    updateCoupon() {
      let api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      const vm = this;
      // 轉換日期 為 timestamp 格式 2019-09-09 --> 1567987200
      const timestamp = new Date(vm.coupon.due_date).getTime();
      vm.coupon.due_date = Math.floor(timestamp / 1000);

      if (!vm.isNew) {
        api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: vm.coupon }).then((response) => {
        console.log('建立商品中');
        console.log(response.data);
        console.log(vm.coupon);
        if (response.data.success) {
          console.log('成功');
          $('#couponModel').modal('hide');
          console.log('重新取得資料中....');
          // 清空上傳的檔案
          // $('#customFile').val('');
          vm.getCoupons();
          // vm.coupons = response.data.coupons;
        } else {
          console.log('失敗');
          $('#couponModel').modal('hide');
          console.log('重新取得資料中....');
          vm.getCoupons();
        }
      });
    },
    openDeleteModal(item) {
      const vm = this;
      vm.coupon = item;
      $('#delCouponModal').modal('show');
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('刪除成功', response);
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
        } else {
          console.log('刪除失敗., response');
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
