import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const Contact = () => {
    return (
        <div className="container ">
            <div className="text-center"> <h4>Contact Us</h4></div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.gyazo.com/d65420482f21cb477aa6b0952a87db3e.png" className="mapimg" alt=""/>
                </div>
                <div className="col-md-5">
                <div className="">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <Button variant="success">Message Us</Button>
                    </Form>
                </div>
                </div>
            </div>
        </div>
    )
}
