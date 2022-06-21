import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Actions/logOut";
import { useNavigate, Link } from "react-router-dom";
import { handleSearch } from "../Pages/dashboard";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curentUserEmail = useSelector((state) => state.CurretUserReducer.email);
  const CartItem = useSelector((state) => state.productCartReducers.cart);
  const userCartData = CartItem?.filter(
    (item) => item?.userEmail === curentUserEmail
  );
  const countCartItem = userCartData?.length;
  return (
    <>
      <div className="header">
        <div>
          <Link to="/dashboard">
            <img
              src="https://www.jiomart.com/assets/version16548039193/smartweb/images/jiomart_logo_beta.svg"
              alt="icon"
            />
          </Link>
        </div>
        {children}
        <ul className="header-list">
          <li>
            <div className="user-icon">
              <AccountCircleIcon style={{ fontSize: "24px", color: "black" }} />
              <span>{curentUserEmail}</span>
            </div>
          </li>
          <li>
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={countCartItem} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/order" className="order-btn">
              My Order
            </Link>
          </li>
          <li>
            <div
              className="logout-icon"
              onClick={() => {
                dispatch(logoutUser());
                navigate("/login");
              }}
            >
              <LogoutIcon style={{ color: "white" }} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
