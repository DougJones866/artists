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
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};