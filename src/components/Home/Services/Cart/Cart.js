import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart({ shebaMini }) {
  const { img, title, mini_detail, id } = shebaMini;
  return (
    <div className="my-2">
      <Card style={{ width: "18rem", height: "27.7rem" }}>
        <div>
          <Card.Img variant="top" src={img} className="img-fluid " />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{mini_detail}</Card.Text>
          <Link to={`/servicing/${id}`}>
            <Button variant="primary" className="btn-custom-color">
              {" "}
              Click for service
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
