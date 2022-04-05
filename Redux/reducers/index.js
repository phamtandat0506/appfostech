import { combineReducers } from "redux";
import auth from "./authReducer";
import news from "./newsReducer";

export default combineReducers({
  auth,
  news,
});
