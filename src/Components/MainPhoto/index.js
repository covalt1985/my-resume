import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import './style.css';

class MainPhoto extends Component {
 render() {
  return (
   <Card className="d-none d-md-block d-lg-block Card text-white">
    <Card.Img className="CardImage" src="/photo.jpg" alt="Card image" />
    <Card.ImgOverlay className="CardBody">
     <Row>
      <Col>
       <Card.Text className="CardText title">Tomasz Kowalik</Card.Text>
       <Card.Title className="CardText underTitle">
        front end developer
       </Card.Title>
      </Col>
     </Row>
    </Card.ImgOverlay>
   </Card>
  );
 }
}

export default MainPhoto;
