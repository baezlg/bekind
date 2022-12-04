import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="text-white showcase">
      <Container>
        <Row>
          <Col sm={4}>
            <p className="fs-1 text-wrap w-50">
              It costs nothing
              <br />
              to be <br />
              nice
            </p>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem repudiandae, quae maiores obcaecati accusamus
              praesentium odio repellendus magni quidem sapiente!
            </p>
            <Button variant="warning" className="mt-2">
              Join Now
            </Button>
          </Col>
          <Col sm={8} className="d-flex justify-content-center">
            <Image src="showcase.png" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
