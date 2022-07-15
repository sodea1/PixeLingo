import React, { useState, useEffect } from 'react';
import { getImage } from '../util/image_api_util';
// import ImageMarker, { Marker } from 'react-image-marker';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [topic, setTopic] = useState("");
    const [markers, addMarker] = useState([]);
    // const [lastMarkerIdx, setLastMarkerIdx] = useState(-1);

    // useEffect(() => {
    //     getImage().then((res) => {
    //         setImageUrl(res);
    //     });
    // }, []);

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

        const left = Math.floor(((trueX - parent.offsetLeft - 4) / e.target.naturalWidth) * 100);
        const top = Math.floor(((trueY - parent.offsetTop - 4) / e.target.naturalHeight) * 100);

        const newMarker = { top: top, left: left, src: imageUrl, hint: "" }; 
        addMarker([ ...markers, newMarker ]);
        // setLastMarkerIdx(lastMarkerIdx += 1);
    };

    const assignHint = (e) => {

    };

    return (
        <div>
            <form onSubmit={fetchImage}>
                <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
                <input className='get-photo' type="submit" value="Get a Photo" />
            </form>

            {imageUrl && 
            <div className='image-container'>
                <img className='image' src={imageUrl + "&h=700"} onClick={addMarkers} />
                {markers && markers.map((marker, i) => {
                    return <div onMouseOver={assignHint} className='marker' style={{ top: marker.top + "%", left: marker.left + "%" }} key={i}>{i + 1}</div>
                })}
            </div>
            }

        </div>
    );
};

export default ImageGenerator;

let arr = [{ top: 1, left: 2, src: "hi" }, { top: 8, left: 2, src: "yea" }]

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

