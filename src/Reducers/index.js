import { combineReducers } from "redux";
import AddUserReducers from "../Reducers/addUserReducers";
import CurretUserReducer from "../Reducers/currentUserReducer";
import productCartReducers from "../Reducers/productCartReducers";

export const rootReducer = combineReducers({
  AddUserReducers,
  CurretUserReducer,
  productCartReducers,
});
