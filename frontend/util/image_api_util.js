import axios from "axios";

export const getImage = (topic) => {
    return axios({
            method: "GET",
            url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=squarish`,
            params: {
                query: topic,
                count: count
            }
        }).then(res => res.data.urls.raw);
};

export const getCollection = (topic, count = 30) => {
    return axios({
        method: "GET",
        url: `https://api.unsplash.com/photos/random/?client_id=${imageKey}&orientation=squarish`,
        params: {
            query: topic,
            count: count
        }
    }).then(res => res);
};