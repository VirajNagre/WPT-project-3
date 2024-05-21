import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ show, handleClose, handleConfirm, content })  => {
    console.log("ConfirmationModal start");
    console.log(content);

    console.log("ConfirmationModal end");
    return (
        <Modal show={show} onHide={handleClose} className='text-secondary'>
            <Modal.Header >
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
