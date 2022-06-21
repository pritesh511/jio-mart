import SignUp from "./Pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import { useSelector } from "react-redux";
import Cart from "./Pages/cart";
import Order from "./Pages/order";

const App = () => {
  const curentUserStatus = useSelector(
    (state) => state.CurretUserReducer.isLoggedIn
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {curentUserStatus && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
