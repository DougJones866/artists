import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      artists: [
        {
          id: 'a1',
          firstName: 'Maxi',
          lastName: 'Rock',
          areas: ['realistic', 'mecha'],
          description:
            "Text about artist goes here.",
          hourlyRate: 30
        },
        {
          id: 'a2',
          firstName: 'Justo',
          lastName: 'Jeans',
          areas: ['anime', 'chibi', 'mecha', 'realistic'],
          description:
            'Text about artist goes here.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
