import Vuex from 'vuex';
import user from './modules/user';

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
  },
});
