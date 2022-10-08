import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../Card";

// Context
import { ProductsContext } from "../../context/ProductsContextProvider";

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  flex-wrap: wrap;

  & > * {
    width: 20%;
  }

  @media screen and (max-width: 768px) {
    & > * {
      width: 45%;
    }
  }
`;

const HomeCards = () => {
  const products = useContext(ProductsContext);
  return (
    <Cards>
      {products.slice(0, 4).map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Cards>
  );
};

export default HomeCards;
