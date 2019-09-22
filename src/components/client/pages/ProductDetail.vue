
<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="sticky-top bg-white">
        <nav aria-label="breadcrumb" style="">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><a href="#">首頁</a></li>
            <li class="breadcrumb-item"><a href="#">商品列表</a></li>
            <li class="breadcrumb-item"><a href="#">燈具</a></li>
            <li class="breadcrumb-item active" aria-current="page">LED 工作燈</li>
          </ol>
        </nav>
      </div>

      <div class="row">
        <div class="col-md-7 productImg">
          <img :src="product.imageUrl" class="img-fluid" alt="">
          <img src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" class="img-fluid" alt="">
          <img src="https://images.unsplash.com/photo-1548728560-29a15f46fb24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" class="img-fluid" alt="">
        </div>
        <div class="col-md-5">
          <div class="sticky-top" style="top:10px">
            <a href="#" class="badge badge-warning">{{product.category}}</a>
            <div class="my-4">
              <h1 class="h2">{{product.title}}</h1>
              <div class="d-flex">
                <span class="mr-3 font-weight-bold">{{product.price | currency}}</span>
                <del class="text-secondary font-weight-bold">
                  {{product.origin_price | currency}}</del>
              </div>
            </div>
            <hr>
            <div class="d-flex">
              <div class="btn-group border border-secondary mr-2" role="group">
                <button type="button" class="btn btn-white" @click="minusNum">-</button>
                <input type="text" class="btn btn-white num-text" v-model.number="num">
                <button type="button" class="btn btn-white" @click="plusNum">+</button>
              </div>
              <a href="#" class="btn btn-outline-secondary rounded-0 w-100"
              @click.prevent="addToCart(productId, num)">
              <span v-if="!status.addLoading">加入購物袋</span>
              <i class="fas fa-spinner fa-spin" v-if="status.addLoading"></i></a>
            </div>

            <div class="my-4">
              <h5>商品描述</h5>
              <p style="line-height:2">{{product.description}}</p>
            </div>
            <!-- eslint-disable max-len -->
            <!-- <nav class="mb-4">
              <div class="nav" id="nav-tab" role="tablist">
                <a class="active btn btn-outline-secondary" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab">商品資訊</a>
                <a class=" btn btn-outline-secondary" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab">商品材質</a>
                <a class=" btn btn-outline-secondary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab">Contact</a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                提供適當支撐和絕佳舒適感
                布套可拆下用洗衣機洗滌，容易保持乾淨
                採捲筒包裝，容易帶回家
                提供25年品質保證；欲知更多細則，請參閱品質保證書
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                商品材質
                表布: 64%聚酯纖維, 36%棉
                舒適材質: 聚酯纖維填充物
                襯裡: 聚丙烯纖維不織布
                舒適材質: PU泡棉 (28公斤/立方公尺)
              </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="">
.num-text {
  max-width: 80px;
}
</style>

<script>
export default {
  data() {
    return {
      product: {},
      productId: '',
      isLoading: false,
      status: {
        addLoading: false,
      },
      num: 1,
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/product/${vm.productId}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('取得完畢');
          vm.product = response.data.product;
          vm.isLoading = false;
        }
      });
    },
    addToCart(id, qty = 1) {
      // <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.addLoading = true;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('已加入購物袋');
          vm.status.addLoading = false;
        }
      });
    },
    plusNum() {
      this.num += 1;
    },
    minusNum() {
      // eslint-disable-next-line no-unused-expressions
      this.num > 1 ? this.num -= 1 : this.num = 1;
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    console.log(this.productId);
    this.getProduct();
  },
};
</script>

<style lang="">
  .productImg img {
    margin-bottom: 30px;
  }
</style>
