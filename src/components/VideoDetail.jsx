/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';

import {youTubeSearchSingleVideo} from '../actions'
import VideoPlayer from './VideoPlayer';

class VideoDetail extends React.Component{
    componentDidMount() {
        this.props.youTubeSearchSingleVideo(this.props.match.params.id);
    }
    render() {
        if(!this.props.video){

            return <div>nothing Selected</div>
        }else if(this.props.video.items.length === 0){

            return<div>nothing selected</div>
        }else{

            return (
                <VideoPlayer
                videoId = {this.props.video.items[0].id}
                />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {video: state.detailedVideo.data}
}
export default connect(mapStateToProps, {youTubeSearchSingleVideo})(VideoDetail);