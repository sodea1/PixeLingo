import React from 'react';
import { getImage } from '../util/photo_api_util';

class Test extends React.Component {
    // async getImage() {
    //     let response;
    //     await axios({
    //         method: "GET",
    //         url: `https://api.unsplash.com/photos/random/?client_id=${window.imageKey}`
    //     }).then((res) => {
    //         response = res.urls;
    //     });
    //     debugger
    //     return response;
    // }

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ""
        }
    }

    componentDidMount() {
        debugger
        getImage().then((res) => {
            this.setState({ imageUrl: res});
        });
    }

    render() {
        return (
            <div>
                {this.state.imageUrl && <img src={this.state.imageUrl} />}
            </div>
        )
    }
}

export default Test;