import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import AboutMeText from './AboutMeText';
import '../style.css';

export default class AboutMe extends Component {
 static defaultProps = {
  cardTitle: 'kilka słów o mnie',
  cardText: <AboutMeText />,
  cardLink: '',
 };

 render() {
  return (
   <Card className="About bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title className="cardTitle">{this.props.cardTitle}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
       {this.props.cardSubtitle}
      </Card.Subtitle>
      <Card.Text>{this.props.cardText}</Card.Text>
     </Card.Body>
    </div>
   </Card>
  );
 }
}
