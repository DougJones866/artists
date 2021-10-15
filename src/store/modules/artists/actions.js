import artists from ".";

export default {
  async registerArtist(context, data) {
    const userId = context.rootGetters.userId;
    const artistData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(`https://find-artist-d3495-default-rtdb.firebaseio.com/artists/.json`, {
      method: 'PUT',
      body: JSON.stringify(artistData)
    });

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }



    context.commit('registerArtist', {
      ...artistData,
      id: userId
    });
  },
  async loadArtists(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(`https://find-artist-d3495-default-rtdb.firebaseio.com/artists/.json`);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const artists = [];

    for (const key in responseData) {
      const artist = {
      id: key,
      firstName: responseData[key].firstName,
      lastName: responseData[key].lastName,
      description: responseData[key].description,
      hourlyRate: responseData[key].hourlyRate,
      areas: responseData[key].areas
      };
      artists.push(artist);
    }

    context.commit('setArtists', artists);
    context.commit('setFetchTimestamp');
  }
};