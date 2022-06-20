import Header from "../Components/header";
import { useDispatch, useSelector } from "react-redux";
import { productCart } from "../Actions/addToCart";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../Actions/removeAllItems";
import emptyImage from "../Images/empty_image.png";
import { decrementItem } from "../Actions/decrementItem";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const curentUserEmail = useSelector((state) => state.CurretUserReducer.email);
  const CartItemList = useSelector((state) =>
    state.productCartReducers.cart.filter(
      (item) => item?.userEmail === curentUserEmail
    )
  );

  const price = CartItemList?.reduce((a, b) => a + b?.qty * b?.price, 0);

  const mrpPrice = CartItemList?.reduce((a, b) => a + b?.qty * b?.mrp, 0);

  const saveAmount = mrpPrice - price;

  const countCartItem = CartItemList?.length;
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
        {countCartItem > 0 && (
          <button
            className="add-button"
            onClick={() => {
              dispatch(removeAllItems(curentUserEmail));
            }}
          >
            Rmove all items
          </button>
        )}
      </div>
      {countCartItem > 0 ? (
        <div className="cart-container">
          <ul className="cartitem-list">
            <div className="cart-header">
              <h3 className="cart-heading">
                Groceries Basket : {CartItemList?.length}{" "}
              </h3>
              <span className="cart-heading">₹ {price} </span>
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
                    <div className="btn-group">
                      <div
                        className="btn"
                        onClick={() => {
                          dispatch(productCart(item, curentUserEmail));
                        }}
                      >
                        +
                      </div>
                      <span className="qty">{item?.qty}</span>
                      <div
                        className="btn"
                        onClick={() => {
                          dispatch(decrementItem(item, curentUserEmail));
                        }}
                      >
                        -
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="rightBlock">
            <h3 className="cart-heading">Payment Details </h3>
            <div className="flex">
              <span>Total MRP:</span>
              <span className="price">₹ {mrpPrice}</span>
            </div>
            <div className="flex">
              <span>Total Price:</span>
              <span className="price">₹ {price}</span>
            </div>
            <span className="save-text">you save {saveAmount}</span>
            <button className="add-button">Place Order</button>
          </div>
        </div>
      ) : (
        <div className="empty-block">
          <img src={emptyImage} alt="empty-card-image"></img>
        </div>
      )}
    </>
  );
};

export default Cart;
