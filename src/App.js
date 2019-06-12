import React from 'react';
import './App.css';
import SearchInput from './SearchInput';
import NavigationBar from './NavigationBar';

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
        <div className="App">

        <div>
            <NavigationBar/>
        </div>
            <div className="body">
                <SearchInput handleSomething={this.handleSomething}/>
                {
                    this.state.response !== null?
                        <div>
                            <ul>
                                {this.state.response.map((x,index)=>
                                    <li key={index}>
                                        {x.ability.name}
                                    </li>
                                )}
                            </ul>
                        </div>
                        :<h1>empty</h1>
                }
            </div>

        </div>

    );
  }
}

export default App;
