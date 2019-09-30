<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <AlertMessage/>
    <ScrollTop/>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '../client/Navbar';
import Footer from '../client/Footer';
import AlertMessage from '../AlertMessage';
import ScrollTop from '../ScrollTop';

export default {
  components: {
    Navbar,
    Footer,
    AlertMessage,
    ScrollTop,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
