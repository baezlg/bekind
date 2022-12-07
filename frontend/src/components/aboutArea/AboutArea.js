import React from "react";
import { Container } from "react-bootstrap";
import "./AboutArea.scss";

const AboutArea = () => {
  return (
    <div className="aboutArea">
      <Container>
        <div className="wrapper">
          <div className="about-left">
            <img src="together.jpg" alt="together" />
          </div>
          <div className="about-right">
            <h1>About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quasi totam possimus minus ipsa vero laudantium sapiente,
              perferendis quod nemo labore vel earum.Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Itaque quasi totam possimus minus
              ipsa vero laudantium sapiente, perferendis quod nemo labore vel
              earum...
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutArea;
