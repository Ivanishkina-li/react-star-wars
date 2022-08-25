import favouriteReducer from "./favouriteReducer"; //фиг скобки не нужны так как делали дефолтный экспорт
import { combineReducers } from "redux";

export default combineReducers({
  favouriteReducer,
});
