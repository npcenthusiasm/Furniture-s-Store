import $ from 'jquery';

export default {
  namespaced: true,
  state: {
    messages: [],
  },
  actions: {
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATE_MESSAGE', {
        message,
        status,
        timestamp,
      });
      $('.message-alert').addClass('bounceInDown');
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessage(context) {
      context.commit('REMOVE_MESSAGE');
      $('.message-alert').removeClass('bounceInDown');
      $('.message-alert').removeClass('bounceOutRight');
    },
    removeMessageWithTiming(context, timestamp) {
      const msg = [...context.state.messages];
      setTimeout(() => {
        $('.message-alert').addClass('bounceOutRight');
      }, 3000);
      setTimeout(() => {
        msg.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVE_MESSAGE', i);
            console.log(i);
            $('.message-alert').removeClass('bounceInDown');
            $('.message-alert').removeClass('bounceOutRight');
          }
        });
      }, 5000);
    },
  },
  mutations: {
    UPDATE_MESSAGE(state, msg) {
      state.messages.push(msg);
    },
    REMOVE_MESSAGE(state) {
      console.log(state.messages);
      state.messages.splice(0, 1);
    },
  },
  getters: {
    messages: state => state.messages,
  },
};
