import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    static defaultProps ={
        text: 'Recent Posts'
    }

    render() {
        return (
            <section className="banner">
                <p className ="banner-text">{this.props.text}</p>
            </section>

        );
    }
}

export default Banner;