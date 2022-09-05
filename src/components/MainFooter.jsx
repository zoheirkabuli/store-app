import React, { Component } from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const CopyRight = styled.p`
  margin: 0;
  font-size: 2rem;
  color: white;
`;

export default class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <CopyRight>© All Rights Reserved 2022</CopyRight>
      </Footer>
    );
  }
}
