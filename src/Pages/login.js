import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleUserInfo = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [e.target.name]: value,
    });
  };

  const handleUserLoginInfo = (e) => {
    e.preventDefault();
    setUserInfo({
      email: "",
      password: "",
    });
  };

  const { email, password } = userInfo;

  return (
    <>
      <div className="form-section">
        <div className="form-container">
          <h1 className="heading">Log In</h1>
          <form className="form" onSubmit={handleUserLoginInfo}>
            <div className="input-group">
              <label className="label">Enter your Email:</label>
              <input
                required
                className="input"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => handleUserInfo(e)}
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
                onChange={(e) => handleUserInfo(e)}
              ></input>
            </div>
            <button className="button">Log In</button>
          </form>
          <div className="last-line">
            Are You New User Then SignUp Here <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
