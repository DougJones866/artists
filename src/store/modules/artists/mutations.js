export default {
  registerArtist(state, payload) {
    state.artists.push(payload);
  },
  setArtists(state, payload) {
    state.artists = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};