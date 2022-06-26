import React from "react";
import "../css/modal.css";

export default function Modal({ closeModal, modalRef, data, setData }) {

    const close = () => {
        closeModal(false);
        setData('')
    }

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <div className="title">
            <h2>Header</h2>
            <button
              className="btn"
              onClick={() => {
                close(false);
              }}
            >
              <span className="closeBtn">X</span>
            </button>
          </div>
        </div>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
        <div className="modal-footer">
          <h3>Footer</h3>
        </div>
      </div>
    </div>
  );
}
