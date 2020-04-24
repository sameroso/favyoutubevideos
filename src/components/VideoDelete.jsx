import React from "react";
import Modal from "./modal";
import {deleteVideo} from "../actions"
import {connect} from 'react-redux';
import history from '../history';



class VideoDelete extends React.Component {
    deleteClick = (deleteVideo,id) => {
      deleteVideo(id)
      .then(
        ()=>{
          this.props.videoDelete()
          
        }
      )
      .then(() =>{alert("Video Deletado com Sucesso")})
      .catch(() => alert("Não Foi Possível apagar o vídeo, por favor tente mais tarde"))
    }
  render() {
    console.log(this.props)
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-outline-success"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Delete
          </button>
          <Modal 
          title= "Deseja deletar?"
          onClick = {()=>this.deleteClick(this.props.deleteVideo,(this.props.videoId+this.props.userId))}
          message="quer deletar mesmo cuzao" 
          btncancel="Cancelar" 
          btnaction="Delete"
          description="Deseja realmente deletar o vídeo?"
          />
        </React.Fragment>
      );

  }
}
const mapStateToProps = (state) => {
    return {
        userId: state.authState.userId,
        reqStatus: state.reqStatus
    };
}
export default connect(mapStateToProps, {deleteVideo})(VideoDelete);
