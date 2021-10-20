import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hook/useAuth";
import "./Header.css";

export default function Header() {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="my-nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Medi Sheba
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="me-auto">
            <Nav.Link className="mx-3" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="mx-3" as={HashLink} to="/home/#services">
              Services
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Navbar.Text>
              Signed in as:{" "}
              <a className="mx-3" href="#login">
                {user?.displayName}
              </a>
            </Navbar.Text>
            {user?.email ? (
              <Button className="mx-2" onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link className="mx-3" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
