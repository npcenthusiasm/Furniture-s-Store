<template>
  <div>
    <Navbar />
    <AlertMessage></AlertMessage>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../client/Navbar';
import Footer from '../client/Footer';
import AlertMessage from '../AlertMessage';

export default {
  components: {
    Navbar,
    Footer,
    AlertMessage,
  },
};
</script>

