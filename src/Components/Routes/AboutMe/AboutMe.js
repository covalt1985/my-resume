import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import AboutMeText from './AboutMeText';
import { loadClass } from '../Routes';
import '../style.css';

export default class AboutMe extends Component {
  static defaultProps = {
    cardTitle: 'o mnie',
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
      <Card className="About bioCard mainCard" text="white">
        <div className="cardWrapper">
          <Card.Body>
            <Card.Title className={`cardTitle ${this.state.titleClass}`}>
              {this.props.cardTitle}
            </Card.Title>
            <Card.Subtitle className="text-muted">
              {this.props.cardSubtitle}
            </Card.Subtitle>
            <Card.Text>
              <AboutMeText />
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    );
  }
}
