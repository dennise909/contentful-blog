import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  

  return (
    <div className="modal display-block">
      <section className="modal-main">
        {children}
        <button type="button" className="close" onClick={handleClose}></button>
      </section>
    </div>
  );
};

export default Modal