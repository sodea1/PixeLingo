import axios from "axios";

export const getImage = (topic) => {
    return axios({
            method: "GET",
            url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=squarish`,
            params: {
                query: topic
            }
        }).then(res => res.data.urls.raw);
};