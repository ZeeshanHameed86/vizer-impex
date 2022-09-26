import React from "react";
import { useProductsContext } from "../context/products_context";
import ProductsCard from "./ProductsCard";

const ProductsList = () => {
  const { filtered_products } = useProductsContext();

  return (
    <section className="products-list-layout">
      {filtered_products.map((item, index) => {
        return <ProductsCard key={index} product={item} />;
      })}
    </section>
  );
};

export default ProductsList;
