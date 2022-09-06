import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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
  } ;
`;

export default class ProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("/products")
      .then((result) => this.setState({ products: result }));
  }

  render() {
    const { products } = this.state;
    return (
      <Cards>
        {products.length ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <Loading />
        )}
      </Cards>
    );
  }
}
