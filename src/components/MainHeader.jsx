import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

// icons
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

// context

import { CartContext } from "../context/CartContextProvider";

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
  gap: 3rem;
  width: 95%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const SiteLogo = styled(Link)`
  display: flex;
  @media (max-width: 768px) {
    order: 2;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s;
  margin-inline-start: auto;

  li:nth-child(1) {
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    max-height: ${(props) => (props.isMenuOpen ? "100vh" : "0")};
    opacity: ${(props) => (props.isMenuOpen ? "1" : "0")};
    overflow: hidden;
    order: 4;
  }
`;

const LinkTo = styled(Link)`
  color: ${(props) => props.theme.color.body};
  font-weight: 700;

  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

const ToggleBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    order: 3;
  }
`;

const Cart = styled(Link)`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const CartIcon = styled(FaShoppingBag)`
  fill: ${(props) => props.theme.color.primary};
  width: 2.5rem;
  height: 2.5rem;
`;

const TotalItems = styled.p`
  margin: 0;
  display: flex;
  font-size: 1rem;
  width: 2rem;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 50%;
  font-weight: bold;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  right: -8px;
  top: -5px;
`;

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const mobileMenuHandler = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <Header>
      <HeaderWrapper>
        <SiteLogo to="/">
          <img src={logo} alt="" />
        </SiteLogo>
        <ToggleBtn onClick={mobileMenuHandler}>
          <FaBars />
        </ToggleBtn>
        <NavMenu isMenuOpen={isMenuOpen}>
          <li>
            <LinkTo to="/">Home</LinkTo>
          </li>
          <li>
            <LinkTo to="/products">Products</LinkTo>
          </li>
          <li>
            <LinkTo to={"/"}>About Us</LinkTo>
          </li>
        </NavMenu>
        <Cart to={"cart"}>
          <CartIcon />
          <TotalItems>{cart.totalItems}</TotalItems>
        </Cart>
      </HeaderWrapper>
    </Header>
  );
};

export default MainHeader;
