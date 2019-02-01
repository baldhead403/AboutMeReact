import React from 'react';
import { Card, CardLink, CardTitle, CardText, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Contact Info</CardTitle>
          <CardText> Donald Rivers</CardText>
          <CardText> Atlanta, Georgia </CardText>
          <CardText> 404-341-8362 </CardText>
          
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Follow Me</CardTitle>
          <CardLink href="http://www.linkedin.com/in/rivers-donald"><i className="fab fa-linkedin-square" aria-hidden="true"></i></CardLink>
          <CardLink href="https://www.instagram.com/devil_soninlaw/"><i className="fa fa-instagram" aria-hidden="true"></i></CardLink>
          <CardLink href="https://github.com/baldhead403"><i className="fa fa-github" aria-hidden="true"></i></CardLink>
          <CardLink href="http://facebook.com/donald.rivers.7"><i className="fa fa-facebook-square" aria-hidden="true"></i></CardLink>
        </Card>
      </Col>
    </Row>
  );
};

export default Footer