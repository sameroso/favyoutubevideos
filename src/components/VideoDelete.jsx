import React from "react";
import Modal from "./modal";
import {deleteVideo} from "../actions"
import {connect} from 'react-redux';
import history from '../history';



class StreamDelete extends React.Component {
    deleteClick = (deleteVideo,id) => {
      deleteVideo(id)
      .then(
        this.props.videoDelete()
      )
      .catch(console.log("erro"))
    }
  render() {
    console.log(this.state)
      return (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Delete
          </button>
          <Modal 
          title= "Deseja deletar?"
          onClick = {() => this.deleteClick(this.props.deleteVideo,(this.props.videoId+this.props.userId))}
          message="quer deletar mesmo cuzao" 
          btncancel="Cancelar" 
          btnaction="Delete"
          description="Deseja realmente deletar o vídeo?"
          />
        </div>
      );

  }
}
const mapStateToProps = (state) => {
    return {
        userId: state.authState.userId,
    };
}
export default connect(mapStateToProps, {deleteVideo})(StreamDelete);
