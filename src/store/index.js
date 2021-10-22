import { createStore } from 'vuex';

import artistsModule from './modules/artists/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    artists: artistsModule,
    requests: requestsModule,
    auth: authModule,
  },
  
});

export default store;