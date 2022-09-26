import React from "react";
import { Title } from ".";
import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";
import ContactMap from "./ContactMap";

const ContactUS = () => {
  return (
    <section id="contact" className="contact-us">
      <Title title="contact us" />
      <section className="contact-us-detail section-center">
        <ContactForm />
        <ContactIcons />
        <ContactMap />
      </section>
    </section>
  );
};

export default ContactUS;
