import React, { Component } from 'react';
import getblogposts from '../blogpostlist';
import Card from './Card';


class Postcard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            postCollection: {
                items: [
                ],
            }
        }
    };

    async componentDidMount() { // hook to run data fetch calls 
        const requestData = await getblogposts();
        console.log(getblogposts())
        this.setState(requestData);

    }
    
    render() {
        let postData = this.state.postCollection.items
        return (
            <div>
                {
                    postData.map((type) =>
                    <h2>{type.author.name}</h2>
                    )
                }
                <Card/>
        </div>
    
        );
    }
}

export default Postcard;