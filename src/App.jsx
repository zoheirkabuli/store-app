import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// components
import MainHeader from "./components/MainHeader";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products_Archive/ProductsPage";
import ProductPage from "./components/Product_single/ProductPage";
import MainFooter from "./components/MainFooter";

export default class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>
          </Routes>
        </div>
        <MainFooter />
      </>
    );
  }
}
