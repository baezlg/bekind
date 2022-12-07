import React from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import RegisterArea from "../../components/registerArea/RegisterArea";

import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <Header />
      <RegisterArea />
      <Footer />
    </div>
  );
};

export default Register;
