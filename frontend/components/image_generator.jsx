import React, { useState, useEffect } from 'react';
import { getImage } from '../util/photo_api_util';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        getImage().then((res) => {
            setImageUrl(res);
        });
    }, []);

    return (
        <div>
            {imageUrl && <img src={imageUrl + "&w=600"} />}
        </div>
    );
};

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

export default ImageGenerator;