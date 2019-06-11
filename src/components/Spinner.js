import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
  isOpen() {
    return this.props.open ? { display: "block" } : { display: "none" }
  }
  render() {
    return (<div className="spinner-container"
      style={{ ...this.isOpen(), ...this.props.style }}>
      <div className="spinner">Loading...</div>
      <div className="spinner-text">{this.props.value}</div>
    </div>)
  }
}
export default Spinner;