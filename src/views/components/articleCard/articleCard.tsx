import React from 'react';
import {Props, State} from "./articleCard.interface";
import {Card} from 'react-bootstrap';
import toto from './../../../assets/img/No_picture_available.png'
export default class ArticleCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getImage() {
        return this.props.article.multimedia[0] ? 'https://static01.nyt.com/' + this.props.article.multimedia[0].url : toto
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.getImage()}/>
                <Card.Body>
                    <Card.Title>{this.props.article.headline.main}</Card.Title>
                    <Card.Text>
                        {this.props.article.abstract.length < 30 ? this.props.article.abstract : this.props.article.abstract.substring(0,30)}
                        <a href={this.props.article.web_url} target="_blank">...more</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}