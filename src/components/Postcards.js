import React, { Component } from 'react';
import getblogposts from '../blogpostlist';
import Card from './Card/Card';
import './Postcards.css'
import uuid from 'uuid/v4'


class Postcards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPostCollection: {
                items: [
                ],
            }
        }
    };

    async componentDidMount() { // hook to run data fetch calls 
        const requestData = await getblogposts();
        let dataID = this.addID(requestData)
        //console.log(dataID)
        this.setState(dataID);
    };

    // function getUserAddres(userData) {...}
    // function calculateTax(price, country) { // return tax % based on country}
     addID = (data) => { // Use the data,iterate over it, add id's to each item return the data.
        const itemsWithIds = data.blogPostCollection.items.map(item => {
            return {...item, id: uuid()}
        })
        //console.log(itemsWithIds)
        data.blogPostCollection.items = itemsWithIds;
        return data
    }


    render() {
        let postData = this.state.blogPostCollection.items
        return (
            // paragraph with info
            // display button with input
            // text input
            <section className="blog-posts">
                {
                    postData.map((type) =>
                        <Card title={type.postTitle} intro={type.postPreviewDescription} url={type.postImage.url} content={type.postContent} key={type.id} />
                    )
                }

            </section>

        );
    }
}

export default Postcards;
