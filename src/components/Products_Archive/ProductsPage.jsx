import React, { useContext } from "react";
import styled from "styled-components";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

// components

import Card from "../Card";
import Loading from "../Loading";

const Cards = styled.div`
  align-self: center;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductsPage = () => {
  const products = useContext(ProductsContext);
  return (
    <Cards>
      {products.length ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <Loading />
      )}
    </Cards>
  );
};

export default ProductsPage;
