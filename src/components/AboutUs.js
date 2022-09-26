import React from "react";
import { Title } from ".";

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <Title title="about us" />
      <div className="about-us-layout section-center">
        <iframe
          className="about-us-video"
          title="about-use-video"
          width="520"
          height="300"
          src="https://www.youtube.com/embed/c1O0sdApUq8"
          style={{ border: "none", justifySelf: "start" }}
        />
        <div className="about-us-detail">
          <h2
            style={{
              color: "white",
              textTransform: "capitalize",
              marginBottom: "1rem",
            }}
          >
            vizer impex
          </h2>
          <p
            className="about-us-text"
            style={{
              color: "white",
              lineHeight: "1.5rem",
            }}
          >
            We are professional manufacturers and exporters of Sports, apparels.
            We are making garments in a different type of stuffs in various
            colors, quality and design as per our customer’s requirement. We are
            currently exporting these items to EUROPE, AUSTRALIA & USA. Since we
            are the manufacturers, we can offer you the good quality with
            confirmed timely delivery. With professional manufacturing and
            design team we will provide you exact products as required. Contact
            us for more info.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
