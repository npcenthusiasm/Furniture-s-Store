<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <AlertMessage></AlertMessage>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '../client/Navbar';
import Footer from '../client/Footer';
import AlertMessage from '../AlertMessage';

export default {
  components: {
    Navbar,
    Footer,
    AlertMessage,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>

