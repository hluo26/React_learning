import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import Spinner from './components/Spinner';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            value: ''
        };
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo (name){
        fetch('https://pokeapi.co/api/v2/pokemon/'+name).then(
            res => res.json()
        ).then(
            (result) => {
                this.props.handleSomething(result)
                this.setState({
                        isLoading: true,
                    }
                )
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        );
    }

    handleInputChange = event => {
        const query = event.target.value;
        this.setState({value:query});
    };

    handleKeyPress = event => {
        if(event.charCode === 13 ) {
            console.log('submitting ' + this.state.value);
            this.getInfo(this.state.value);
        }
    };

    render() {

        return(
            <div >
                <div>
                    <Spinner open={this.state.isLoading}/>
                </div>
                
                <div>
                    
                    <SearchIcon />
                    <input
                        value = {this.state.value}
                        onChange = {this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
            </div>
        );
    }

}

export default SearchInput;