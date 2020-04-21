import React from 'react';
import {connect} from 'react-redux';
import {selectID} from '../actions'

import './YoutubeList.css'

class YoutubeList extends React.Component{
    selectId(id) {
        this.props.selectID(id);
    }
    renderList = () => {
        return this.props.videosFromYoutube.items.map(
            (video) => {
                return (
                    <React.Fragment key={video.id.videoId}>
                        <div className="py-2">
                            <div className="py-3 row custom-border">
                                <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex pb-3">
                                    <img className="mx-auto" src={video.snippet.thumbnails.medium.url}/>
                                </div>
                                <div className="col-12 col-md-6 col-lg-8 mx-auto my-auto">
                                    <div className="row d-flex">
                                        <h5 className="text-center mx-auto">{video.snippet.title}</h5>
                                    </div>
                                    <div className="row d-flex">
                                        <div className="mx-auto">
                                            <button onClick={()=>this.selectId(video.id.videoId)} type="button" class="btn btn-danger mx-3">Select</button>
                                            <button type="button" class="btn btn-danger mx-3">Detail </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>

                );
            }
        );
    }
    render(){
        if(!this.props.videosFromYoutube){
            return(
                null
            );
        }else{
            return(
                <div className="container">{this.renderList()}</div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {videosFromYoutube: state.YoutubeList.data}
}

export default connect(mapStateToProps, {selectID})(YoutubeList)