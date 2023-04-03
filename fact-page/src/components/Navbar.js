import React from 'react';
import myImage from '../images/react-logo.png';


export default function Navbar() {
    return (
        <nav className="navbar-container">
        <img src={require("../images/react-logo.png")} className="react" alt="react-logo"/>
        <h3 className="nav-facts">ReactFacts</h3>
        <h4 className="project">React Course - Project 1</h4>
        </nav>
    )
}