const axios = require("axios").default;

export const getImage = () => axios({
    method: "GET",
    url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=landscape`,
    // orientation: "landscape",
    // auto
    // w: 700,
    // h: 400,
}).then(res => res.data.urls.raw);