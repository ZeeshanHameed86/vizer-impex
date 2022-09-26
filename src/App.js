import React from "react";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import ScrollUpButton from "./components/ScrollUpButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProductPage />} />
      </Switch>
      <Footer />
      <ScrollUpButton />
    </Router>
  );
};

export default App;
