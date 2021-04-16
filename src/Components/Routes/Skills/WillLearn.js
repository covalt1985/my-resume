import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { willLearn } from './SkillsText';

class WillLearn extends Component {
  render() {
    return (
      <div className="skills">
        {willLearn.map(el => {
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

export default WillLearn;
