import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "./img/home.jpeg";
import img2 from "./img/topsection2.jpeg";
import "./MidSection.css";

export default function MidSection() {
  return (
    <div className="mid-section my-5">
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col>
            <div className=" m-auto">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col className="d-flex  justify-content-center">
            <div>
              <div className=" m-auto">
                <img className="img-fluid" src={img2} alt="" />
              </div>
              <div className="w-50">
                <hr />
                <hr />
              </div>
              <div className="home-text">
                <h1>Medi Sheba</h1>
                <h3>
                  is the biggest digital pharmacy of Bangladesh. Currently the
                  free home delivery service is available to residents of Dhaka
                  city only
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
