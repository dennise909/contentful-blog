import React, { Component } from 'react';
import './Card.css'

class Card extends Component {


    render() {
        return (
            <div className="card">
                <img className="card-img" src={this.props.url} alt="postImg"/>
                    <div className="container">
                        <h4><b>{this.props.title}</b></h4>
                        <p className = "card-text">{this.props.intro}</p>
                    </div>
            </div>

                );
            }
        }
        
export default Card;