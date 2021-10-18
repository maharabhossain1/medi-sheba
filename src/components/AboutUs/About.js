import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "./img/about.jpg";
export default function About() {
  return (
    <div>
      <Container>
        <Row xs={1} md={3} lg={3} className="justify-content-evenly">
          <Col>
            <div>
              <h2>About Us</h2>
              <p>
                Khidmat Drug Outlet was born from a realization that numerous
                individuals were failing to follow up after being prescribed
                medications by their physicians. We found a way to streamline
                the whole process in order to make it easier for everyone to
                heal. Through medication management protocols, we’re doing more
                than just providing medication.
              </p>
            </div>
          </Col>
          <Col>
            <div className="">
              <img src={img} class="img-fluid" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <p>
          Its Our goal is to find safe suppliers that produce proved
          medications. We believe that everybody has a right for the in-time and
          qualified treatment with good medicines. Unfortunately, it is not
          always possible in real life. Our small team tries to make
          pharmaceutical market clearer and more affordable for every person
          regardless of the income level. We care about your well-being. Our aim
          is to do everything in our power in order to make sure you’re
          receiving medications you deserve.
        </p>
      </div>
    </div>
  );
}
