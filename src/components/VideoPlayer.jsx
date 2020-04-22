/* eslint-disable react/prop-types */
import React from "react";

class VideoPlayer extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        if(this.props.videoId.length === 0){
            return null
        }else{
            return(
                <div className="d-flex my-3 mx-auto embed-responsive embed-responsive-16by9">
                    <iframe
                        className="mx-auto embed-responsive-item"
                        src={`https://www.youtube.com/embed/${this.props.videoId}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
    }
}

export default VideoPlayer;
