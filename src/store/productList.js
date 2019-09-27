import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  state: {
    products: [],
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          console.log('取得產品列表', response);
          context.commit('PRODUCTS', response.data.products);
          context.commit('PAINATION', response.data.pagination, { root: true });
          context.commit('LOADING', false, { root: true });
        }
      });
    },
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    products: state => state.products,
  },
};
