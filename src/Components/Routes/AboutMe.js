import React, { Component } from 'react';

import BioCard from '../BioCard/index';
import './style.css';

export default class AboutMe extends Component {
 static defaultProps = {
  cardTitle: 'Kilka słów o mnie',
  cardText: `Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.Some quick example text to build on the card title and make up the bulk of
        the card's content.`,
  cardLink: 'Card Link',
 };
 render() {
  return (
   <BioCard
    cardTitle={this.props.cardTitle}
    cardText={this.props.cardText}
    cardLink={this.props.cardLink}
   />
  );
 }
}
