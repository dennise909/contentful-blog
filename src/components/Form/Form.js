import React, { Component } from "react";
import "./Form.css"

class MyForm extends Component {

    render() {
        return (
            <div className="form">
                <h3>{this.props.title}</h3>
                <div className="form-content" >
                    <img className="form-img" src={this.props.src} alt="formImg" />
                    <p className="form-text">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default MyForm;