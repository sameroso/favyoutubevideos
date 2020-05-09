/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import youTube from "../api/youtube";
import { selectID } from "../actions";
import { connect } from "react-redux";
import VideoDelete from "./VideoDelete";
import { deleteVideo } from "../actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SingleElement extends React.Component {
  state = { videoInfo: {} };
  componentDidMount() {
    youTube
      .get(`/videos`, {
        params: {
          key: "AIzaSyA821gpMB-DbTr_v2CUS4X4HPucT-9HLcY",
          part: "snippet",
          id: this.props.videoId,
        },
      })
      .then((response) => this.setState({ videoInfo: response.data.items }));
  }
  deleteVideo = (ID) => {
    this.props
      .deleteVideo(ID)
      .then(() => {
        toast.success('Vídeo Deletado com sucesso!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
      })
      .catch(() => {
        toast.error('O video não pode ser deletado, por favor tente mais tarde!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
      });
  };

  selectId(id) {
    this.props.selectID(id);
  }
  renderList() {
    const current = this.state.videoInfo[0];
    return (
      <React.Fragment>
        <div className="py-2">
          <div className="py-3 row custom-border">
            <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex pb-3">
              <img
                className="mx-auto"
                src={current.snippet.thumbnails.medium.url}
                alt={current.id}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-8 mx-auto my-auto">
              <div className="row d-flex">
                <h5 className="text-center mx-auto">{current.snippet.title}</h5>
              </div>
              <div className="row d-flex">
                <div className="mx-auto">
                  <button
                    onClick={() => this.selectId(current.id)}
                    type="button"
                    className="btn btn-danger mx-3"
                  >
                    Select
                  </button>
                  <Link to={`/videoDetail/${current.id}`}>
                    <button type="button" className="btn btn-danger mx-3">
                      Detail{" "}
                    </button>
                  </Link>
                  <VideoDelete
                    onDelete={() =>
                      this.deleteVideo(current.id + this.props.userId)
                    }
                    ID={current.id + this.props.userId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  render() {
    if (!this.state.videoInfo[0]) {
      return null;
    } else {
      return <div>{this.renderList()}</div>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.authState.userId,
  };
};

export default connect(mapStateToProps, { selectID, deleteVideo })(
  SingleElement
);
