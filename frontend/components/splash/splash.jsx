import React, { useEffect, useState } from 'react';
import { getImage, getCollection } from '../../util/image_api_util';
import { translate } from '../../util/translation_api_util';
import * as Helpers from './splash_helpers';

const Splash = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(false)

    // useEffect(() => {
    //     const topic = Helpers.getTopic();
    //     getCollection(topic)
    //         .then((res) => res.data)
    //         .then((res) => {
    //             const urls = res.map(obj => obj.urls.thumb)
    //             setImages(urls)
    //             setIsLoaded(true)
    //         }, (error) =>{
    //             setError(error)
    //         });
    // }, []);

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
            }, 10)
        };
    };

    useEffect(() => {
        animate()
    }, [image])
    
    return (
        <div className='splash-container'>
           
            <div className='title'>PixeLingo</div>
            <div className='waterfall-wrapper'>
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                <img className='test1' src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max' />
                {/* {isLoaded && images.map((url, i) => {
                    animate(<img className='animate' id={"pic" + i} src={url} key={i} />)
                    return (
                        <img className='animate' id={"pic" + i} src={url} key={i} />
                    )
                })} */}
            </div>
        </div>
    )
};

export default Splash;