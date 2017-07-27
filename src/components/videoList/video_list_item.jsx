import React from 'react';
import ReactDOM from 'react-dom';
import {Media} from 'react-bootstrap'; 


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
            <li className={style.listItem} onClick={() => { this.props.onVideoClick(this.props.video) }}>    
                <div className={style.listItemLeft}>
                    <img src={this.state.thumbnail.url} height={this.state.thumbnail.Height}
                        width={this.state.thumbnail.Width} />
                </div>
                <div className={style.listItemRight}>{this.state.videoDetails.title}</div> 
            </li>

             
        );
    }


}

