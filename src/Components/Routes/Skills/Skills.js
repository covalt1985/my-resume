import React, { Component } from 'react';
import { Card, Button, Row } from 'react-bootstrap';

import { loadClass } from '../Routes';
import Aquired from './Aquired';
import Learning from './Learning';
import '../style.css';
import WillLearn from './WillLearn';

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
    setTimeout(() => {
      this.setState({ titleClass: loadClass() });
    }, 1);
  }

  handleClick(comp) {
    this.setState({ skills: comp });
  }

  render() {
    return (
      <Card className="bioCard mainCard" text="white">
        <div className="cardWrapper">
          <Card.Body>
            <Card.Title className={`cardTitle ${this.state.titleClass}`}>
              {this.props.cardTitle}
            </Card.Title>
            <Row className="buttonRow d-flex-column d-sm-flex">
              {/* buttons */}
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
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => this.handleClick(<WillLearn />)}>
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
