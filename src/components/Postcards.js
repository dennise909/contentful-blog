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
        let dataID = this.addID(requestData)
        this.setState(dataID);
    };


     addID = (object) => {
        let data = {}
        let postCollection = {}
        let items = []
        let postData = object.postCollection.items
            postData.map (type => {
            let newType = { ...type, id: uuid()}
            items.push(newType)
            return items
            });
        postCollection.items = items
        data.postCollection = postCollection
        return data
    }


    render() {
        let postData = this.state.postCollection.items
       
        return (
            <div className="blog-posts">
                {
                    postData.map((type) =>
                        <Card title={type.postName} intro={type.intro} url={type.featuredImage.url} content={type.content} key={type.id} />
                    )
                }

            </div>

        );
    }
}

export default Postcards;
