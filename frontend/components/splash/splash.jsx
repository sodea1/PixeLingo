import React, { useEffect, useState } from 'react';
import { getImage, getCollection } from '../../util/image_api_util';
import { translate } from '../../util/translation_api_util';
import * as Helpers from './splash_helpers';

const Splash = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const topic = Helpers.getTopic();
    //     getCollection(topic)
    //         .then((res) => res.data)
    //         .then((res) => {
    //             const urls = res.map(obj => obj.urls.small)
    //             setImages(urls)
    //             setIsLoaded(true)
    //         }, (error) =>{
    //             setError(error)
    //         });
    // }, []);

    const animate = () => {
        setInterval(() => {
            const image = document.getElementById("test1");
            let height = image.offsetTop;
            const maxHeight = window.innerHeight;
            // let w = image.offsetLeft;
            // const maxWidth = window.innerWidth;
            let newHeight = height + 2;
            image.style.top = String(newHeight) + "px";
        }, 10)
    }

    useEffect(() => {
        animate()
    }, [isLoaded])
    
    return (
        <div className='splash-container'>
            <img id='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
            <img id='test2' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
            <div className='title'>PixeLingo</div>
                {/* {isLoaded && images.map((url, i) => {
                    return (
                        <img src="" key={i} />
                    )
                })} */}
        </div>
    )
};

export default Splash;