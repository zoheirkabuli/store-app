import React, { useContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// helper

import { isInCart, quantityCount } from "../helper/functions";

// context

import { CartContext } from "../context/CartContextProvider";

// icons

import { FaTrash } from "react-icons/fa";

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
  flex: 1 0 0;
  justify-content: space-between;
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
  margin-top: auto;
`;

const BtnHolder = styled.div`
  display: flex;
  gap: 2rem;
`;

const AddToCart = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  border: 0;
  color: white;
  background-color: ${(props) => props.theme.color.primary};
`;

const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  border: 0;
  color: white;
  background-color: ${(props) => props.theme.color.primary};
`;

const Quantity = styled.p`
  margin: 0;
  align-self: center;
`;

const Card = (props) => {
  const { cart, cartDispatch } = useContext(CartContext);

  const { id, image: photo, title: name, price: cost } = props.product;

  return (
    <ProdCard>
      <Image src={photo} />
      <CardBody>
        <ProdTitle to={`/products/${id}`}>{name}</ProdTitle>
        <ProdCost>{cost} $</ProdCost>
        <BtnHolder>
          {quantityCount(cart, id) > 1 && (
            <Btn
              onClick={() =>
                cartDispatch({ type: "DECREASE", product: props.product })
              }
            >
              -
            </Btn>
          )}

          {quantityCount(cart, id) === 1 && (
            <Btn
              onClick={() =>
                cartDispatch({ type: "REMOVE_ITEM", product: props.product })
              }
            >
              <FaTrash />
            </Btn>
          )}
          {quantityCount(cart, id) && (
            <Quantity>{quantityCount(cart, id)}</Quantity>
          )}
          {isInCart(cart, id) ? (
            <Btn
              onClick={() =>
                cartDispatch({ type: "INCREASE", product: props.product })
              }
            >
              +
            </Btn>
          ) : (
            <AddToCart
              onClick={() =>
                cartDispatch({ type: "ADD_ITEM", product: props.product })
              }
            >
              Add to Cart
            </AddToCart>
          )}
        </BtnHolder>
      </CardBody>
    </ProdCard>
  );
};

export default Card;
