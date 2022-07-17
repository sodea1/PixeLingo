import axios from "axios";

export const translate = (to, text) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append('to', to)
    encodedParams.append('text', text)

    return axios.request({
        method: 'POST',
        url: 'https://translo.p.rapidapi.com/api/v3/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': `${translationKey}`,
            'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        },
        data: encodedParams
    }).then(res => res.data.translated_text)
};