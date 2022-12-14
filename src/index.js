import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AnimProvider } from "./context/anim_context";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <AnimProvider>
        <App />
      </AnimProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
