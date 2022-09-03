import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.elementBg};
  z-index: 5;
  border-bottom: 0.1rem solid #e7e7e7;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 10%);
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 95%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const SiteLogo = styled.a`
  display: flex;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s;

  li {
    a {
      color: ${(props) => props.theme.color.body};
      font-weight: 700;
    }

    a:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    max-height: ${(props) => (props.isMenuOpen ? "100vh" : "0")};
    opacity: ${(props) => (props.isMenuOpen ? "1" : "0")};
    overflow: hidden;
  }
`;

const ToggleBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }

  mobileMenuHandler = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Header>
        <HeaderWrapper>
          <SiteLogo href="http://localhost:3000/">
            <img src={logo} alt="" />
          </SiteLogo>
          <ToggleBtn onClick={this.mobileMenuHandler}>
            <FaBars />
          </ToggleBtn>
          <NavMenu isMenuOpen={isMenuOpen}>
            <li>
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/">Products</a>
            </li>
            <li>
              <a href="http://localhost:3000/">About Us</a>
            </li>
          </NavMenu>
        </HeaderWrapper>
      </Header>
    );
  }
}
