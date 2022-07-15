const axios = require("axios").default;

export const getImage = (topic) => {
    return axios({
            method: "GET",
            url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=portrait`,
            params: {
                query: topic
            }
            // add ability to query by search input
        }).then(res => res.data.urls.raw);
};