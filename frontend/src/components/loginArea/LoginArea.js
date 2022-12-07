import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import "./LoginArea.scss";

const LoginArea = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="loginArea">
      <Container>
        <div className="loginArea-wrap">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="email" className="field" />
              <input type="password" placeholder="password" className="field" />
              <input type="submit" value="Login" className="submit" />
              <p>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "yellow" }}>
                  Register
                </Link>
              </p>
            </form>
          </div>
          <div className="right">
            <img src="journey.png" alt="journey" />
            <p>Continue your journey with us </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginArea;
