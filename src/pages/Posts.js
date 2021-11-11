import React, { Component } from 'react';
import Colorpallet from '../components/Color Pallet/Colorpallet'
import Navbar from '../components/Navbar/Navbar';

class Posts extends Component {


    render() {
        return (
                <header>
                    <Navbar/>
                    <h1>Posts</h1>
                    < Colorpallet/>
                </header>

        );
    }
}

export default Posts;
