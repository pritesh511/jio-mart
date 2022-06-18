import { useDispatch } from "react-redux";
import { productCart } from "../Actions/addToCart";
import { decrementItem } from "../Actions/decrementItem";
import Header from "../Components/header";
import { products } from "../Data/productData";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="product-container">
        <div className="prduct-block">
          {products.map((item, index) => {
            return (
              <div className="product-wrap" key={index}>
                <div className="product-up">
                  <img src={item?.productimgUrl} alt="product-image" />
                </div>
                <div className="product-down">
                  <p className="product-para">{item?.name}</p>
                  <span className="price">Price : ₹ {item?.price} </span>
                  <span className="mrp">MRP : ₹ {item?.mrp}</span>
                  {true ? (
                    <button
                      className="add-button"
                      onClick={() => {
                        dispatch(productCart(item));
                      }}
                    >
                      Add to card
                    </button>
                  ) : (
                    <div className="btn-group">
                      <div
                        className="btn"
                        onClick={() => {
                          dispatch(productCart(item));
                        }}
                      >
                        +
                      </div>
                      <span className="qty">0</span>
                      <div
                        className="btn"
                        onClick={() => {
                          dispatch(decrementItem(item));
                        }}
                      >
                        -
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
