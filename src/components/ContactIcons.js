import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

const ContactIcons = () => {
  return (
    <section className="contact-middle contact-mobile-view">
      <div className="contact-mobile-icons">
        <FaPhoneAlt className="contact-react-icon" />
        <h3>+92-316-6123456</h3>
      </div>
      <div className="contact-icon-text">
        <MdEmail className="contact-react-icon" />
        <h3>vizerimpex@gmail.com</h3>
      </div>
      <div className="social-media-icons">
        <GrFacebookOption className="contact-react-icon2" />
        <TiSocialTwitter className="contact-react-icon2" />
        <AiOutlineInstagram className="contact-react-icon2" />
        <FaWhatsapp className="contact-react-icon2" />
      </div>
    </section>
  );
};

export default ContactIcons;
