import React from 'react';
import { Card, CardLink, CardTitle, CardText, Row, Col } from 'reactstrap';
const Footer = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Contact Info</CardTitle>
          <CardText> Donald Rivers</CardText>
          <CardText> Email: donaldrivers76@gmail.com </CardText>
          <CardText> 404-341-8362 </CardText>
          
        </Card>
      </Col>
      <Col sm="4">
        <Card body id="links">
          <CardTitle>Follow Me</CardTitle>
          <CardLink href="http://www.linkedin.com/in/rivers-donald"><i className="fab fa-linkedin fa-2x" aria-hidden="true"></i></CardLink>
          <CardLink href="https://www.instagram.com/devil_soninlaw/"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></CardLink>
          <CardLink href="https://github.com/baldhead403"><i className="fab fa-github fa-2x" aria-hidden="true"></i></CardLink>
          <CardLink href="http://facebook.com/donald.rivers.7"><i className="fab fa-facebook fa-2x" aria-hidden="true"></i></CardLink>
        </Card>
      </Col>
    </Row>
  );
};

export default Footer