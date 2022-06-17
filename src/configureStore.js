import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import { rootReducer } from "./Reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);

export default store;
