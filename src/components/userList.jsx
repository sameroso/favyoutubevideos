/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {selectID} from '../actions';
import {fetchVideoList} from '../actions';
import SingleElement from './SingleElement';
import VideoPlayer from './VideoPlayer';
import NeedLogin from './NeedLogin';
import NoVideos from './NoVideos';

function userList ({selectID, fetchVideoList,userList,userId,idSelected}){
    
    const renderList = () => {
        return userList.map(
            (video) => {
                return (
                    <SingleElement 
                        key={(video.videoId+userId)}
                        videoId={video.videoId}
                    />
                );
            }
        );
    }
    useEffect(()=>{
        fetchVideoList()
        selectID("");
    },[]) 

    if(!userId){
        return<div><NeedLogin/></div>
    }else if(userList.length === 0){
        return(
            <div><NoVideos/></div>
        );
    }else{
        return(
            <React.Fragment>
                <VideoPlayer videoId={idSelected}/>
                <div className="container">{renderList()}</div>
            </React.Fragment>
        );
    }
    

}

const mapStateToProps = state => {
    return {
        userList: Object.values(state.userList).filter((el) => el.userId === state.authState.userId), 
        userId:state.authState.userId,
        idSelected: state.idSelectedVideo
    }
}

export default connect(mapStateToProps, {selectID, fetchVideoList})(userList)