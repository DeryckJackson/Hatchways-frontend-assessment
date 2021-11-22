import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import studentReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  studentReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
