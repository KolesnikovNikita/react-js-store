const cardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      const { newProduct } = action;
      return [...state, newProduct];
    case "DELETE_FROM_CARD":
      const { id } = action;
      var newObject = {};
      return state.map((element) => {
        if (element.id === id) {
          newObject = {
            ...element,
            count: 0,
          };
          return newObject;
        } else {
          return element;
        }
      });
    default:
      return state;
  }
};
export default cardReducer;
