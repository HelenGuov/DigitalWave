import React from 'react';
import ReactDOM from 'react-dom';
import {Col} from 'react-bootstrap';

import style from './style.css';
import YoutubeSearch from 'youtube-api-search';
import VideoList from '../videoList/video_list.jsx';
import VideoPlayer from '../videoPlayer/video_player.jsx';

export default class App extends React.Component {

    constructor() {
        super();
        this.fetchData();
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }

    fetchData() {
        const API_KEY = "AIzaSyD_FiiLgOIfAcwIaPbLZ3Svhxr-4_tKuuI";
        const SEARCH_TERM = "react";
        YoutubeSearch({ key: API_KEY, term: SEARCH_TERM }, (videos) => {
            const newVideos = videos.map(
                (aVideo) => { return this.assignHandleVideoClick(aVideo); }
            );
            this.setState({ videos: newVideos });
            this.setState({ selectedVideo: newVideos[0] })
        });
    }

    assignHandleVideoClick(aVideo) {
        const newVideo = Object.assign({}, aVideo);
        newVideo.handleVideoClick = (selectVideo) => this.handleVideoClick(selectVideo);
        return newVideo;
    }

    handleVideoClick(selectedVideo) {
        this.setState({ selectedVideo });
    }
    render() {
        if (this.state.videos.length == 0) return <div>loading now..</div>;

        return (
           
            <div>
            <Col md={6}> <VideoPlayer selectedVideo={this.state.selectedVideo} /> </Col>
            <Col md={6} className={style.videoList}> <VideoList videos={this.state.videos} /></Col>
            </div>
        );
    }
}