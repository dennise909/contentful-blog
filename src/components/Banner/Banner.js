import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    static defaultProps ={
        text: 'Recent Posts'
    }

    render() {
        return (
            <div className="banner">
                <p className ="banner-text">{this.props.text}</p>
            </div>

        );
    }
}

export default Banner;