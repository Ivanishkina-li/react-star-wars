import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState().favouriteReducer);
});

export default store;
