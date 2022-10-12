import React, { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  selectedItems: [],
  totalItems: 0,
  totalPrice: 0,
  checkout: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.product.id)) {
        state.selectedItems.push({ ...action.product, quantity: 1 });
      }

      return { ...state, selectedItems: [...state.selectedItems] };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.product.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.product.id
      );

      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.product.id
      );

      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        totalItems: 0,
        totalPrice: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        totalItems: 0,
        totalPrice: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
