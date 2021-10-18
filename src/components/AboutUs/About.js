import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}
