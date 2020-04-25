import React from 'react';
import {connect} from 'react-redux';
import {selectID} from '../actions';
import {fetchVideoList} from '../actions';
import SingleElement from './SingleElement';
import VideoPlayer from './VideoPlayer';
import NeedLogin from './NeedLogin';
import NoVideos from './NoVideos';

class YoutubeList extends React.Component{
    componentDidMount() {
        this.props.fetchVideoList()
        this.props.selectID("");
    }
    
    selectId(id) {
        this.props.selectID(id);
    }
    renderList = () => {
        return this.props.userList.map(
            (video) => {
                return (
                    <SingleElement 
                        key={(video.videoId+this.props.userId)}
                        videoId={video.videoId}
                    />
                );
            }
        );
    }
    render(){
        if(!this.props.userId){
            return<div><NeedLogin/></div>
        }else if(this.props.userList.length === 0){
            return(
                <div><NoVideos/></div>
            );
        }else{
            return(
                <React.Fragment>
                    <VideoPlayer videoId={this.props.idSelected}/>
                    <div className="container">{this.renderList()}</div>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        userList: Object.values(state.userList).filter((el) => el.userId === state.authState.userId), 
        userId:state.authState.userId,
        idSelected: state.idSelectedVideo
    }
}

export default connect(mapStateToProps, {selectID, fetchVideoList})(YoutubeList)