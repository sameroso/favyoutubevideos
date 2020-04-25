import React from "react";
import Modal from "./modal";
import {connect} from 'react-redux';


class VideoDelete extends React.Component {
  render() {
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-outline-success"
            data-toggle="modal"
            data-target={`#exampleModal${this.props.ID}`}
          >
            Delete
          </button>
          <Modal
          ID={this.props.ID} 
          title= "Deseja deletar?"
          onDelete={this.props.onDelete}
          message="Deseja realmente deletar o video?" 
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
    };
}
export default connect(mapStateToProps)(VideoDelete);
