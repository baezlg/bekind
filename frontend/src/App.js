import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import Showcase from "./components/common/showcase/Showcase";
import Container from "react-bootstrap/Container";
import { Col, Row, Image } from "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Showcase />
      <div>
        <Container>
          <h1 className="text-white">Featured on</h1>
          <Row className="bg-danger">
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Image src="mainor.png" fluid className="h-50" />
              <p className="align-self-end">Mainor</p>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Image src="fastcompany.png" fluid className="h-50" />
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Image src="techcrunch.png" fluid className="h-50" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
