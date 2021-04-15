import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { knowledge } from './SkillsText';

class Aquired extends Component {
 render() {
  return (
   <div className="skills">
    {knowledge.aquired.map(el => {
     return (
      <Card.Text className="fadeIn" key={el.text}>
       {el.icon}
       {el.text}
      </Card.Text>
     );
    })}
   </div>
  );
 }
}

export default Aquired;
