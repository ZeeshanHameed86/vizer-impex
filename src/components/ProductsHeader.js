import React from "react";
import { useProductsContext } from "../context/products_context";

const ProductsHeader = () => {
  const { m_category, s_category } = useProductsContext();

  return (
    <section
      className="products-header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="products-header-detail">
        <h1>
          {m_category}
          {s_category && ` / ${s_category}`}
        </h1>
      </div>
    </section>
  );
};

export default ProductsHeader;
