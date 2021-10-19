import React from "react";
import { Accordion, Col } from "react-bootstrap";

export default function FaqAccordion({ faq }) {
  const { quiz, ans, id } = faq;
  return (
    <Col>
      <Accordion>
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{quiz}</Accordion.Header>
          <Accordion.Body>{ans}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}
