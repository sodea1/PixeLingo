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

    useEffect(() => {
        const image = document.getElementById("test");
        // debugger
    }, [])
    
    return (
        <div className='splash-container'>
            <div className='title'>PixeLingo</div>
                {/* {isLoaded && images.map((url, i) => {
                    return (
                        <img src="" key={i} />
                    )
                })} */}
            <div className='waterfall'>
                <img id='test' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max' />
                <img id='test' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max' />
            </div>
        </div>
    )
};

export default Splash;