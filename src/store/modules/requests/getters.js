export default {
    requests(state, _, _2, rootGetters) {
        const artistId = rootGetters.userId;
        return state.requests.filter(req => req.artistId === artistId);
    },
    hasRequests(state, getters) {
        return getters.requests && getters.requests.length > 0;
    }


};