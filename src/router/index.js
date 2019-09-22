import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// pages
import Login from '@/components/Login';
// admin
import Dashboard from '@/components/admin/Dashboard';
import Products from '@/components/admin/pages/Products';
// client
import Layout from '@/components/client/Layout';
import Home from '@/components/client/Home';
import ProductList from '@/components/client/pages/ProductList';
import ProductDetail from '@/components/client/pages/ProductDetail';
import CreateOrder from '@/components/client/pages/CreateOrder';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      // name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/productList',
          name: 'ProductList',
          component: ProductList,
        },
        {
          path: '/productList/:productId',
          name: 'ProductDetail',
          component: ProductDetail,
        },
        {
          path: '/createOrder',
          name: 'CreateOrder',
          component: CreateOrder,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
