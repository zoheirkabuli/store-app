import React, { Component } from "react";
import styled from "styled-components";
import HeroBg from "../../images/banner.jpg";

const Hero = styled.div`
  background-image: url(${HeroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
`;

const PageTitle = styled.h1`
  font-size: 11rem;
  margin: 0;
  font-weight: 900;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 9rem;
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0;
  width: 80%;
  font-size: 6rem;
  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`;

const Span = styled.span`
  color: #61dafb;
  font-weight: bold;
`;

export default class HeroHome extends Component {
  render() {
    return (
      <Hero>
        <PageTitle>Zoheir Store</PageTitle>
        <Text>
          We're Learning <Span>React.Js</Span>
        </Text>
      </Hero>
    );
  }
}
