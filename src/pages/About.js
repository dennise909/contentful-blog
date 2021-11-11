import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';


class About extends Component {


    render() {
        return (
                <header >
                    <Navbar/>
                    <h1>About</h1>
                    <h3>My supercool Contentful Blog</h3>
                </header>

        );
    }
}

export default About;