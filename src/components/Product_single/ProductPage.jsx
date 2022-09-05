import React, { Component } from "react";
import WithRouter from "../WithRouter";
import axios from "axios";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: Number(props.params.productId),
      product: {},
    };
  }

  componentDidMount() {
    axios
      .get(`/products/${this.state.productId}`)
      .then((result) => this.setState({ product: result }));
  }
  render() {
    const { product } = this.state;
    return <div>{product.title}</div>;
  }
}

export default WithRouter(ProductPage);
