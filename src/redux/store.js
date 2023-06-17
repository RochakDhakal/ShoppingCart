import { createStore } from "redux";
import rootReducers from "./reducers/main";


const store = createStore(
    rootReducers
);


export default store;