import React from "react";

const Modal = (props) => {
  return(
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.message} a stream {props.title} ?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.description}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                {props.btncancel}
              </button>
              <button onClick= {props.onDelete} type="button" className="btn btn-primary"
              data-dismiss="modal">
                {props.btnaction}
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;