import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FaqAccordion from "./FaqAccordion";
import img from "./img/FAQ.jpeg";
import "./Faq.css";
export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("./faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);
  return (
    <div>
      <div className="w-75 m-auto">
        <div className="py-3 my-3 text-light faq-style">
          <h3 className="text-center">Frequently Asked Questions</h3>
        </div>
        <div>
          <img src={img} alt="" className="img-fluid" />
        </div>
      </div>
      <Container>
        <Row xs={1} md={1} lg={2} className="justify-content-evenly m-4">
          {faqs.map((faq) => (
            <FaqAccordion key={faq.id} faq={faq} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
