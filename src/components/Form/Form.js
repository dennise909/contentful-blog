import React, { Component } from "react";
import "./Form.css"

class MyForm extends Component {

    render() {
        return (
            <div className="form">
                <h4>{this.props.title}</h4>
                <img className="form-img" src={this.props.src} alt="formImg"/>
                <p className="form-text">{this.props.content}</p>
            </div>
        );
    }
}

export default MyForm;