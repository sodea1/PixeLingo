const axios = require("axios").default;

export const getImage = () => axios({
    method: "GET",
    url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=landscape`,
}).then(res => res.data.urls.raw);