import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LocationReducer from "./reducer";



export const store=legacy_createStore(LocationReducer,applyMiddleware(thunk))
