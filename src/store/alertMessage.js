export default {
  namespaced: true,
  state: {
    messages: [],
    animationIn: false,
    animationOut: false,
  },
  actions: {
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATE_MESSAGE', {
        message,
        status,
        timestamp,
      });
      context.commit('ANIMATION_IN', true);
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessage(context) {
      context.commit('REMOVE_MESSAGE');
    },
    removeMessageWithTiming(context, timestamp) {
      const msg = [...context.state.messages];
      setTimeout(() => {
        context.commit('ANIMATION_IN', false);
        context.commit('ANIMATION_OUT', true);
      }, 3000);
      setTimeout(() => {
        msg.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVE_MESSAGE', i);
            context.commit('ANIMATION_OUT', false);
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
      state.messages.splice(0, 1);
    },
    ANIMATION_IN(state, status) {
      state.animationIn = status;
    },
    ANIMATION_OUT(state, status) {
      state.animationOut = status;
    },
  },
  getters: {
    messages: state => state.messages,
    animationIn: state => state.animationIn,
    animationOut: state => state.animationOut,
  },
};
