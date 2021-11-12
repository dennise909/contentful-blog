import React, { Component } from 'react';
import './Colorpallet.css'

class Colorpallet extends Component {
    // make a list of colors so they create a different rectangle
    render() {
    const listOfColors = ["#00444d","#699b9b","#ffdb41","#0c0f15","#785a6e","#ff2300","#01bfc7","#a9c6b7",
                        "#56750b","#263e5c","#b35c45","#442410","#555745","#46778e","#c64366","#022f5b"];
        return (
            <div className="color-pallet-container"> 
            {listOfColors.map((item) => (
                <div className="rectangle" style={{backgroundColor: item}}>  </div>
            ))}
            <label for="favcolor">Get color id: </label>
            <input type="color" id="favcolor" name="favcolor" value="#fc3487"></input>
            </div>
        );
    }
}

export default Colorpallet;