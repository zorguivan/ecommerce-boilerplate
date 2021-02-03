import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { TelephoneForwardFill } from 'react-bootstrap-icons';

export const Navigation = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Quanta-Demo</Navbar.Brand>
                    <a href="tel:123-456-7890" className="phoneIconMobile"><Button variant="success"><TelephoneForwardFill /></Button></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline className="searchForm">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <a href="tel:123-456-7890" className="phoneIconDesk mx-2"><Button variant="outline-success">Call Now <TelephoneForwardFill /></Button></a>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
    )
}