// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';

import App from './App';
import router from './router';
import store from './store';

import './bus';
import currencyFilter from './filters/currency';
import timestampToDataFilter from './filters/timestampToData';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timestampToData', timestampToDataFilter);

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  events: 'input|blur', // 讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW,
  },
});

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    console.log('驗證中...');
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        console.log('驗證成功', response);
        next();
      } else {
        console.log('驗證失敗', response);
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
