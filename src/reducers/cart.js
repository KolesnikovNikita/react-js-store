const cardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return { ...state, [action.productId]: action.productCount };
    case "DELETE_FROM_CARD":
      const { id } = action;
      for (let key in state) {
        if (key === id) {
          return {
            ...state,
            count: 0,
          };
        }
      }
    case "RESET_BASKET":
      return (state = {});
    default:
      return state;
  }
};
export default cardReducer;
