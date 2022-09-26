import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section className="services">
      <div className="services-layout section-center">
        {services.map((item, index) => {
          const { title, desc, icon } = item;
          return (
            <div
              key={index}
              style={{ textAlign: "center", paddingTop: "3rem" }}
            >
              {icon}
              <h2
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  paddingBottom: "0.5rem",
                }}
              >
                {title}
              </h2>
              <p className="services-desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
