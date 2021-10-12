export default {
  registerArtist(state, payload) {
    state.artists.push(payload);
  },
  setArtists(state, payload) {
    state.artists = payload
  }
};