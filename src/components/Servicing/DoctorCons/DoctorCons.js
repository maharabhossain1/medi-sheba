import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function DoctorCons() {
  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Doctor Consultation Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className="d-flex align-items-center justify-content-center">
            <div className=" m-auto">
              <img
                src="https://i.ibb.co/Wxt3sGr/Online-Doctor-Consultation-Support-Promotion-Flat-Banner-Modern-Healthcare-Service-Medical-Technolog.jpg"
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
                <h1>Doctor Sheba</h1>
                <h3>
                  During the consultation, the doctor conducts a thorough
                  medical review by asking questions. The questions may cover
                  symptoms, general condition or feeling of the patient, any
                  health concerns, and the results of previous medical tests.
                  The doctor then performs a physical exam.
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
