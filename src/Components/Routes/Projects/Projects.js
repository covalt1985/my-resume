import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import ProjectsText from './ProjectsText';
import { loadClass } from '../Routes';
import '../style.css';

export default class Projects extends Component {
  static defaultProps = {
    cardTitle: 'projekty',
    cardLink: 'Card Link',
  };
  constructor(props) {
    super(props);
    this.state = { titleClass: '' };
  }

  componentDidMount() {
    //activates transition delay for cardTitle
    const titleClass = loadClass();
    setTimeout(() => {
      this.setState({ titleClass: titleClass });
    }, 1);
  }
  render() {
    return (
      <Card className="Projects bioCard mainCard" text="white">
        <div className="cardWrapper">
          <Card.Body>
            <Card.Title className={`cardTitle ${this.state.titleClass}`}>
              {this.props.cardTitle}
            </Card.Title>
            <ProjectsText />
          </Card.Body>
        </div>
      </Card>
    );
  }
}
