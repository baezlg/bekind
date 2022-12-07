import React from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Showcase from "../../components/common/showcase/Showcase";
import PoweredBy from "../../components/poweredBy/PoweredBy";
import RegisterArea from "../../components/registerArea/RegisterArea";

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <PoweredBy />
      <RegisterArea />
      <Footer />
    </>
  );
};

export default Home;
