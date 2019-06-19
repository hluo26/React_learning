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
<<<<<<< HEAD
                        <Nav.Link href="#guide">Guide</Nav.Link>
                        <Nav.Link href="#donate">Donate</Nav.Link>
=======
                        <Nav.Link href="#document">Document</Nav.Link>
                        <Nav.Link href="#donation">Donation</Nav.Link>
>>>>>>> 4a223aceeb2c0ca3dd27e4b06130bdc844f5f529
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