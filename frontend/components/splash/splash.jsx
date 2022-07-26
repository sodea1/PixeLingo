import React, { useEffect, useState } from 'react';
import { getImage, getCollection } from '../../util/image_api_util';
import { translate } from '../../util/translation_api_util';
import * as Helpers from './splash_helpers';

const Splash = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const topic = Helpers.getTopic();
        getCollection(topic)
            .then((res) => res.data)
            .then((res) => {
                setImages(res)
                setIsLoaded(true)
            }, (error) =>{
                setError(error)
            });
    }, []);
    
    return (
        <div className='title'>
            PixeLingo
            <div>
                {images.map((obj, i) => {
                    const url = obj.urls.small
                    return (
                        <img src={url} key={i} />
                    )
                })}
            </div>
        </div>
    )
};

export default Splash;