import React from "react";
import ProductsHeader from "../components/ProductsHeader";
import ProductsList from "../components/ProductsList";
import ProductSort from "../components/ProductSort";

const ProductsPage = () => {
  return (
    <main>
      <ProductsHeader />
      <div className="products">
        <div className="products-page-layout section-center">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProductSort />
          </div>
          <div>
            <ProductsList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
