import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {


    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Posts</a></li>
                    <li><a href="#home">Contact</a></li>
                    <li><a href="#home">About</a></li>
                </ul>
            </nav>

        );
    }
}

export default Navbar;