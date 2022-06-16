import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../Actions/addUser";

const SignUp = () => {
  const dispatch = useDispatch();
  const [signupUser, setSignupUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    age: Number,
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const value = e.target.value;
    setSignupUser({
      ...signupUser,
      id: uuidv4(),
      [e.target.name]: value,
    });
  };
  const handleSignupUser = (e) => {
    e.preventDefault();
    dispatch(addUser(signupUser));
    setSignupUser({
      id: "",
      firstname: "",
      lastname: "",
      age: Number,
      email: "",
      password: "",
    });
  };
  const { id, firstname, lastname, age, email, password } = signupUser;
  return (
    <>
      <div className="form-section">
        <div className="form-container">
          <h1>Signup Form</h1>
          <form className="form" onSubmit={handleSignupUser}>
            <input
              className="input"
              type="hidden"
              placeholder="is for id"
              value={id}
            ></input>
            <div className="input-group">
              <label className="label">Enter your Firstname:</label>
              <input
                required
                className="input"
                type="text"
                placeholder="Enter your Firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => {
                  handleInput(e);
                }}
              ></input>
            </div>
            <div className="input-group">
              <label className="label">Enter your Lastname:</label>
              <input
                required
                className="input"
                type="text"
                placeholder="Enter your lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => {
                  handleInput(e);
                }}
              ></input>
            </div>
            <div className="input-group">
              <label className="label">Enter your Age:</label>
              <input
                required
                className="input"
                type="number"
                placeholder="Enter your age"
                name="age"
                value={age}
                onChange={(e) => {
                  handleInput(e);
                }}
              ></input>
            </div>
            <div className="input-group">
              <label className="label">Enter your Email:</label>
              <input
                required
                className="input"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => {
                  handleInput(e);
                }}
              ></input>
            </div>
            <div className="input-group">
              <label className="label">Enter your password:</label>
              <input
                required
                className="input"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => {
                  handleInput(e);
                }}
              ></input>
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
