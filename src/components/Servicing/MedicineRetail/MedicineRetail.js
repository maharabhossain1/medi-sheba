import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import {
  FaAngleDoubleDown,
  FaCartPlus,
  FaHandHoldingMedical,
} from "react-icons/fa";

export default function MedicineRetail() {
  const [mediData, setmediData] = useState([]);

  useEffect(() => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((data) => setmediData(data));
  });

  return (
    <div className="w-75 m-auto">
      <div className="text-center m-4  ">
        <h1> Medicine Service //</h1>
      </div>
      <Container>
        <Row xs={1} md={1} lg={1} className="justify-content-evenly">
          <Col>
            <div className=" m-auto">
              <Table
                striped
                bordered
                hover
                size="sm"
                className="w-100 text-center"
              >
                <thead>
                  <tr>
                    <th>*</th>
                    <th>Medicine Names</th>
                    <th>Price</th>
                    <th>Add To Card</th>
                  </tr>
                </thead>
                <tbody>
                  {mediData.map((medi) => {
                    const { id, name, price } = medi;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td className="text-center">
                          <Button className=" btn-custom-color">
                            <FaCartPlus />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="w-100 text-center">
                <Button className=" btn-custom-color text-center w-50 my-3">
                  Load More !<FaAngleDoubleDown className="mx-4" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Button className="btn-custom-color text-center w-100 my-3">
        If you want to purchase this Click Here{" "}
        <FaHandHoldingMedical className="mx-3" />
      </Button>
    </div>
  );
}

// FaAmbulance;
// FaHandHoldingMedical;
// FaCapsules;
