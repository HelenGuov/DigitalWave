import React from 'react';
import ReactDOM from 'react-dom';

import VideoListItem from './video_list_item.jsx';

class VideoList extends React.Component {

    constructor(props) {
        super(props);

    }

    getVideoItems() {
        if (this.props.videos.length == 0) return "Loading...";

        let htmlVideoItems = this.props.videos.map(
            (aVideo) => {
                //assign onVideoClick as a function for the event handler video click 
                return <VideoListItem
                    onVideoClick={(vid) => { this.handleVideoClick(vid) }}
                    key={aVideo.etag}
                    video={aVideo} />
            });
        return htmlVideoItems
    }

    handleVideoClick(clickedVideo) {
        console.log('clicked video ', clickedVideo.snippet.title);
    }

    render() {
        return (
            <ul>{this.getVideoItems()}</ul>
        );

    }
}

export default VideoList;

