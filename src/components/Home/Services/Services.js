import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cart from "./Cart/Cart";

export default function Services() {
  const [sheba, setSheba] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setSheba(data));
  }, []);
  return (
    <div className="my-3" id="services">
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
          {sheba.map((shebaMini) => (
            <Cart key={shebaMini.id} shebaMini={shebaMini} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
