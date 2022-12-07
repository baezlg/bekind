import React from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import LoginArea from "../../components/loginArea/LoginArea";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <LoginArea />
      <Footer />
    </div>
  );
};

export default Login;
