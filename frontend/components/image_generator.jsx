import React, { useState, useEffect } from 'react';
import { getImage } from '../util/image_api_util';
import ImageMarker, { Marker } from 'react-image-marker';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [topic, setTopic] = useState("");
    const [markers, setMarkers] = useState([]);

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

    const renderImgMarkers = (path, markers) => {
        <ImageMarker
            src={path}
            markers={markers}
            // onAddMarker={}
        />
    }

    const addMarkers = (e) => {
        e.preventDefault();
        debugger
        setMarkers([...existing])
    };

    return (
        <div>
            <form onSubmit={fetchImage}>
                <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
                <input type="submit" value="Get a Photo" />
            </form>
            {imageUrl && <img src={imageUrl + "&h=700"} onClick={addMarkers} />}
            
        </div>
    );
};

export default ImageGenerator;


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

