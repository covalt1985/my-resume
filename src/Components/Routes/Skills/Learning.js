import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { learning } from './SkillsText';

class Learning extends Component {
  render() {
    return (
      <div className="skills">
        {learning.map(el => {
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

export default Learning;
