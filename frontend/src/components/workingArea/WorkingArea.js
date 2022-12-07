import React from "react";
import "./WorkingArea.scss";

const WorkingArea = ({ page }) => {
  return (
    <div className="workingArea">
      <h1>{page} Page</h1>
      <h3>This page is not available at the moment</h3>
    </div>
  );
};

export default WorkingArea;
