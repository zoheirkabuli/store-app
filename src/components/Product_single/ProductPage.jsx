import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const product = products[productId - 1];

  return (
    <div>
      {product ? (
        <>
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
          <p> {product.description} </p>
          <p> {product.category} </p>
          <p> {product.price} </p>ss
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductPage;
