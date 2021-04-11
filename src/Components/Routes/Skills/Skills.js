import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import '../style.css';

export default class Skills extends Component {
 static defaultProps = {
  cardTitle: 'Card Title',
  cardSubtitle: { sub1: 'Foo', sub2: 'Bar' },
  cardText: { text1: 'Some long text', text2: 'Another text' },
  cardLink: 'Card Link',
 };
 render() {
  return (
   <Card className="bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title>{this.props.cardTitle}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
       {this.props.cardSubtitle.sub1}
      </Card.Subtitle>
      <Card.Text>{this.props.cardText.text1}</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
       {this.props.cardSubtitle.sub2}
      </Card.Subtitle>
      <Card.Text>{this.props.cardText.text2}</Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
    </div>
   </Card>
  );
 }
}
