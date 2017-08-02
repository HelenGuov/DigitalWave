import React from 'react';
import ReactDOM from 'react-dom';
import {Media} from 'react-bootstrap'; 
import './style.css'; 

import style from './style.css';

export default class VideoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            thumbnail: this.props.video.snippet.thumbnails.default,
            videoDetails: this.props.video.snippet,
        }

    }

    render() {

        //onClick={() => { this.props.onVideoClick(this.props.video) }
        return (
              <Media.ListItem className="video-list-item" onClick={() => { this.props.onVideoClick(this.props.video) }}>    
                <Media.Left>
                    <img src={this.state.thumbnail.url} height={this.state.thumbnail.Height}
                        width={this.state.thumbnail.Width} />
                </Media.Left>
                <Media.Body>{this.state.videoDetails.title}</Media.Body> 
            </Media.ListItem>

             
        );
    }


}

