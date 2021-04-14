import React, { Component } from 'react';
import { Card, Button, Row } from 'react-bootstrap';

import { loadClass } from '../Routes';
import Aquired from './Aquired';
import Learning from './Learning';
import '../style.css';

export default class Skills extends Component {
 static defaultProps = {
  cardTitle: 'umiejętności',
  cardSubtitle: {
   sub1: 'poznane technologie',
   sub2: 'aktualnie się uczę',
   sub3: 'planuję się nauczyć',
  },
  cardText: '',
  cardLink: 'Card Link',
 };
 constructor(props) {
  super(props);
  this.state = { titleClass: '', skills: '' };
  this.handleClick = this.handleClick.bind(this);
 }

 componentDidMount() {
  const titleClass = loadClass();
  setTimeout(() => {
   this.setState({ titleClass: titleClass });
  }, 1);
 }

 handleClick(comp) {
  this.setState({ skills: comp });
 }

 render() {
  return (
   <Card className="bioCard" text="white">
    <div className="cardWrapper">
     <Card.Body>
      <Card.Title className={`cardTitle ${this.state.titleClass}`}>
       {this.props.cardTitle}
      </Card.Title>
      {/* <Card.Subtitle as={Button} className="mb-2 text-muted">
       {this.props.cardSubtitle.sub1}
      </Card.Subtitle> */}
      <Row className="buttonRow">
       <Button
        variant="outline-success"
        size="sm"
        onClick={() => this.handleClick(<Aquired />)}>
        {this.props.cardSubtitle.sub1}
       </Button>
       <Button
        variant="outline-success"
        size="sm"
        onClick={() => this.handleClick(<Learning />)}>
        {this.props.cardSubtitle.sub2}
       </Button>
       <Button variant="outline-success" size="sm">
        {this.props.cardSubtitle.sub3}
       </Button>
      </Row>
      {/* here goes the component */}
      {this.state.skills}
     </Card.Body>
    </div>
   </Card>
  );
 }
}
