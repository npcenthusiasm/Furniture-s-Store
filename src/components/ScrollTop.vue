<template>
  <div>
    <div class="top">
      <a href="#" @click.prevent="goTop"><i class="fas fa-chevron-up"></i></a>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  methods: {
    goTop() {
      $('html,body').animate({ scrollTop: 0 }, 800);
    },
    scrollFade() {
      if (window.scrollY > 300) {
        $('.top').fadeIn();
      } else {
        $('.top').fadeOut();
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollFade);
  },
};
</script>

<style lang="scss" scoped>
$hover:#7b776c;
.top {
  display: none;
  position: fixed;
  right: 10px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border: 2px solid $hover;
  z-index: 1000;
  border-radius: 50%;
  &:hover {
    background-color: $hover;
  }
a {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: $hover;
    &:hover {
      color: white;
    }
  }
}
</style>
