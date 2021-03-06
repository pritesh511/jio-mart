import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCart } from "../Actions/addToCart";
import { decrementItem } from "../Actions/decrementItem";
import { loadProduct } from "../Actions/loadProduct";
import Header from "../Components/header";
import { products } from "../Data/productData";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct(products));
  }, []);

  const curentUserEmail = useSelector((state) => state.CurretUserReducer.email);

  const CartItemList = useSelector(
    (state) => state.productCartReducers.productCart
  );

  const filterData = search
    ? CartItemList?.filter((item) => {
        return item?.name.toLowerCase().match(search);
      })
    : CartItemList;

  return (
    <>
      <Header>
        <input
          className="filter-input"
          type="text"
          placeholder="search product Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Header>
      <div className="product-container">
        <div className="prduct-block">
          {filterData?.map((item, index) => {
            return (
              <div className="product-wrap" key={index}>
                <div className="product-up">
                  <img src={item?.productimgUrl} alt="product-image" />
                </div>
                <div className="product-down">
                  <p className="product-para">{item?.name}</p>
                  <span className="price">Price : ₹ {item?.price} </span>
                  <span className="mrp">MRP : ₹ {item?.mrp}</span>
                  <span className="amount_save"></span>
                  {item?.qty < 1 ? (
                    <button
                      className="add-button"
                      onClick={() => {
                        dispatch(productCart(item, curentUserEmail));
                      }}
                    >
                      Add to card
                    </button>
                  ) : (
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
