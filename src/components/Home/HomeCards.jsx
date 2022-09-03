import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

// images
import Iphone12 from "../../images/iphone12.jpg";
import Iphone11 from "../../images/iphone11.jpg";
import Iphone10 from "../../images/iphone10.jpg";
import S21 from "../../images/s21.jpg";

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
  render() {
    return (
      <Cards>
        <Card photo={Iphone12} name={"IPhone 12"} cost={500} />
        <Card photo={Iphone11} name={"IPhone 11"} cost={400} />
        <Card photo={Iphone10} name={"IPhone 10"} cost={300} />
        <Card photo={S21} name={"S21"} cost={200} />
      </Cards>
    );
  }
}
