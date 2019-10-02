<template>
  <div class="message-alert animated"
  :class="{'bounceInDown': animationIn, 'bounceOutRight':animationOut }">
    <div class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      <span v-if="item.status === 'success'"><i class="fas fa-check"></i></span>
      <span v-else><i class="fas fa-times"></i></span>
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Alert',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('alertMsgModules', ['removeMessage']),
  },
  computed: {
    ...mapGetters('alertMsgModules', ['messages', 'animationIn', 'animationOut']),
  },
};
</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>

