import Header from "../Components/header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../Actions/removeAllItems";
import { incrementItem } from "../Actions/incrementItem";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CartItemList = useSelector(
    (state) => state.productCartReducers.productCart
  );
  return (
    <>
      <Header />
      <div className="header-button">
        <button
          className="add-button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Add Item to cart
        </button>
        <button
          className="add-button"
          onClick={() => {
            dispatch(removeAllItems());
          }}
        >
          Rmove all items
        </button>
      </div>
      <div className="cart-container">
        <ul className="cartitem-list">
          <div className="cart-header">
            <h3 className="cart-heading">Groceries Basket : 20 </h3>
            <span className="cart-heading">₹ 2000 </span>
          </div>
          {CartItemList.map((item, index) => {
            return (
              <li className="cart-item" key={index}>
                <div className="left-image">
                  <img src={item?.productimgUrl} alt="product-image" />
                </div>
                <div className="right-block">
                  <p className="product-para">{item?.name}</p>
                  <span className="price">Price : ₹ {item?.price} </span>
                  <span className="mrp">MRP : ₹ {item?.mrp}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="rightBlock">
          <h3 className="cart-heading">Payment Details </h3>
          <div className="flex">
            <span>Total Amount:</span>
            <span className="price">₹ 1200</span>
          </div>
          <button className="add-button">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
