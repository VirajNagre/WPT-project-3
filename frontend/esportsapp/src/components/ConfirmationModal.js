import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ show, handleClose, handleConfirm, content })  => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{content.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {content.deny}
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    {content.accept}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
