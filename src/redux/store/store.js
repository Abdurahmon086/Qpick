import { createStore } from "redux";
import reducerStore from "../reducer";

const store = createStore(reducerStore);

export default store;