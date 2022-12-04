import React from "react";
import Container from "react-bootstrap/Container";

import "./PoweredBy.scss";

const PoweredBy = () => {
  return (
    <div className="poweredBy">
      <Container>
        <h1 className="text-white">Featured on</h1>
        <div className="poweredBy-box">
          <div className="poweredBy-item">
            <img src="mainor.png" alt="logo" />
            <h3>mainor</h3>
          </div>
          <div className="poweredBy-item">
            <img src="fastcompany.png" alt="logo" />
          </div>
          <div className="poweredBy-item">
            <img src="techcrunch.png" alt="logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PoweredBy;
