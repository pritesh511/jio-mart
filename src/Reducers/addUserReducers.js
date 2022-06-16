import { Types } from "../Constants/actionTypes";

const intialState = {
  user: [
    {
      id: 1,
      firstname: "pritesh",
      lastname: "makasana",
      age: 22,
      email: "pritesh@gmail.com",
      password: "pritesh123",
    },
    {
      id: 2,
      firstname: "sandip",
      lastname: "patel",
      age: 23,
      email: "sandip@gmail.com",
      password: "sandip123",
    },
  ],
};

const AddUserReducers = (state = intialState, action) => {
  switch (action.type) {
    case Types.ADD_USER:
      const { id, firstname, lastname, age, email, password } =
        action.payload.user;
      return {
        user: [
          ...state.user,
          {
            id: id,
            firstname: firstname,
            lastname: lastname,
            age: age,
            email: email,
            password: password,
          },
        ],
      };
    default:
      return state;
  }
};

export default AddUserReducers;
