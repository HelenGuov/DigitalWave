import React from 'react';
import ReactDOM from 'react-dom';

import VideoListItem from './video_list_item.jsx';

class VideoList extends React.Component {
    
    constructor(props) {
        super(props);
        
    }

    getVideoItems() {
        if(this.props.videos.length == 0) return "Loading..."; 
    
        let htmlVideoItems = this.props.videos.map(
            (aVideo) => {         
                return <VideoListItem key={aVideo.etag} video={aVideo} />
            }); 
        return htmlVideoItems
    }
    render() {
        return (
            <ul>{this.getVideoItems()}</ul>
        );

    }
}

    export default VideoList;

