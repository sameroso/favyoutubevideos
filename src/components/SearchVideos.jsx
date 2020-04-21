/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import YoutubeList from './YoutubeList';
import VideoPlayer from './VideoPlayer'


class SearchVideos extends React.Component{
    render() {
        return(
            <React.Fragment>
                <SearchBar/>
                <VideoPlayer
                videoId={this.props.videoId} 
                />
                <YoutubeList/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {videoId : state.idSelectedVideo}
}

export default connect(mapStateToProps)(SearchVideos);