<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products`;
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data);
  //   });
  // },
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
