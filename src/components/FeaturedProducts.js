import React from "react";
import { Title } from ".";
import { featureddata } from "../data";

const FeaturedProducts = () => {
  return (
    <section id="featured" className="featured-products">
      <Title title="featured categories" />
      <div className="featured-layout section-center">
        {featureddata.map((item, index) => {
          return (
            <div key={index} className={`featured-images`}>
              <div className="featured-text">
                <h1>{item.title}</h1>
                <p className="featured-text-p">{item.desc}</p>
              </div>
              <div style={{ position: "relative" }}>
                <img src={item.image} alt="f-img" className="featured-image" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
