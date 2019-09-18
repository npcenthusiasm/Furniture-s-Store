<template>
  <div>
    <div class="text-right my-4">
      <button class="btn btn-primary">建立新產品</button>
    </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col" class="text-right">原價</th>
            <th scope="col" class="text-right">售價</th>
            <th scope="col" class="text-center">是否啟用</th>
            <th scope="col" width="150"  class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td class="text-right">{{item.origin_price}}</td>
            <td class="text-right">{{item.price}}</td>
            <td class="text-center">{{item.is_enabled}}</td>
            <td>
              <button class="btn btn-outline-primary">編輯</button>
              <button class="btn btn-outline-danger">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      this.$http.get(api).then((response) => {
        console.log('hello');
        console.log(response.data);
        if (response.data.success) {
          console.log('get products success');
          vm.products = response.data.products;
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
