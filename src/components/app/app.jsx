import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

import './style.css';
import YoutubeSearch from 'youtube-api-search';
import VideoList from '../videoList/video_list.jsx';
import VideoPlayer from '../videoPlayer/video_player.jsx';
import SearchBar from '../searchBar/search_bar.jsx';

export default class App extends React.Component {

    constructor() {
        super(); 
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: "learning react", 
        }
        this.fetchData();
    }

    fetchData() {
        const API_KEY = "AIzaSyD_FiiLgOIfAcwIaPbLZ3Svhxr-4_tKuuI";
        console.log('fetch as ', this.state.searchTerm)
        YoutubeSearch({ key: API_KEY, term: this.state.searchTerm }, (videos) => {
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

    handleSearchSubmit(text) {
        console.log('submit ', text); 
        this.setState({ searchTerm : text }, () => this.fetchData()); 
  
    }

    render() {
        if (this.state.videos.length == 0) return <div>loading now..</div>;

        return (
            <div>
                <div className="bottom-separator">
                    <SearchBar onSearchSubmit={term => this.handleSearchSubmit(term)} />
                </div>
                <div>
                    
                    <Col md={6}> <VideoPlayer selectedVideo={this.state.selectedVideo} /> </Col>
                
                 
                    <Col md={4} className="left-separator"> <VideoList videos={this.state.videos} /></Col>
                   
                </div>
            </div>
        );
    }
}