import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavSocials = () => {
  return (
    <div className="nav-socials" id="nav-socials">
      <div className="nav-socials-layout">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AiOutlinePhone
            style={{ marginRight: ".3rem" }}
            className="nav-social-icon"
          />{" "}
          <h3 style={{ marginRight: "1.5rem" }}>+92-316-6123456</h3>
          <AiOutlineMail
            style={{ marginRight: ".3rem" }}
            className="nav-social-icon"
          />{" "}
          <h3>vizerimpex@gmail.com</h3>
        </div>
        <div>
          <FaTwitter className="nav-social-icon" />
          <FaFacebook className="nav-social-icon" />
          <FaInstagram className="nav-social-icon" />
          <FaWhatsapp className="nav-social-icon" />
        </div>
      </div>
    </div>
  );
};

export default NavSocials;
