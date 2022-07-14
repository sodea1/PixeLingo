import React from 'react';
import { getImage } from '../util/photo_api_util';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ""
        }
    }

    componentDidMount() {
        getImage().then((res) => {
            this.setState({ imageUrl: res});
        });
    }

    render() {
        return (
            <div>
                {this.state.imageUrl && <img src={this.state.imageUrl + "&w=600"} />}
            </div>
        )
    }
}

export default Test;