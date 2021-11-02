const initialState = {
  name: "Bartholomew",
  surname: "Roberts",
  id: 1,
  age: 39,
  eMail: "bartolomewSwag@mail.com",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "EDIT_SURNAME":
      return {
        ...state,
        surname: action.surname,
      };
    case "EDIT_EMAIL":
      return {
        ...state,
        eMail: action.eMail,
      };
    default:
      return state;
  }
};

export default user;
