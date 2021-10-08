export default {
  registerArtist(context, data) {
    const artistData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerArtist', artistData);
  }
};