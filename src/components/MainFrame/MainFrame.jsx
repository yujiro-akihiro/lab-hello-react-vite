import React from "react";
import "./MainFrame.css";

function MainFrame({ children }) {
  return <div className="mainFrame">{children}</div>;
}

export default MainFrame;

// div mainFrame as container of "children" = <NavBar />, <Header />, <AboutReact />
// margin set up on MainFrame.css = 20,40,20,40 px