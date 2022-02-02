import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    backgroundColor:"purple",
    width:"100%",
    height:"auto"
}
function test() {
  return <div>
      <Container style={styles}>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
</Container>
  </div>;
}

export default test;
