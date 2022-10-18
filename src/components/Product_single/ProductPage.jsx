import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

// style

const Product = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  gap: 2rem;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgb(189 189 189);
  margin-block: auto;
  padding: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProdImg = styled.img`
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProdContet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 0 0;
`;

const ProdTitle = styled.h1`
  margin: 0;
`;

const ProdDetail = styled.p`
  margin: 0;
`;

const ProductPage = () => {
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const product = products[productId - 1];

  return (
    <>
      {product ? (
        <Product>
          <ProdImg src={product.image} alt={product.title} />
          <ProdContet>
            <ProdTitle>{product.title}</ProdTitle>
            <ProdDetail> {product.description} </ProdDetail>
            <p> Category: {product.category} </p>
            <p> {product.price} </p>
          </ProdContet>
        </Product>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductPage;
