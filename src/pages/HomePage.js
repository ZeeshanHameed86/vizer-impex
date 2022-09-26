import React from "react";
import {
  Header,
  AboutUs,
  FeaturedProducts,
  Products,
  ContactUs,
} from "../components";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <main>
      <Header />
      <AboutUs />
      <Services />
      <FeaturedProducts />
      <Products />
      <ContactUs />
    </main>
  );
};

export default HomePage;
