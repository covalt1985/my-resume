import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import SkillsText from './SkillsText';
import { loadClass } from '../Routes';
import { knowledge } from './SkillsText';
import '../style.css';

export default class Skills extends Component {
 static defaultProps = {
  cardTitle: 'umiejętności',
  cardSubtitle: {
   sub1: 'poznane technologie:',
   sub2: 'aktualnie się uczę:',
   sub3: 'planuję się nauczyć:',
  },
  cardText: '',
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
      <div className="skills">
       {knowledge.aquired.map(el => {
        return (
         <Card.Text>
          {el.icon}
          {el.text}
         </Card.Text>
        );
       })}
      </div>
     </Card.Body>
    </div>
   </Card>
  );
 }
}
