import React, {Component} from 'react';

import './cards.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'


class Cards extends Component {
    constructor() {
        super();
        this.state = {
            followers: [],
            name: '',
            login: '',
            id: '',
            follower_list: '',
            following_list: '',
            avatar: '',
            bio: '',
            image: ''

        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/fiopwk')
            .then(res => res.json())
            .then(name => this.setState({
                name: name.name,
                login: name.login,
                id: name.id,
                followers_list: name.followers,
                following_list: name.following,
                avatar: name.avatar_url,
                bio: name.bio,
                image: name.avatar_url

            }))
            .catch(err => console.log(err, '!'))
    }


    render() {
        return (
            <div>

                <div className="navbar">Search</div>
                <>
                    <Card className='user-card'>
                        <CardImg style={{border: '2px solid', width: '40vw'}} src={this.state.image}/>
                        <CardBody>
                            <h3>Name:</h3>
                            <CardTitle>{this.state.name}</CardTitle>
                            <h3>Github Handle</h3>
                            <CardText>{this.state.login}</CardText>
                            <h3>Bio</h3>
                            <CardText>{this.state.bio}</CardText>
                            <h3>Followers</h3>
                            <CardSubtitle>{this.state.followers_list}</CardSubtitle>
                            <h3>Following</h3>
                            <CardSubtitle>{this.state.following_list}</CardSubtitle>
                        </CardBody>
                    </Card>

                </>

            </div>
        );
    }
}

export default Cards;