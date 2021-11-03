const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return [...state, action.productId];
    case "DELETE_FROM_FAVORITE":
      return state.filter((id) => id !== action.productId);
    default:
      return state;
  }
};
export default favoriteReducer;
