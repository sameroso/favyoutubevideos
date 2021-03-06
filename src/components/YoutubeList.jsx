import React from "react";
import { connect } from "react-redux";
import { selectID } from "../actions";
import { Link } from "react-router-dom";
import "./YoutubeList.css";
import { addVideo } from "../actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class YoutubeList extends React.Component {
  addVideo = (index) => {
    this.props
      .addVideo(
        this.props.userId,
        this.props.videosFromYoutube.items[index].id.videoId
      )
      .then(() =>
        toast.success("Vídeo adicionado com sucesso!", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      )
      .catch(() =>
        toast.error(
          "O video não pode ser adicionado, por favor tente mais tarde!",
          {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        )
      );
  };
  renderbutton(index) {
    if (!this.props.isSignedIn) {
      return null;
    } else {
      return (
        <button
          onClick={() => {
            this.addVideo(index);
          }}
          type="button"
          className="btn btn-outline-primary mx-2 my-2"
        >
          Save to My List
        </button>
      );
    }
  }
  componentDidMount() {
    this.props.selectID("");
  }
  selectId(id) {
    this.props.selectID(id);
  }
  renderList = () => {
    return this.props.videosFromYoutube.items.map((video, index) => {
      return (
        <React.Fragment key={video.id.videoId}>
          <div className="py-2">
            <div className="py-3 row custom-border">
              <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex pb-3">
                <img
                  className="mx-auto"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.id.videoId}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-8 mx-auto my-auto">
                <div className="row d-flex">
                  <h5 className="text-center mx-auto">{video.snippet.title}</h5>
                </div>
                <div className="row d-flex">
                  <div className="mx-auto">
                    {this.renderbutton(index)}
                    <button
                      onClick={() => this.selectId(video.id.videoId)}
                      type="button"
                      className="btn btn-danger mx-3"
                    >
                      Select
                    </button>
                    <Link to={`/videoDetail/${video.id.videoId}`}>
                      <button type="button" className="btn btn-danger mx-3">
                        Detail{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };
  render() {
    if (!this.props.videosFromYoutube) {
      return null;
    } else {
      return <div className="container">{this.renderList()}</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    videosFromYoutube: state.YoutubeList.data,
    isSignedIn: state.authState.isSignedIn,
    userId: state.authState.userId,
  };
};

export default connect(mapStateToProps, { selectID, addVideo })(YoutubeList);
