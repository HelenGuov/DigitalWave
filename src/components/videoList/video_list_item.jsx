import React from 'react';
import ReactDOM from 'react-dom';

export default class VideoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            thumbnail : this.props.video.snippet.thumbnails.default,
            videoDetails : this.props.video.snippet,
        }
    }

    render() {
        return (
            <li onClick={()=>{this.props.onVideoClick(this.props.video)}}>
                <div><img src={this.state.thumbnail.url} height={this.state.thumbnail.Height}
                    width={this.state.thumbnail.Width} /></div>
                <div>{this.state.videoDetails.title}</div> 
            </li>
        );
    }


}

