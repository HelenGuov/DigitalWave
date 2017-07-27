import React from 'react';
import ReactDOM from 'react-dom';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        if (!this.props.selectedVideo) return null; 
        const src = 'https://www.youtube.com/embed/'; 
        const videoSrc = src + this.props.selectedVideo.id.videoId; 
        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src= {videoSrc}
                    frameborder="0"></iframe>
            </div>
        )
    }
}