export const addToCart = (count, id) => {
  return {
    type: 'ADD_TO_CARD',
    productId: id,
    productCount: count,
  }
};

export const deleteFromCard = (id) => ({
  type: 'DELETE_FROM_CARD',
  id
})

export const resetBasket = () => ({
  type: 'RESET_BASKET',
})