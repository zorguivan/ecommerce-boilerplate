import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { TelephoneForwardFill, Search } from 'react-bootstrap-icons';

export const Navigation = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Quanta-Demo</Navbar.Brand>
                    <a href="tel:123-456-7890" className="phoneIconMobile"><Button variant="success"><TelephoneForwardFill /></Button></a>
                    <div className="search">
                        <input type="text" placeholder="search" />
                        <div className="symbol">
                            <div className="lens">
                                <Search />
                            </div>
                        </div>
                    </div>
                        
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
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