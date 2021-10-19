import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function Diagonostic() {
  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Diagnostics Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className="d-flex align-items-center justify-content-center">
            <div className=" m-auto">
              <img
                src="https://i.ibb.co/CBQLh89/diagonostic.jpg"
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
                <h1>Diago Sheba</h1>
                <h3>
                  Diagnostic Services facilitates the provision of timely,
                  cost-effective, and high quality diagnostic care in safe and
                  secure environments. It includes the clinical services of
                  Pathology and Laboratory Medicine, Radiology, and Nuclear
                  Medicine
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
