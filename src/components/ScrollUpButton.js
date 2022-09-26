import React from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollUpButton = () => {
  return (
    <a href="#nav-socials">
      <div className="scroll-container">
        <FiArrowUp className="scroll-up-btn" />
      </div>
    </a>
  );
};

export default ScrollUpButton;
