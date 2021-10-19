export const addToCart = (count, id) => ({
  type: 'ADD_TO_CARD',
  newProduct: {
    count, id
  },
});

export const deleteFromCard = (id) => ({
  type: 'DELETE_FROM_CARD',
  id
})

