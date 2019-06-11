import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
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
                        isLoading: false,
                    }
                )
            },
            (error) => {
                this.setState({
                    isLoading: false,
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
            this.setState({
                isLoading: true,
            })
            console.log('submitting ' + this.state.value);
            this.getInfo(this.state.value);
        }
    };

    render() {

        return(
            <div >
                <div>
                    {/*<Spinner open={this.state.isLoading}/>*/}
                    <SearchIcon />
                    <input
                        value = {this.state.value}
                        onChange = {this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div className='sweet-loading'>
                    <HashLoader
                        css={override}
                        sizeUnit={"px"}
                        size={50}
                        color={'#A9A9A9'}
                        loading={this.state.isLoading}
                    />
                </div>
            </div>
        );
    }

}

export default SearchInput;