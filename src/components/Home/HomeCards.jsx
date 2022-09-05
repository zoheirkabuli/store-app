import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

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

export default class HomeCards extends Component {
  constructor() {
    super();
    this.state = {
      numberOfProds: 4,
      products: [],
    };
  }
  componentDidMount() {
    axios.get(`/products?limit=${this.state.numberOfProds}`).then((result) =>
      this.setState(
        {
          products: result,
        },
        () => console.log(this.state.products)
      )
    );
  }
  render() {
    const { products } = this.state;
    return (
      <Cards>
        {products.map((product) => (
          <Card
            key={product.id}
            photo={product.image}
            name={product.title}
            cost={product.price}
          />
        ))}
      </Cards>
    );
  }
}
