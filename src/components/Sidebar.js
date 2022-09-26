import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { filterProducts } from "../helpers";
import ContactIcons from "./ContactIcons";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const { all_products, closeSidebar, clickFilterProducts } =
    useProductsContext();

  const { mainCategory } = filterProducts(all_products);

  return (
    <div className="sidebar-details">
      <Link to="/" className="sidebar-home-btn" onClick={() => closeSidebar()}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillHome style={{ marginRight: "0.5rem" }} /> <span>Home</span>
        </div>
      </Link>
      <div className="sidebar-main-btns">
        {mainCategory.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                closeSidebar();
                clickFilterProducts(item);
              }}
              className="our-products-categories our-products-main-categories"
            >
              <Link to="/products" className="our-products-link">
                {item}
              </Link>
            </button>
          );
        })}
      </div>
      <ContactIcons />
    </div>
  );
};

export default Sidebar;
