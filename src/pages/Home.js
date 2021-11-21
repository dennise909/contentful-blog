import React, { Component } from 'react';
import Postcards from '../components/Postcards'
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';


class Home extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Banner />
                <Postcards />
                <Footer />
            </div>

        );
    }
}

export default Home;