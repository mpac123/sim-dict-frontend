import { combineReducers } from "redux";
import translations from "./translations";
import loading from "./loading";

export default combineReducers({
  translations,
  loading
});
