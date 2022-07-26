import React, { useEffect, useState } from 'react';
import { getImage, getCollection } from '../../util/image_api_util';
import { translate } from '../../util/translation_api_util';
import * as Helpers from './splash_helpers';

const Splash = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(false)

    useEffect(() => {
        const topic = Helpers.getTopic();
        getCollection(topic)
            .then((res) => {
                debugger
                res.data
            })
            .then((res) => {
                const urls = res.map(obj => obj.urls.thumb)
                setImages(urls)
                setIsLoaded(true)
            }, (error) =>{
                setError(error)
            });
    }, []);

    useEffect(() => {
        setImage(true)
    }, [])

    const animate = () => {
        const allImages = document.getElementsByClassName("test1");
        for (let image of allImages) {
            setInterval(() => {
                let height = image.offsetTop;
                const maxHeight = window.innerHeight;
                let newHeight = height + 1;
                if (newHeight === maxHeight) {
                    image.style.top = String(-(image.naturalHeight)) + "px";
                } else {
                    image.style.top = String(newHeight) + "px";
                }
            }, 20)
        };
    };

    const placeImages = (num) => {
        const maxWidth = window.innerWidth;
        const numPics = Math.floor(maxWidth / 210);
        const startX = 4;

        let xPos;
        if (num === 0) {

        }
    };
    
    return (
        <div className='splash-container'>
           
            <div className='title'>PixeLingo</div>
            {/* <div className='waterfall-wrapper'> */}
            <div className=''>
                {isLoaded && images.map((url, i) => {
                    return <img className='test1' id={"pic" + i} src={url} key={i} />
                    // return startCoords(num);
                })}
            </div>
             
        </div>
    )
};

export default Splash;