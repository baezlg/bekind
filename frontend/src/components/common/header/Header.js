import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} className="text-white" to="/">
          BEKIND
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-danger" : "text-white"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/article"
              className={({ isActive }) =>
                isActive ? "text-danger" : "text-white"
              }
            >
              Article
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/event"
              className={({ isActive }) =>
                isActive ? "text-danger" : "text-white"
              }
            >
              Event
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-danger" : "text-white"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-danger" : "text-white"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="text-white me-2">
              Signed in as: <Link to="/login">John Doe</Link>
            </Navbar.Text>
            <Button variant="warning" as={Link} to="/login">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
