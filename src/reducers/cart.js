const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return { ...state, [action.productId]: action.productCount };
    case "REMOVE_FROM_CART":
      const newState = { ...state }
      delete newState[action.id];
      return newState
    case "CLEAR_CART":
      return {};
    default:
      return state;
  }
};
export default cardReducer;
