import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import ProjectsText from './ProjectsText';
import { loadClass } from '../Routes';
import '../style.css';

export default class Projects extends Component {
 static defaultProps = {
  cardTitle: 'projekty',
  cardText: <ProjectsText />,
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
   <Card className="Projects bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title className={`cardTitle ${this.state.titleClass}`}>
       {this.props.cardTitle}
      </Card.Title>
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
