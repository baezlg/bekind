import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="text-white">
          BEKIND
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              Article
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              Event
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="text-white me-2">
              Signed in as: <a href="#login">John Doe</a>
            </Navbar.Text>
            <Button variant="warning">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
