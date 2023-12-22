import { combineReducers } from "redux";
import { ShoeReducer } from "./ShoeReducer";

export let rootReducer = combineReducers({ShoeReducer: ShoeReducer});