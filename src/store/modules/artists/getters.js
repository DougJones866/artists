export default {
  artists(state) {
    return state.artists;
  },
  hasArtists(state) {
    return state.artists && state.artists.length > 0;
  },
  isArtist(_, getters, _2, rootGetters) {
    const artists = getters.artists;
    const userId = rootGetters.userId;
    return artists.some(artist => artist.id === userId);
  }
};