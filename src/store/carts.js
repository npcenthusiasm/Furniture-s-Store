import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  state: {
    carts: [],
    cartsCount: 0,
    total: 0,
  },
  actions: {
    // payload 載荷
    getCart(context) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          console.log('取得購物袋', response);
          context.commit('CARTSCOUNT', response.data.data.carts.length);
          context.commit('CARTS', response.data.data.carts);
          context.commit('TOTAL', response.data.data.total);
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    removeCart(context, id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then((response) => {
        if (response.data.success) {
          console.log('刪除購物袋資料', response);
          context.dispatch('getCart');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    addToCart(context, { id, qty }) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('SINGLELOADING', true, { root: true });
      context.commit('PRODUCTID', id, { root: true });
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          console.log('已加入購物袋', response);
          context.commit('PRODUCTID', '', { root: true });
          context.commit('SINGLELOADING', false, { root: true });
          context.dispatch('getCart');
        }
      });
    },
  },
  mutations: {
    CARTS(state, payload) {
      state.carts = payload;
    },
    TOTAL(state, payload) {
      state.total = payload;
    },
    CARTSCOUNT(state, payload) {
      state.cartsCount = payload;
    },
  },
  getters: {
    carts: state => state.carts,
    total: state => state.total,
    cartsCount: state => state.cartsCount,
  },
};
