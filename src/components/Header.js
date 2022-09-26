import React from "react";
import ImageSlider from "./ImageSlider";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="mobile-header">
        <h1 style={{ fontSize: "3rem" }}>vizer impex</h1>
        <h2 style={{ color: "white", fontSize: "1.2rem" }}>
          BEST CHOICE BEST QUALITY
        </h2>
      </div>
      <div className="full-screen-header">
        <ImageSlider />
      </div>
    </header>
  );
};

export default Header;
