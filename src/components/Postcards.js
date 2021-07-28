import React, { Component } from 'react';
import getblogposts from '../blogpostlist';
import Card from './Card/Card';
import './Postcards.css'
import uuid from 'uuid/v4'


class Postcards extends Component {


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
            <div className="blog-posts">
                {
                    postData.map((type) =>
                    <Card title ={type.postName} intro = {type.intro} url ={type.featuredImage.url} content ={type.content}  key={uuid()}/>
                    )
                }
            
        </div>
    
        );
    }
}

export default Postcards;