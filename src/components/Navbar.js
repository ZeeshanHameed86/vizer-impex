import React, { useState } from "react";
import NavSocials from "./NavSocials";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProductsContext } from "../context/products_context";
import { filterProducts, filterCategories } from "../helpers";
import { AiOutlineDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [productList, setShowProductList] = useState(false);
  const {
    all_products,
    clickFilterProducts,
    toggleSidebar,
    toggle_menu,
    closeSidebar,
  } = useProductsContext();

  const { mainCategory } = filterProducts(all_products);

  const showProductList = () => {
    setShowProductList(true);
  };
  const notShowProductList = () => {
    setShowProductList(false);
  };

  return (
    <nav>
      <div className={`${toggle_menu ? "sidebar show-sidebar" : "sidebar"}`}>
        <button
          type="button"
          className="close-btn"
          onClick={() => closeSidebar()}
        >
          <IoClose />
        </button>
        <Sidebar />
      </div>

      <div className="nav-top">
        <NavSocials />
      </div>
      <section
        className={`${
          productList ? "show-our-products our-products" : "our-products"
        }`}
        onMouseEnter={() => showProductList()}
        onMouseLeave={() => notShowProductList()}
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          className="our-products-layout"
          style={{
            gridTemplateColumns: `repeat(${mainCategory.length},1fr)`,
          }}
        >
          {mainCategory.map((item, index) => {
            const subCategories = filterCategories(all_products, item);
            return (
              <div key={index}>
                <button
                  onClick={() => clickFilterProducts(item)}
                  className="our-products-categories our-products-main-categories"
                >
                  <Link to="/products" className="our-products-link">
                    {item}
                  </Link>
                </button>

                {subCategories.map((item2, index) => (
                  <div key={index}>
                    <motion.button
                      onClick={() => clickFilterProducts(item, item2)}
                      whileHover={{ x: 10 }}
                      className="our-products-categories our-products-sub-categories "
                    >
                      <Link to="/products" className="our-products-link">
                        {item2}
                      </Link>
                    </motion.button>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
      <section className="navbar">
        <div style={{ justifyContent: "flex-start" }}>
          <Link to="/">
            <img src={logo} alt="" style={{ width: "80%" }} />
          </Link>
        </div>
        <FaBars className="menu-bars" onClick={() => toggleSidebar()} />

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <Link
            to="/products"
            className={`${
              productList ? "nav-link nav-link-border" : "nav-link"
            }`}
            onMouseEnter={() => showProductList()}
            onMouseLeave={() => notShowProductList()}
          >
            Our Products
            <AiOutlineDown />
          </Link>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
