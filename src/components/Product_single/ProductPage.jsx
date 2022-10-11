import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const product = products[productId - 1];
  return <div>{product.title}</div>;
};

export default ProductPage;
