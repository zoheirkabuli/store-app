import React, { Component } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProdCard = styled.div`
  background-color: #ececec;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: 5px 5px 10px rgb(189 189 189);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  aspect-ratio: 3/2;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProdTitle = styled(Link)`
  margin: 0;
  color: ${(props) => props.theme.color.body};
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

const ProdCost = styled.p`
  margin: 0;
  background-color: ${(props) => props.theme.color.primary};
  align-self: flex-start;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const ProdCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Minus = styled(FaMinus)`
  opacity: ${(props) => (props.number ? "1" : "0.25")};
  cursor: ${(props) => (props.number ? "pointer" : "auto")};
`;

const Plus = styled(FaPlus)`
  cursor: pointer;
`;

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.product.id,
      name: props.product.title,
      photo: props.product.image,
      cost: props.product.price,
      count: 0,
    };
  }

  minusHandler = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  plusHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { id, photo, name, cost } = this.state;
    const { count } = this.state;

    return (
      <ProdCard>
        <Image src={photo} />
        <CardBody>
          <ProdTitle to={`/products/${id}`}>
            {name}
          </ProdTitle>
          <ProdCost>
            {cost} $ {count ? `* ${count} = ${Number(cost) * count} $` : ""}
          </ProdCost>
          <ProdCounter>
            <Minus number={count} onClick={this.minusHandler} />
            {count}
            <Plus onClick={this.plusHandler} />
          </ProdCounter>
        </CardBody>
      </ProdCard>
    );
  }
}
