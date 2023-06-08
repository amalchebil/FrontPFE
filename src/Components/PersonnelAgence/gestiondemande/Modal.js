import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isModalOpen, closeModal, children }) => {
    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Add Garant Modal"
        >
            {children}
        </ReactModal>
    );
};




export default Modal;