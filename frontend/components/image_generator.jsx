import React, { useState, useEffect } from 'react';
import { getImage } from '../util/image_api_util';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [topic, setTopic] = useState("");
    const [markers, addMarker] = useState([]);
    const entries = Array.from(Array(markers.length).keys());

    const fetchImage = (e) => {
        e.preventDefault();
        getImage(topic).then((res) => {
            setImageUrl(res);
        });
    };

    const addMarkers = (e) => {
        e.preventDefault();

        const trueX = e.pageX - window.pageXOffset;
        const trueY = e.pageY - window.pageYOffset;
        const parent = e.target.offsetParent;

        const left = Math.floor(((trueX - parent.offsetLeft - 8) / e.target.naturalWidth) * 100);
        const top = Math.floor(((trueY - parent.offsetTop - 8) / e.target.naturalHeight) * 100);

        const newMarker = { top: top, left: left, src: imageUrl, hint: "" };
        debugger
        addMarker([ ...markers, newMarker ]);
    };

    return (
        <div className='image-gen-container'>
            <div className='image-flex-wrapper'>
                <form onSubmit={fetchImage}>
                    <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
                    <input className='get-photo' type="submit" value="Get a Photo" />
                </form>

                {imageUrl && 
                <div className='image-container'>
                    <img className='image' src={imageUrl + "&h=700"} onClick={addMarkers} />
                    {markers && markers.map((marker, i) => {
                        return <div className='marker' style={{ top: marker.top + "%", left: marker.left + "%" }} key={i}>{i + 1}</div>
                    })}
                </div>
                }
            </div>

            <div className='translation-wrapper'>
                <div className='pick-langs'>
                    <h1>From: English</h1>
                    <h1>To: French</h1>
                </div>

                <form className='translation-form'>
                    {entries.map(key => {
                        return (
                            <div className='translation-entry' key={key}>
                                <span>{key + 1}</span>
                                <input className='from-lang' type="text" />
                                <input className='to-lang' type="text" />
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
};

export default ImageGenerator;


///////////////////////////////////////////////////

// class ImageGenerator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imageUrl: ""
//         }
//     }

//     componentDidMount() {
//         getImage().then((res) => {
//             this.setState({ imageUrl: res});
//         });
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.imageUrl && <img src={this.state.imageUrl + "&w=600"} />}
//             </div>
//         )
//     }
// }

