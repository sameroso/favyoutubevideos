/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {addVideo} from '../actions';
import {Link} from 'react-router-dom';

import {youTubeSearchSingleVideo} from '../actions'
import VideoPlayer from './VideoPlayer';


class VideoDetail extends React.Component{
    componentDidMount() {
        this.props.youTubeSearchSingleVideo(this.props.match.params.id);
    }
    renderbutton() {
        console.log(this.props)
        if(!this.props.isSignedIn){
            return null
        }else{
           return (
            <button onClick={this.addVideo} type="button" className="btn btn-outline-primary mx-2 my-2">Save to My List</button>
           );
        }
    }
    addVideo = () => {
        this.props.addVideo(this.props.userId,this.props.video.items[0].id)
    }
    render() {
        if(!this.props.video){

            return <div>nothing Selected</div>
        }else if(this.props.video.items.length === 0){

            return<div>nothing selected</div>
        }else{
            const{id, snippet} = this.props.video.items[0];
            return (
                <React.Fragment>
                    <div>
                        <div className="container">
                            <div className="row">
                                <VideoPlayer
                                className="mx-auto"
                                videoId = {id}
                                />
                            </div>
                            <div className="row">
                                <h3 className="text-center mx-auto">{snippet.localized.title}</h3>
                            </div>
                            <div className="row">
                                <div className="mx-auto">
                                    {this.renderbutton()}
                                    <Link to="/"><button type="button" className="btn btn-outline-secondary mx-2 my-2">Search More Videos</button></Link>
                                    <Link to="/mylist"><button type="button" className="btn btn-outline-success mx-2 my-2">go to my List</button></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Descrição
                                            </button>
                                        </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>{snippet.localized.description}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        video: state.detailedVideo.data,
        userId: state.authState.userId,
        isSignedIn:state.authState.isSignedIn
    }
}
export default connect(mapStateToProps, {youTubeSearchSingleVideo, addVideo})(VideoDetail);