// import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Table } from "react-bootstrap";

export default function MedicineRetail() {
  // const [medicines, setMEdicines] = useState([]);
  // useEffect(() => {
  //   fetch("./mediData.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Medicine Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={1} lg={1} className="justify-content-evenly">
          <Col className="d-flex align-items-center justify-content-center">
            <div className=" m-auto">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>*</th>
                    <th>Medicine Names</th>
                    <th>Price</th>
                    <th>Add To Card</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
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
