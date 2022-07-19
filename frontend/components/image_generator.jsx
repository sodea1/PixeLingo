import React, { useState } from 'react';
import { getImage } from '../util/image_api_util';
import { translate } from '../util/translation_api_util';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [topic, setTopic] = useState("");
    const [markers, setMarkers] = useState([]);
    const entries = Array.from(Array(markers.length).keys());

    const fetchImage = (e) => {
        e.preventDefault();
        getImage(topic).then((res) => {
            setImageUrl(res);
        });
    };

    const setMarkerState = (e) => {
        e.preventDefault();

        const trueX = e.pageX - window.pageXOffset;
        const trueY = e.pageY - window.pageYOffset;
        const parent = e.target.offsetParent;

        const left = Math.floor(((trueX - parent.offsetLeft - 8) / e.target.naturalWidth) * 100);
        const top = Math.floor(((trueY - parent.offsetTop - 8) / e.target.naturalHeight) * 100);

        const newMarker = {
            top: top, 
            left: left, 
            src: imageUrl, 
            fromText: "",
            toText: "",
            hint: "",
        };

        setMarkers([ ...markers, newMarker ]);
    };

    const updateFromText = (e) => {
        e.preventDefault();

        const text = e.target.value;
        const newState = markers.map((marker, i) => {
            if (i === parseInt(e.target.dataset.idx)) {
                return {...marker, fromText: text};
            }

            return marker;
        });

        setMarkers(newState);
    };

    const updateToText = (e) => {
        e.preventDefault();
        const text = e.target.value;
        const newState = markers.map((marker, i) => {
            if (i === parseInt(e.target.dataset.idx)) {
                return { ...marker, toText: text };
            }
            
            return marker;
        });

        setMarkers(newState);
    };

    // requests translation api and returns string of text values separated by commas
    const fetchTranslation = async () => {
        let words = [];
        const allEntries = document.getElementsByClassName("fromText");
        // BE SURE TO CHANGE TARGET LANGUAGE 
        const targetLang = "fr";
        const size = allEntries.length;

        for (let i = 0; i < size; i++) {
            words.push(allEntries[i].value)
        };

        const reqString = words.join(", ");
        const resString = await translate(targetLang, reqString);
        return assignTranslatedText(resString, size);
    };

    // assigns state toText value for each marker
    const assignTranslatedText = (str, size) => {
        const wordsArr = str.split(", ");
        const newState = markers.map((marker, i) => {
            if (i > size) throw "number of entries exceeded";
            return {...marker, toText: wordsArr[i]};
        });

        setMarkers(newState);
    };

    const hoverDetails = (e) => {
        e.preventDefault();
        console.log(e);
        const marker = markers[e.target.dataset.idx];
        const from = marker.fromText;
        const to = marker.toText;
        const top = marker.top - 4;
        const left = marker.left - 2;
        const popup = document.getElementsByClassName("marker-popup")[0];

        document.getElementById("from").innerHTML = from;
        document.getElementById("to").innerHTML = to;
        popup.classList.remove('hidden');
        popup.style.top = top + "%";
        popup.style.left = left + "%";
    };

    const hideDetails = (e) => {
        e.preventDefault();
        const popup = document.getElementsByClassName("marker-popup")[0];
        popup.classList.add('hidden');
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
                    <img className='image' src={imageUrl + "&h=600&w=600"} onClick={setMarkerState} />
                    {markers && markers.map((marker, i) => {
                        return (
                            <div onMouseOver={hoverDetails} 
                                onMouseOut={hideDetails}
                                className='marker' 
                                style={{ top: marker.top + "%", left: marker.left + "%" }} 
                                key={i}
                                data-idx={i}>
                                {i + 1}
                            </div>
                        )
                    })}
                    <div className='marker-popup hidden'>
                        <span id='to'></span>
                        <span id='from'></span>
                    </div>
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
                                <input onChange={updateFromText}
                                    className='fromText' 
                                    type="text" 
                                    value={markers[key].fromText} data-idx={key} />
                                <input onChange={updateToText} 
                                    className='toText' 
                                    type="text" 
                                    value={markers[key].toText} data-idx={key} />
                            </div>
                        );
                    })}
                </form>
                <button onClick={fetchTranslation}>Translate</button>
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

