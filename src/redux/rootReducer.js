import { combineReducers } from "redux";

import investmentReducer from "./investment/reducers";

const rootReducer = combineReducers({
  investment: investmentReducer,
});

export default rootReducer;
