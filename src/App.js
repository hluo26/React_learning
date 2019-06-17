import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import SearchInput from './SearchInput';
import Donation from './Donation.js';
import Document from './Document.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        response: []
      };
  }

  handleSomething = (value) => {
      console.log(value);
        this.setState( {
            response: value.abilities
        })
    }

  render() {

    return (
        <Router>
            <div className="App">

            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand to='/'>Pokémon</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to= '/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/Document'>Document</Nav.Link>
                        <Nav.Link as={NavLink} to='/Donation'>Donation</Nav.Link>
                    </Nav>
                </Navbar>
                
            </div>
            <div className="body">
                <Switch>
                    <Route exact path='/' component={() => <SearchInput handleSomething={this.handleSomething}/>} />
                    <Route path='/Document' component={Document} />
                    <Route path='/Donation' component={Donation} />
                </Switch>
            </div>

        </div>
</Router>

    );
  }
}

export default App;
