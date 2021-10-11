export default {
    contactArtist(context, payload) {
        const newRequest = {
            id: new Date().toDateString(),
            artistId: payload.artistId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit('addRequest', newRequest);
    }
};