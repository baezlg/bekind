import React from "react";
import WorkingArea from "../../components/workingArea/WorkingArea";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import "./Article.scss";

const Article = () => {
  return (
    <div className="article">
      <Header />
      <WorkingArea page="Article" />
      <Footer />
    </div>
  );
};

export default Article;
