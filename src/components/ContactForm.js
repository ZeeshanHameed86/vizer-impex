import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="4"
          placeholder="Message"
          style={{ resize: "none" }}
        ></textarea>
      </form>
      <button type="button" className="form-btn">
        send
      </button>
    </div>
  );
};

export default ContactForm;
