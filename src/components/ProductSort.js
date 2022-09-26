import React, { useState } from "react";
import { useProductsContext } from "../context/products_context";
import { filterProducts, filterCategories } from "../helpers";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { motion } from "framer-motion";

const buttons = {
  hidden: { opacity: 0, marginLeft: 0 },
  visible: {
    opacity: 1,
    marginLeft: "3rem",
    transition: { ease: "easeInOut" },
  },
};

const ProductSort = () => {
  //const [menu, setMenu] = useState([false, false, false, false, false]);
  const {
    all_products,
    clickFilterProducts,
    toggleSortMenu,
    m_category,
    s_category,
    menu,
  } = useProductsContext();

  //console.log(menu);

  const { mainCategory } = filterProducts(all_products);

  const onClickSortBtn = (item, index) => {
    //setMenu((old) => [...old, (old[index] = !old[index])]);
    toggleSortMenu(index);
    clickFilterProducts(item);
  };

  return (
    <div style={{ width: "100%" }} className="sort-btn-list">
      {mainCategory.map((item, index) => {
        const subCategories = filterCategories(all_products, item);
        return (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <div
              className="sort-category-div"
              onClick={() => {
                onClickSortBtn(item, index);
              }}
            >
              <motion.button
                type="button"
                className={`${
                  item === m_category
                    ? "products-sort-btn background"
                    : "products-sort-btn "
                }`}
              >
                {item}
                {menu[index] ? (
                  <AiFillCaretUp style={{ marginLeft: "1rem" }} />
                ) : (
                  <AiFillCaretDown style={{ marginLeft: "1rem" }} />
                )}
              </motion.button>
            </div>
            {menu[index] &&
              subCategories.map((item2, index) => {
                return (
                  <motion.div
                    key={index}
                    className="sort-category-div"
                    onClick={() => clickFilterProducts(item, item2)}
                    variants={buttons}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.button
                      key={index}
                      type="button"
                      className={`${
                        item2 === s_category
                          ? "products-sort-btn background"
                          : "products-sort-btn "
                      }`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      {item2}
                    </motion.button>
                  </motion.div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductSort;
