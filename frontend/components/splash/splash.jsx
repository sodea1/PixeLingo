import React, { useEffect, useState } from 'react';
import { getImage, getCollection } from '../../util/image_api_util';
import { translate } from '../../util/translation_api_util';
import * as Helpers from './splash_helpers';

const Splash = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const topic = Helpers.getTopic();
        getCollection(topic)
            .then((res) => res.data)
            .then((res) => {
                const urls = res.map(obj => obj.urls.raw);
                setUrls(urls)
                setIsLoaded(true)
            }, (error) =>{
                setError(error)
            });
    }, []);

    const slideshow = (urls) => {
        let idx = 0;
        setInterval(() => {
            const image = document.getElementById("splash-image");
            if (idx === urls.length - 1) idx = 0;
            image.src = urls[idx];
            idx++;
        }, 5000)
    }

    // const animate = () => {
    //     const allImages = document.getElementsByClassName("test1");
    //     for (let image of allImages) {
    //         setInterval(() => {
    //             let height = image.offsetTop;
    //             const maxHeight = window.innerHeight;
    //             let newHeight = height + 1;
    //             if (newHeight === maxHeight) {
    //                 image.style.top = String(-(image.naturalHeight)) + "px";
    //             } else {
    //                 image.style.top = String(newHeight) + "px";
    //             }
    //         }, 20)
    //     };
    // };
    
    return (
        <div className='splash-container'>
           
            <div className='title'>PixeLingo</div>
            {/* <div className='waterfall-wrapper'> */}
            <img id='splash-image' src="" width="400px" />
            {urls.length > 0 && slideshow(urls)}
             
        </div>
    )
};

export default Splash;