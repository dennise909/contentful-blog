import React, { Component } from 'react';
import './Card.css'
import Modal from './Modal/Modal';
import Myform from './Form/Form';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className="card">
                <div onClick={this.showModal}>
                    <img className="card-img" src={this.props.url} alt="postImg" />
                    <div className="container">
                        <h4><b>{this.props.title}</b></h4>
                        <p className="card-text">{this.props.intro}</p>
                    </div>
                </div>
                {this.state.show && <Modal handleClose={this.hideModal}>
                    <Myform content={this.props.content} title ={this.props.title} src={this.props.url}/>
                </Modal>}
            </div>

        );
    }
}

export default Card;