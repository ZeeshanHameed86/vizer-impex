import React, { useEffect } from "react";
import ProductsHeader from "../components/ProductsHeader";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SingleProductPage = () => {
  const { id } = useParams();
  const { getSingleProduct, single_product, loading } = useProductsContext();

  console.log(single_product);

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  if (loading) {
    return (
      <div>
        <ProductsHeader />
        <div
          className="products"
          style={{
            background: "#333333",
            width: "100%",
            height: "72vh",
            paddingBottom: "3rem",
            paddingTop: "15rem",
          }}
        >
          <Loading />
        </div>
      </div>
    );
  }

  const {
    fields: { name, article_no, image, description },
  } = single_product;

  return (
    <div>
      <ProductsHeader />
      <div className="single-product">
        <div
          className="single-product-layout section-center"
          style={{ height: "100%" }}
        >
          <div className="single-product-img-container">
            <div className="single-product-img-btn-layout">
              <button
                type="button"
                className="form-btn"
                style={{
                  width: "14rem",
                  margin: "2rem 0",
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/products">
                  Back To Products
                </Link>
              </button>
              <img className="single-product-img" src={image[0].url} alt="" />
            </div>
          </div>
          <div className="single-product-details">
            <h1>{name}</h1>
            <p
              style={{
                color: "white",
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              Article #{article_no}
            </p>
            <p className="single-product-desc">{description}</p>
            <button type="button" className="form-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
