import { useDispatch } from "react-redux";
import { productCart } from "../Actions/addToCart";
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
                  <button
                    className="add-button"
                    onClick={() => {
                      dispatch(productCart(item));
                    }}
                  >
                    Add to card
                  </button>
                  <div className="btn-group">
                    <div className="btn">+</div>
                    <span className="price">5</span>
                    <div className="btn">-</div>
                  </div>
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
