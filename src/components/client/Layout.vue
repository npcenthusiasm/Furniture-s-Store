<template>
  <div>
    <div class="container mb-4">
      <Navbar />
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../client/Navbar';
import Footer from '../client/footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

