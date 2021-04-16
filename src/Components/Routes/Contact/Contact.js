import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import ContactText from './ContactText';
import { loadClass } from '../Routes';
import '../style.css';

export default class Contact extends Component {
  static defaultProps = {
    cardTitle: 'kontakt',
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
      <Card className="Contact bioCard" text="white">
        <div className="cardWrapper">
          <Card.Body>
            <Card.Title className={`cardTitle ${this.state.titleClass}`}>
              {this.props.cardTitle}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.cardSubtitle}
            </Card.Subtitle>
            <Card.Text>
              <ContactText />
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    );
  }
}
