import React, { Component } from 'react';
import './Card.css'

class Card extends Component {


    render() {
        return (
            <div class="card">
                <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3667&q=80" alt="Avatar"/>
                    <div class="container">
                        <h4><b>John Doe</b></h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
            </div>

                );
            }
        }
        
export default Card;