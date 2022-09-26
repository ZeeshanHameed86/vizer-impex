import React, { useState, useReducer, useEffect, useContext } from "react";
import reducer from "../reducers/products_reducer";

const ProductsContext = React.createContext();

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyc3bVmFH9EVFiUh" }).base(
  "appQhpSToVCVBjSeR"
);

const table = base("products");

const initialState = {
  all_products: [],
  filtered_products: [],
  single_product: {},
  loading: true,
  default_filter: "Casual Wear",
  m_category: "Casual Wear",
  s_category: "",
  toggle_menu: false,
  menu: [false, false, false, false, false],
  //menu: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);

  const getRecords = async () => {
    await table.select().eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          products.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        dispatch({ type: "PRODUCTS", payload: products });
      }
    );
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_PRODUCT_START" });
    await table.find(id, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      dispatch({ type: "SINGLE_PRODUCT", payload: record });
    });
  };

  const clickFilterProducts = (mainCategory, subCategory) => {
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: { mainCategory, subCategory },
    });
  };

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_BAR_MENU" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const toggleSortMenu = (index) => {
    dispatch({ type: "TOGGLE_SORT_MENU", payload: index });
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        clickFilterProducts,
        getSingleProduct,
        toggleSortMenu,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
