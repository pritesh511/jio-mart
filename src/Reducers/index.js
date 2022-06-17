import { combineReducers } from "redux";
import AddUserReducers from "../Reducers/addUserReducers";
import CurretUserReducer from "../Reducers/currentUserReducer";

export const rootReducer = combineReducers({
  AddUserReducers,
  CurretUserReducer,
});
