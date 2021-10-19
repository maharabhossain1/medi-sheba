import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HospitalDel() {
  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Hospital Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className="d-flex align-items-center justify-content-center">
            <div className=" m-auto">
              <img
                src="https://i.ibb.co/yy1G26Q/hospital.jpg"
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
                <h1>Hospital Sheba</h1>
                <h3>
                  Stay Safe. Stay Home. Let us deliver your medications to you.
                  Enjoy the convenience of our Medication Delivery Service (MDS)
                  and have your medications delivered to your preferred
                  location, for free.
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
