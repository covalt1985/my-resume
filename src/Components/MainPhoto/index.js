import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import './style.css';

class MainPhoto extends Component {
 static defaultProps = {
  photo: '/photo.jpg',
  cardTitle: 'Tomasz Kowalik',
  cardUnderTitle: 'front end developer',
 };
 render() {
  return (
   //hides when vw < 992px
   <Card className="d-none d-md-none d-lg-flex Card text-white">
    <Card.Img className="CardImage" src={this.props.photo} alt="Card image" />
    <Card.ImgOverlay className="CardBody">
     <Row>
      <Col>
       <Card.Text className="CardText title">{this.props.cardTitle}</Card.Text>
       <Card.Title className="CardText underTitle">
        {this.props.cardUnderTitle}
       </Card.Title>
      </Col>
     </Row>
    </Card.ImgOverlay>
   </Card>
  );
 }
}

export default MainPhoto;
