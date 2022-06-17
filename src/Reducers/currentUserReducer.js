const intialState = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const CurretUserReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      const { email, password } = action.payload.user;
      return {
        ...state,
        email: email,
        password: password,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default CurretUserReducer;
