import React, {useState, useContext, useEffect} from 'react'
import { Modal, Form, Button, Card } from 'react-bootstrap';


export const Product = (prop) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div onClick={handleShow} className="cardContainer col-8 col-md-3 p-2">
                    <Card>
                        <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>Card Title</Card.Title>
                            <h4 className="successHeader">34.87$</h4>
                        </Card.Body>
                    </Card>
                </div>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                    <Modal.Header>
                        Product Name
                    </Modal.Header>
                <Modal.Body>
                    <div className="modalImg">
                        <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                    </div>
                    <div className="modalDescription">
                        <p>This is a random text about a random product. This will contain the normal description of a product</p>
                        <p>what's in the product: </p>
                        <ul>
                            <li>Something</li>
                            <li>Another thing</li>
                            <li>Last thing</li>
                        </ul>
                    </div>
                    <div className="modalPrice">
                        5468$
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <a href="tel:123-456-7890"><Button variant="success" onClick={handleClose}>Call Now! </Button></a>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Product;