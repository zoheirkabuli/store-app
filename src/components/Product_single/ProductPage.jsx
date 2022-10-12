import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const { image, title, description, price, category } = products[
    productId - 1
  ];

  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p> {description} </p>
      <p> {category} </p>
      <p> {price} </p>
    </div>
  );
};

export default ProductPage;
