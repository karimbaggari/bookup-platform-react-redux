// actions/authActions.js
const initialState = {
  isLogged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};
