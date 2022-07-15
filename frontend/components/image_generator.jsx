import React, { useState, useEffect } from 'react';
import { getImage } from '../util/image_api_util';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [topic, setTopic] = useState("");

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
    }

    return (
        <div>
            <form onSubmit={fetchImage}>
                <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
                <input type="submit" value="Get a Photo" />
            </form>
            {imageUrl && <img src={imageUrl + "&h=700"} />}
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

