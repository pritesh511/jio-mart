import Header from "../Components/header";
import emptyImage from "../Images/order_empty.png";
import { useSelector, useDispatch } from "react-redux";
import { completeOrder } from "../Actions/completeOrder";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curentUserEmail = useSelector((state) => state.CurretUserReducer.email);
  const orderList = useSelector((state) =>
    state.placeOrderReducer.orderItems.filter(
      (item) => item?.userEmail === curentUserEmail
    )
  );

  const price = orderList?.reduce((a, b) => a + b?.price * b?.qty, 0);

  const mrp = orderList?.reduce((a, b) => a + b?.mrp * b?.qty, 0);

  const save_amount = mrp - price;

  const isOrderItem = orderList?.length;

  return (
    <>
      <Header />
      {isOrderItem ? (
        <div className="order-wrapper">
          <div className="order-header">
            <h1>Your Orders</h1>
            <button
              className="add-button"
              onClick={() => {
                dispatch(completeOrder(curentUserEmail));
              }}
            >
              Complete Order
            </button>
          </div>
          <table className="order-table">
            <thead>
              <th>Product-image</th>
              <th>Product</th>
              <th>Qty</th>
              <th>MRP</th>
              <th>Price</th>
              <th>Amount</th>
            </thead>
            <tbody>
              {orderList?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item?.productimgUrl} alt="product-image" />
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.qty}</td>
                    <td>{item?.mrp}</td>
                    <td>₹ {item?.price}</td>
                    <td>₹ {item?.qty * item?.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="order-data">
            <h2>Your total in this order : ₹ {price}</h2>
            <h3>Your saving in this order : ₹ {save_amount}</h3>
          </div>
        </div>
      ) : (
        <div className="order-wrap">
          <img src={emptyImage} alt="order-empty" />
          <button
            className="add-button"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Order;
