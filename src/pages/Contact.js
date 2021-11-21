import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Contact.css'


class Contact extends Component {


    render() {
        return (
                <div className="contact-container">
                    <Navbar/>
                    <header className="contact-content">
                        <h1>Hola</h1>
                    </header>
                    <Footer/>
                </div>

        );
    }
}

export default Contact;