import React from "react";
import image from "../assets/Image-Not-Available.png";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

const ProductsCard = ({ product }) => {
  const { getSingleProduct } = useProductsContext();

  if (product) {
    return (
      <div
        className="product-card"
        onClick={() => getSingleProduct(product.id)}
      >
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <div>
            {product.image ? (
              <img
                src={product.image[0].url}
                alt=""
                className="product-card-img"
              />
            ) : (
              <img src={image} alt="" className="product-card-img" />
            )}
          </div>
          <h2>{product.name}</h2>
          <p>Article # {product.article_no}</p>
        </Link>
      </div>
    );
  }
};

export default ProductsCard;
