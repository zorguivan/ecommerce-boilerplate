import React, {useState, useContext, useEffect} from 'react'
import { Modal, Form, Button } from 'react-bootstrap';


export const Product = (prop) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow}>Add New Zone</Button>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    Modal shit
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}variant="secondary">Cancel</Button>
                    <Button variant="success" onClick={saveZone}>Add Zone</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Product;