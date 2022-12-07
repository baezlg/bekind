import React from "react";
import WorkingArea from "../../components/workingArea/WorkingArea";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import "./Event.scss";

const Event = () => {
  return (
    <div className="event">
      <Header />
      <WorkingArea page="Event" />
      <Footer />
    </div>
  );
};

export default Event;
