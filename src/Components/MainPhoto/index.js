import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import './style.css';

class MainPhoto extends Component {
 render() {
  return (
   <Card className="Card text-white">
    <Card.Img src="/photo.jpg" alt="Card image" />
    <Card.ImgOverlay className="CardBody">
     <Row>
      <Col>
       <Card.Text className="CardText title">TOMASZ KOWALIK</Card.Text>
       <Card.Title className="CardText underTitle">
        Front End Developer
       </Card.Title>
      </Col>
     </Row>
    </Card.ImgOverlay>
   </Card>
  );
 }
}

export default MainPhoto;
