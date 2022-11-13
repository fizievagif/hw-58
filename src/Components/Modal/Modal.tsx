import React from 'react';
import Backdrop from "../Backdrop/Backdrop";

const Modal = () => {
  return (
    <>
      <Backdrop/>
      <div className="modal show" style={{display: 'block'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
            </div>
            Modal content
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;