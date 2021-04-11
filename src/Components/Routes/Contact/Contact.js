import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import '../style.css';

export default class Contact extends Component {
 static defaultProps = {
  cardTitle: 'kontakt',
  cardText: `Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.`,
  cardLink: 'Card Link',
 };
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <Card className="Contact bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title className="cardTitle">{this.props.cardTitle}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
       {this.props.cardSubtitle}
      </Card.Subtitle>
      <Card.Text>{this.props.cardText}</Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
    </div>
   </Card>
  );
 }
}
