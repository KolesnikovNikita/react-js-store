export const addToCart = (count, id) => ({
  type: 'ADD_TO_CARD',
  productId: id,
  productCount: count,
})

export const addToFavorite = (value, id) => ({
  type: 'ADD_TO_FAVORITE',
  productId: id,
  productCount: value
})

export const deleteFromFavorite = (id) => ({
  type: 'DELETE_FROM_FAVORITE',
  productId: id,
})

