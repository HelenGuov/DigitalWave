import React from 'react';
import ReactDOM from 'react-dom';

import VideoListItem from './video_list_item.jsx';

class VideoList extends React.Component {

    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <ul><VideoListItem /></ul>
        );

    }
}

    export default VideoList;

