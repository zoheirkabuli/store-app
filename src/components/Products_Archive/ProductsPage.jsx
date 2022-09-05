import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

// components

import Card from "../Card";

const Cards = styled.div`
  align-self: center;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
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
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Cards>
    );
  }
}
