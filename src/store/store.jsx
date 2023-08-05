import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./authSlice";
import { addToFavoriteReducer } from "./addToFavoriteSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  hearted: addToFavoriteReducer,
});

const store = createStore(rootReducer);

export default store;
