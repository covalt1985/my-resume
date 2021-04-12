import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import SkillsText from './SkillsText';
import { loadClass } from '../Routes';
import '../style.css';

export default class Skills extends Component {
 static defaultProps = {
  cardTitle: 'umiejętności',
  cardSubtitle: { sub1: 'Foo', sub2: 'Bar' },
  cardText: <SkillsText />,
  cardLink: 'Card Link',
 };
 constructor(props) {
  super(props);
  this.state = { titleClass: '' };
 }

 componentDidMount() {
  const titleClass = loadClass();
  setTimeout(() => {
   this.setState({ titleClass: titleClass });
  }, 1);
 }
 render() {
  return (
   <Card className="bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title className={`cardTitle ${this.state.titleClass}`}>
       {this.props.cardTitle}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
       {this.props.cardSubtitle.sub1}
      </Card.Subtitle>
      <Card.Text>{this.props.cardText}</Card.Text>
     </Card.Body>
    </div>
   </Card>
  );
 }
}
