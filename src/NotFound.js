import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PageNotFound from './img/error-404.png';
import './NotFound.css';
const NotFound = () => (
<div>
<img src={PageNotFound} className = "img1" />
<center className="b1"><Nav.Link href="#home">Return to Home Page</Nav.Link></center>
</div>
);
export default NotFound;