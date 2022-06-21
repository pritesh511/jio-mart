import { combineReducers } from "redux";
import AddUserReducers from "../Reducers/addUserReducers";
import CurretUserReducer from "../Reducers/currentUserReducer";
import productCartReducers from "../Reducers/productCartReducers";
import placeOrderReducer from "../Reducers/placeOrderReducer";

export const rootReducer = combineReducers({
  AddUserReducers,
  CurretUserReducer,
  productCartReducers,
  placeOrderReducer,
});
