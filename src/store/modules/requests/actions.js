export default {
    async contactArtist(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://find-artist-d3495-default-rtdb.firebaseio.com/requests/${payload.artistId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.artistId = payload.artistId;

        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const artistId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://find-artist-d3495-default-rtdb.firebaseio.com/requests/${artistId}.json?auth=` + token);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }
        
        const requests = [];
        
        for (const key in responseData) {
            const request = {
                id: key,
                artistId: artistId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request);
        }
        
        context.commit('setRequests', requests);
    }
};