import React, { Component } from 'react';
//import Colorpallet from '../components/Color Pallet/Colorpallet'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
class Posts extends Component {


    render() {
        return (
                <>
                <header>
                    <Navbar/>
                    <h1>Posts</h1>
                </header>
                <Footer/>
                </>

        );
    }
}

export default Posts;
