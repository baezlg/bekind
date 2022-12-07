import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";

import "./RegisterArea.scss";

const RegisterArea = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="registerArea">
      <Container>
        <div className="registerArea-wrap">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="first name" className="field" />
              <input type="text" placeholder="last name" className="field" />
              <input type="email" placeholder="email" className="field" />
              <input type="password" placeholder="password" className="field" />
              <input
                type="password"
                placeholder="confirm password"
                className="field"
              />
              <input type="submit" value="Sign up" className="submit" />
              <p>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "yellow" }}>
                  Login
                </Link>
              </p>
            </form>
          </div>
          <div className="right">
            <img src="journey.png" alt="journey" />
            <p>Begin your journey with us</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterArea;
