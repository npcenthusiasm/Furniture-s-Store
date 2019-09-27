import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import productListModules from './productList';
import cartsModules from './carts';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 嚴謹模式
  state: {
    isLoading: false,
    pagination: {},
    // carts: [],
    // cartsCount: 0,
    // total: 0,
    isSingleLoading: false,
    productId: '',
  },
  actions: {
    // payload 載荷
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getCart(context) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        if (response.data.success) {
          console.log('取得購物袋', response);
          context.commit('CARTSCOUNT', response.data.data.carts.length);
          context.commit('CARTS', response.data.data.carts);
          context.commit('TOTAL', response.data.data.total);
          context.commit('LOADING', false);
        }
      });
    },
    removeCart(context, id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(api).then((response) => {
        if (response.data.success) {
          console.log('刪除購物袋資料', response);
          context.dispatch('getCart');
          context.commit('LOADING', false);
        }
      });
    },
    addToCart(context, { id, qty }) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('SINGLELOADING', true);
      context.commit('PRODUCTID', id);
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          console.log('已加入購物袋', response);
          context.commit('PRODUCTID', '');
          context.commit('SINGLELOADING', false);
          context.dispatch('getCart');
        }
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PAINATION(state, payload) {
      state.pagination = payload;
    },
    // CARTS(state, payload) {
    //   state.carts = payload;
    // },
    // TOTAL(state, payload) {
    //   state.total = payload;
    // },
    // CARTSCOUNT(state, payload) {
    //   state.cartsCount = payload;
    // },
    SINGLELOADING(state, status) {
      state.isSingleLoading = status;
    },
    PRODUCTID(state, payload) {
      state.productId = payload;
    },
  },
  getters: {
    // pagination(state) {
    //   return state.pagination;
    // },
    // addLoading(state) {
    //   return state.addLoading;
    // },
    // productId(state) {
    //   return state.productId;
    // },
  },
  modules: {
    productListModules,
    cartsModules,
  },
});
