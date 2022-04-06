import { combineReducers } from "redux";
import auth from "./authReducer";
import news from "./newsReducer";
import products from "./productReducer";

export default combineReducers({
  auth,
  news,
  products,
});
