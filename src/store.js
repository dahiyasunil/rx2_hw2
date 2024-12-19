import { createStore } from "redux";
import { libraryReducer } from "./libraryReducer.js";

const store = createStore(libraryReducer);
export default store;
