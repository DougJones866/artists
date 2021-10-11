import { createStore } from 'vuex';

import artistsModule from './modules/artists/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    artists: artistsModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'a3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;