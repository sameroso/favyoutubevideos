/* eslint-disable react/prop-types */
import React from "react";

class VideoPlayer extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        if(this.props.videoId.length === 0){
            return null
        }else{
            return(
                <div className="d-flex py-3">
                    <iframe
                        className="mx-auto"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${this.props.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
    }
}

export default VideoPlayer;
