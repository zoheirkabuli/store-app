export const isInCart = (cart, id) => {
  const result = !!cart.selectedItems.find((item) => item.id === id);

  return result;
};
export const quantityCount = (cart, id) => {
  const index = cart.selectedItems.findIndex((item) => item.id === id);

  if (index === -1) {
    return false;
  } else {
    return cart.selectedItems[index].quantity;
  }
};
