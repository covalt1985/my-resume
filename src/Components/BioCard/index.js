import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BioCard extends Component {
 render() {
  return (
   <Card className="bioCard" text="white">
    <Card.Body>
     <Card.Title>{this.props.cardTitle}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">
      {this.props.cardSubtitle}
     </Card.Subtitle>
     <Card.Text>{this.props.cardText}</Card.Text>
     <Card.Link href="#">Card Link</Card.Link>
     <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
   </Card>
  );
 }
}

export default BioCard;
