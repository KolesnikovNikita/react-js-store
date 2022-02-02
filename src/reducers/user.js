const initialState = {
  name: "Bartholomew",
  surname: "Roberts",
  id: 1,
  age: 39,
  email: "bartolomewSwag@mail.com",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PROFILE":
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        email: action.email,
      };
    default:
      return state;
  }
};

export default user;
