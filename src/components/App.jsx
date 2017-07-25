import React from 'react'; 
import ReactDOM from 'react-dom'; 

import YoutubeSearch from 'youtube-api-search'; 
import VideoList from './videoList/video_list.jsx';


export default class App extends React.Component {

    constructor() {
        super();
        this.fetchData();  
        this.state = {
            videos : [], 
        }
    }

    fetchData() {
        const API_KEY = "AIzaSyD_FiiLgOIfAcwIaPbLZ3Svhxr-4_tKuuI";
        const SEARCH_TERM = "react"; 
        YoutubeSearch({key: API_KEY, term: SEARCH_TERM}, (videos) => {
            this.setState({videos}); 
        });  
    } 

    render() {
        if (!this.state.videos) return;
        return (<div> <VideoList videos={this.state.videos}/></div>); 
    }
}