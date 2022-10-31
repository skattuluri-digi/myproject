import { combineReducers } from "redux";
import Apireducer from "./Apireducers";

export const reducers = combineReducers({
    allApis:Apireducer,
});