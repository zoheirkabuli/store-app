import React, { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

// components
import MainLayout from "./components/MainLayout";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products_Archive/ProductsPage";
import ProductPage from "./components/Product_single/ProductPage";
import CartPage from "./components/Cart/CartPage";



const newRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <RouterProvider router={newRouter} />
        </CartContextProvider>
      </ProductsContextProvider>
    );
  }
}
