import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Pokémon</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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