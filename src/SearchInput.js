import React, { Fragment } from "react";
import SearchIcon from '@material-ui/icons/Search';
import ListItemText from '@material-ui/core/ListItemText';
import { MDBBtn, MDBIcon } from "mdbreact";
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';
import './SearchInput.css'; 
import NotFound from './NotFound';

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
            value: '',
            response: []
        };
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo (name){
        fetch('https://pokeapi.co/api/v2/pokemon/'+name).then(
            res => res.json()
        ).then(
            (result) => {
                this.setState({
                        isLoading: false,
                        response:result.abilities
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
            <div>
            {this.state.error === null?
                <div className="search">
                    <div className="buttonGroup">
                        <Fragment>
                            <MDBBtn size="sm" color="info">
                                <i class="fas fa-book"></i>  Profile
                            </MDBBtn>
                            <MDBBtn size="sm" color="info">
                                <MDBIcon fab icon="codepen" />  Moves
                            </MDBBtn>
                            <MDBBtn size="sm" color="info">
                                <MDBIcon far icon="address-book" />  Status 
                            </MDBBtn>
                            <MDBBtn size="sm" color="info">
                                <i class="fas fa-cogs"></i>  Abilities 
                            </MDBBtn>
                            <MDBBtn size="sm" color="info">
                                <i class="fas fa-crow"></i>  Sprites 
                            </MDBBtn>
                        </Fragment>
                    </div>             
                    <div>
                        <SearchIcon />
                        <input
                            value = {this.state.value}
                            onChange = {this.handleInputChange}
                            onKeyPress={this.handleKeyPress}
                            size="65"
                            className="input1"
                        />
                    </div>
                    {	
                        this.state.response !== null?
                            <div>
                                <ul>
                                    {this.state.response.map((x,index)=>	
                                        <li key={index}>	
                                            <ListItemText primary={x.ability.name}/>	
                                        </li>	
                                    )}	
                                </ul>	
                            </div>	
                            :<h1>empty</h1>	
                    }
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
                :<NotFound />
}
                </div>
        );
    }

}

export default SearchInput;