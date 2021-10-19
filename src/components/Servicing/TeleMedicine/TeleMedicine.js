import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function TeleMedicine() {
  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Telemedicine Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className="d-flex align-items-center justify-content-center">
            <div className=" m-auto">
              <img
                src="https://i.ibb.co/h7y221h/telemedicine-f.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <div className="w-50">
                <hr />
                <hr />
              </div>
              <div className="home-text">
                <h1>Tele Sheba</h1>
                <h3>
                  Start Telehealth Today! Affordable Web/Mobile Software for
                  Telehealth Video/Monitoring. Video Calls, Health Devices More.
                  Simple Telemedicine Soln. Telemedicine Web App. Telemedicine
                  App. Telemedicine iOS App. Telemedicine Solution.
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Button className="btn-custom-color text-center w-100 my-3">
        If you want to purchase this Click Here
      </Button>
    </div>
  );
}
