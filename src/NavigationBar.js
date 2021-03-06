import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Donation from './Donation.js';

class NavigationBar extends React.Component {

    render() {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Pokémon</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#document">Document</Nav.Link>
                        <Nav.Link href="#donation">Donation</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;