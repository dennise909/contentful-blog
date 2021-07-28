import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {


    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Posts</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>

        );
    }
}

export default Navbar;